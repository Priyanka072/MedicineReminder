import React from "react";
import { Text, View } from "react-native";
import Style, { dimensions } from "../assets/Style";
import { COLORS } from "../assets/Colors";

const AboutUs = () => {
    return (
        <View style={{ backgroundColor: COLORS.white, width: dimensions.width, height: dimensions.height, padding: 10 }}>
            <Text style={{ alignSelf: "center", fontFamily: "Poppins-Bold", fontSize: 16, padding: 5, color: COLORS.black, marginTop: 10 }}>
                About this app
            </Text>
            <Text style={{ alignSelf: "center", fontFamily: "Poppins-Bold", fontSize: 16, padding: 5, color: COLORS.black, marginTop: -10 }}>
                Version : 1.1
            </Text>

            <Text style={[Style.text, { margin: 15 }]}>
                “Gokhale Maharajas Alumnis Association” allows you to access your alumni network. It helps you stay connected with your fellow alumni and up-to-date with the latest news from other alumni. Registered users can  Create and participate in alumni events.
            </Text>

            <Text style={[Style.text, { margin: 15, marginTop: -5 }]}>You can :            </Text>

            <Text style={Style.text}>
                Search alumni based on Batch, location, designation.</Text>
            <Text style={Style.text}>Stay updated about events.</Text>
            <Text style={Style.text}>Communicate easily with other registered alumni.</Text>
            <Text style={Style.text}>Reach out for help with each other.</Text>
        </View>
    )
}

export default AboutUs