import React from 'react';
import { View, Alert, StyleSheet } from 'react-native';
import { COLORS } from '../assets/Colors';
import RNRestart from 'react-native-restart'
import { useContext } from "react";
import { AuthAppContext } from "../App";
import { useFocusEffect } from '@react-navigation/native';


const LogoutScreen = ({ navigation }) => {

    const { logout } = useContext(AuthAppContext);

    const handleLogout = () => {
        Alert.alert(
            'Log Out',
            'Are you sure you want to log out?',
            [
                {
                    text: 'Log Out',
                    onPress: () => {
                        // perform log out functionality here
                        logout()
                        RNRestart.Restart()
                    }
                },
                {
                    text: 'Cancel',
                    style: 'cancel'
                },
            ]
        );
    };

    useFocusEffect(
        React.useCallback(() => {
            console.log("API is calling ")
            handleLogout()

            // Perform refresh logic here
            // This code will run when the screen comes into focus
            return () => {
                // Cleanup or unsubscribe if necessary
            };
        }, [])
    );

    return (
        <View style={styles.container}>
            
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
        alignItems: 'center',
        justifyContent: 'center',
    },
    button: {
        backgroundColor: COLORS.bluetouchable,
        borderRadius: 10,
        paddingVertical: 10,
        paddingHorizontal: 20,
    },
    buttonText: {
        fontSize: 16,
        color: '#FFFFFF',
        fontFamily: "Poppins-Medium"
    },
});

export default LogoutScreen;
