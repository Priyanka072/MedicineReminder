import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { COLORS } from '../assets/Colors';
import Profile from '../screens/Profile';
import { dimensions } from '../assets/Style';
import DrawerScreenForAdmin from './Drawer';
import { AuthAppContext } from "../App";
import { useContext } from "react";
import { Image, StyleSheet, } from 'react-native';

const Tab = createBottomTabNavigator();

function TabNavigator() {

    const { role } = useContext(AuthAppContext);

    return (
        <Tab.Navigator screenOptions={{ tabBarStyle: { height: 65 }, tabBarShowLabel: false }}>
            <Tab.Screen
                options={{
                    unmountOnBlur: true,
                    tabBarShowLabel: false,
                    tabBarIcon: ({ focused }) => (
                        <Image
                            source={focused ? require("../assets/images/FeedDark.png") : require("../assets/images/Feed.png")}
                            style={{ width: dimensions.width * 0.22, height: dimensions.width * 0.22 / 1.27, borderTopWidth: 5, borderColor: focused ? COLORS.blue : COLORS.white }}
                        />
                    ),
                    headerShown: false
                }}
                name="Feed" component={DrawerScreenForAdmin} />


            <Tab.Screen
                options={{
                    unmountOnBlur: true,
                    tabBarIcon: ({ focused }) => (
                        <Image
                            source={focused ? require("../assets/images/ProfileDark.png") : require("../assets/images/Profile.png")}
                            style={{ width: dimensions.width * 0.22, height: dimensions.width * 0.22 / 1.27, borderTopWidth: 5, borderColor: focused ? COLORS.blue : COLORS.white }}
                        />
                    ),
                    //headerShown: false
                }} name="Profile" component={Profile} />

        </Tab.Navigator>
    );
}

export default TabNavigator

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 10,
        paddingVertical: 15,
        backgroundColor: COLORS.white,
    },
    image: {
        width: dimensions.width * 0.1,
        height: dimensions.width * 0.1,
        marginRight: 10,
        padding: 5
    },
    searchInput: {
        flex: 1,
        height: 50,
        backgroundColor: '#eee',
        borderRadius: 5,
        paddingHorizontal: 10,
    },
});