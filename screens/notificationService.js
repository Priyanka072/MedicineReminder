import messaging from '@react-native-firebase/messaging';
import NavigationService from '../naivgation/NavigationService';
import AsyncStorage from '@react-native-async-storage/async-storage';

export async function requestUserPermission() {
    const authStatus = await messaging().requestPermission();
    const enabled =
        authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
        authStatus === messaging.AuthorizationStatus.PROVISIONAL;

    if (enabled) {
        console.log('Authorization status:', authStatus);
    }
}

export async function notificationListener() {

    const unsubscribe = messaging().setBackgroundMessageHandler
        (async remoteMessage => {
            console.log("Notification Service remoteMessage from app", remoteMessage)
            let data = JSON.parse(remoteMessage.data.data)
            if (data.screen == 'Chat') {
                AsyncStorage.setItem("profileData", JSON.stringify({ name: data.name, friend_id: data.sender_id }));
                console.log("data", data)
                NavigationService.navigate("Chat", { data: data })
            }

            else if (data.screen == "Event Details") {
                console.log("data from event details", data.event_id)

                let event_id = data.event_id
                NavigationService.navigate("Event Details", { event_id: event_id })
            }

            else if (data.screen == 'User Details') {
                console.log("data", data)
                NavigationService.navigate("User Details", { user_id: data.user_id })
            }

            else {
                NavigationService.navigate(data.screen)
            }
        });


    messaging()
        .onNotificationOpenedApp(remoteMessage => {
            if (remoteMessage) {
                console.log(
                    'Notification caused app to open from background state:',
                    remoteMessage,
                );

                let data = JSON.parse(remoteMessage.data.data)

                if (data.screen == 'Chat') {
                    AsyncStorage.setItem("profileData", JSON.stringify({ name: data.name, friend_id: data.sender_id }));
                    console.log("data", data)
                    NavigationService.navigate("Chat", { data: data })
                }

                else if (data.screen == "Event Details") {
                    console.log("data from event details", data.event_id)

                    let event_id = data.event_id
                    NavigationService.navigate("Event Details", { event_id: event_id })
                }

                else if (data.screen == 'User Details') {
                    console.log("data", data)
                    NavigationService.navigate("User Details", { user_id: data.user_id })
                }

                else {
                    NavigationService.navigate(data.screen)
                }
            }

        });

    // Check whether an initial notification is available
    messaging()
        .getInitialNotification()
        .then(remoteMessage => {
            if (remoteMessage) {
                console.log(
                    'Notification caused app to open from quit state:',
                    remoteMessage,
                );

                let data = JSON.parse(remoteMessage.data.data)

                if (data.screen == 'Chat') {
                    AsyncStorage.setItem("profileData", JSON.stringify({ name: data.name, friend_id: data.sender_id }));
                    NavigationService.navigate("Chat", { data: data })
                }

                else if (data.screen == 'Event Details') {
                    console.log("data", data.event_id)
                    NavigationService.navigate("Event Details", { event_id: data.event_id })
                }

                else if (data.screen == 'User Details') {
                    console.log("data", data)
                    NavigationService.navigate("User Details", { user_id: data.user_id })
                }

                else {
                    NavigationService.navigate(data.screen)
                }
            }
        });

    return unsubscribe

}

