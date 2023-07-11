import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import FAQ from "../screens/FAQ";
import DrawerScreenForAdmin from "./Drawer";
import TabNavigator from "./Tab";
import Notification from "../screens/Notification";
import AddMedicine from "../screens/AddMedicine";
import ShowMedicine from "../screens/ShowMedicine";
import AddExercise from "../screens/AddExercise";
import ShowExercise from "../screens/ShowExercise";
import AddAppointment from "../screens/AddAppoint";
import ShowAppointment from "../screens/ShowAppointment";

const Stack = createNativeStackNavigator();

const ScreenNavigator = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Home" component={TabNavigator} options={{headerShown: false}}/>
            <Stack.Screen name="Notification" component={Notification}/>
            <Stack.Screen name="Add Medicine" component={AddMedicine}/>
            <Stack.Screen name="Show Medicine" component={ShowMedicine}/>
            <Stack.Screen name="Add Exercise" component={AddExercise}/>
            <Stack.Screen name="View Exercise" component={ShowExercise}/>
            <Stack.Screen name="Add Appointment" component={AddAppointment}/>
            <Stack.Screen name="View Appointment" component={ShowAppointment}/>
        </Stack.Navigator>
    )
}

export default ScreenNavigator