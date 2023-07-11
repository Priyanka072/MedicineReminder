import React from "react";
import { Text, View } from "react-native";
import Style from "../assets/Style";
import { COLORS } from "../assets/Colors";
import { useNavigation } from "@react-navigation/native";

const Footer = () => {
    const navigation = useNavigation()
    return (
        <View>
            <View style={{ bottom: 0, position: "relative", flexDirection: "row", alignSelf: "center", backgroundColor: COLORS.white }}>
                <Text style={Style.textfooter} onPress={() => navigation.navigate("About Us")}>About</Text>
                <Text style={Style.textfooter}>|</Text>
                <Text style={Style.textfooter} onPress={() => navigation.navigate("Terms")}>Terms</Text>
                <Text style={Style.textfooter}>|</Text>
                <Text style={Style.textfooter} onPress={() => navigation.navigate("Privacy Policy")}>Privacy</Text>
            </View>

            <Text style={[Style.text, { alignSelf: "center", fontSize: 12 }]}>© Copyright 2023 by Prilient Jaipur </Text>

        </View>
    )
}

export default Footer