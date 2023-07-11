import React from "react";
import { View, ActivityIndicator } from "react-native";
import { COLORS } from "../assets/Colors";

const Loader = () => {
    return (
        <View style={{ justifyContent: "center", width: "100%", height: "100%", }}>
            <ActivityIndicator style={{alignSelf:"center",alignItems:"center"}} size={"large"} color={COLORS.bluetouchable}></ActivityIndicator>
        </View>
    )
}

export default Loader