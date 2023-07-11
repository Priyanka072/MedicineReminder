import React, { useState, useEffect } from "react"
import MyStack from "./naivgation/ScreenStack"
import AsyncStorage from "@react-native-async-storage/async-storage";
import messaging from '@react-native-firebase/messaging';
import { firebase } from "@react-native-firebase/messaging";
import firebaseConfig from "./Firebase/config";
import PushNotification from "react-native-push-notification";
import { PermissionsAndroid, Platform, Alert } from "react-native";
import { notificationListener, requestUserPermission } from "./screens/notificationService";
import StackNavigator from "./naivgation/StackNavigator";

export const AuthAppContext = React.createContext();

const App = () => {

    const [userToken, setUserToken] = useState(null);

    const login = (userToken) => {
        AsyncStorage.setItem("userDetails", JSON.stringify({ userToken: userToken}));
    }

    const logout = () => {
        setUserId(null)
        AsyncStorage.removeItem("userDetails")
    }

    if (!firebase.apps.length) {
        firebase.initializeApp(firebaseConfig);
    }

    const isLoggedIn = async () => {
        try {
            let userDetails = await AsyncStorage.getItem("userDetails");
            const UserDetails = JSON.parse(userDetails)
            setUserToken(UserDetails.userToken);
            setUserId(UserDetails.userId)
            setrole(UserDetails.role)
        }
        catch (e) {
            console.log("isLoggedIn function error", e)
        }
    }

    const NotificationListener = () => {
        const unsubscribe = messaging().onMessage(async remoteMessage => {
            console.log("Remote message ", remoteMessage)
            PushNotification.localNotification({
                title: remoteMessage.notification.title,
                channelId: 'fcm_fallback_notification_channel',
                message: remoteMessage.notification.body,
                bigPictureUrl: remoteMessage.notification.android.imageUrl,
            })
            notificationListener()

        });
        return unsubscribe;
    }

    useEffect(() => {

        if (Platform.OS == 'android') {
            PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.POST_NOTIFICATIONS).then((res) => {
                console.log("res", res)
                if (!!res) {
                    requestUserPermission()
                    notificationListener()
                }

            }).catch(error => {
                console.log("Error in taking permissin from user >>>", error)
                Alert.alert('Something went wrong')
            })

            PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE, PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE).then((res) => {
                console.log("res", res)
            }).catch(error => {
                console.log("Error in taking permission >>>", error)
                Alert.alert('Something went wrong')
            })

        }
        async function fetchInfo() {
            const unsubscribe = messaging().setBackgroundMessageHandler
                (async remoteMessage => {
                    console.log("remoteMessage from app", remoteMessage)
                });
            NotificationListener()

            isLoggedIn();
            return unsubscribe
        }
        fetchInfo()

    }, []);

    return (
        <AuthAppContext.Provider value={{ login, logout, userToken }}>
            <StackNavigator />
        </AuthAppContext.Provider>
    )
}
export default App