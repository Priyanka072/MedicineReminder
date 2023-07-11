import React from 'react';
import { View, Image, StyleSheet, TouchableOpacity, Text } from 'react-native';
import { DrawerActions } from '@react-navigation/native';
import { useNavigation } from "@react-navigation/native";
import { dimensions } from '../assets/Style';
import { COLORS } from '../assets/Colors';


const CustomHeader = () => {
    const navigation = useNavigation()
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => navigation.dispatch(DrawerActions.openDrawer())}>
                <Image source={require("../assets/images/Drawer.png")} style={{ width: dimensions.width * 0.07, height: dimensions.width * 0.07, marginRight: 5 }}></Image>
            </TouchableOpacity>
            <Text style={{ width: dimensions.width * 0.2, color:COLORS.black, marginLeft:10 }}>Medicine Reminder</Text>
            <TouchableOpacity onPress={() => navigation.navigate("Search")}>
                <Image source={require("../assets/images/searchbox.png")} style={{ width: dimensions.width * 0.5, height: dimensions.width * 0.5 * 0.1222, margin: 5 }}></Image>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate("Notification")}>
                <Image source={require("../assets/images/Notification.png")} style={{ width: dimensions.width * 0.07, height: dimensions.width * 0.07, margin: 5 }}></Image>
            </TouchableOpacity>
        </View>
    );
};

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

export default CustomHeader;
