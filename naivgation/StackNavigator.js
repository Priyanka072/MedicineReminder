import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { AuthAppContext } from "../App";
import { useContext } from "react";
import { View } from "react-native";
import { ActivityIndicator } from "react-native";
import ScreenNavigator from "./ScreenStack";
import NavigationService from "./NavigationService";
import Login from "../screens/Login";
import Register from "../screens/Registration";
import AboutUs from "../screens/AboutUs";
import { TermsOfServies } from "../screens/TermsOfServices";
import { PrivacyPolicies } from "../screens/PrivacyPolicies";


const Stack = createNativeStackNavigator();

export default function StackNavigator() {
    const { isLoading, userToken } = useContext(AuthAppContext);

    if (isLoading) {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <ActivityIndicator color={"#000000"} size={'large'}></ActivityIndicator>
            </View>
        );
    }

    return (
        <NavigationContainer ref={(ref) => NavigationService.setTopLevelNavigator(ref)} independent={true}>
            {userToken !== null ?
                <ScreenNavigator />
                :
                <Stack.Navigator>
                    <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
                    <Stack.Screen name="Registration" component={Register} options={{ headerShown: false }} />
                    <Stack.Screen name="About Us" component={AboutUs} />
                    <Stack.Screen name="Terms" component={TermsOfServies} />
                    <Stack.Screen name="Privacy Policy" component={PrivacyPolicies} />
                </Stack.Navigator>}

        </NavigationContainer>
    );
}