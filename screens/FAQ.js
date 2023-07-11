import React from "react";
import { Text, View } from "react-native";
import Style from "../assets/Style";
import { COLORS } from "../assets/Colors";
import { dimensions } from "../assets/Style";

const FAQ = () => {
    return (
        <View style={{ backgroundColor: COLORS.white, width: dimensions.width, height: dimensions.height, padding: 10 }}>
            <Text style={{ alignSelf: "center", fontFamily: "Poppins-Bold", fontSize: 16, padding: 5, color: COLORS.black, marginTop: 10 }}>
                Frequently Asked Questions
            </Text>

            <Text style={[Style.text, { margin: 15, fontFamily: "Poppins-Medium", fontSize: 12 }]}>
                1. Where can you add personal information ?
            </Text>
            <Text style={[Style.text, { margin: 15, marginTop: -10 }]}>Ans. You can add personal information through your profile. </Text>

            <Text style={[Style.text, { margin: 15, fontFamily: "Poppins-Medium", fontSize: 12, marginTop: -5 }]}>
                2. How can alumni participate in the event ?
            </Text>
            <Text style={[Style.text, { margin: 15, marginTop: -10 }]}>Ans. You can participate through the event post , there is an option to participate .</Text>

            <Text style={[Style.text, { margin: 15, fontFamily: "Poppins-Medium", fontSize: 12 }]}>
                3. If alumni can create the event ,then who will approve the event ?
            </Text>
            <Text style={[Style.text, { margin: 15, marginTop: -10 }]}>Ans.  Admin will approve the event .</Text>

            <Text style={[Style.text, { margin: 15, fontFamily: "Poppins-Medium", fontSize: 12 }]}>
                4. If you have any other questions ,issues or a suggestion ?
            </Text>
            <Text style={[Style.text, { margin: 15, marginTop: -10 }]}>Ans. Please write to us at : die9reise@gmail.com</Text>
        </View>
    )
}

export default FAQ