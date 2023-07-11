import React, { useState } from "react";
import { View, TextInput, TouchableOpacity, Text, Image, StatusBar, ToastAndroid } from "react-native"
import Style from "../assets/Style";
import ApiManagerLogin, { SECRET_KEY } from "./APIManager";
import { dimensions } from "../assets/Style";
import LinearGradient from "react-native-linear-gradient"
import Footer from "./Footer";
import { COLORS } from "../assets/Colors";
import { useNavigation } from "@react-navigation/native";
import RNRestart from 'react-native-restart'
import ApiManageLogin from "./ApiLogin";
import { useContext } from "react";
import { AuthAppContext } from "../App";

const Login = () => {

    const [username, setusername] = useState("")
    const [password, setpassword] = useState("")
    const navigation = useNavigation()

    const { login } = useContext(AuthAppContext);


    const handleLogin = async dataaa => {
        try {
            const result = await ApiManageLogin("login", {
                method: "GET",
                headers: {
                    'content-type': 'application/json',
                    'Secret-Key ': SECRET_KEY
                },
                params: dataaa
            });
            login(result.data.token)
            RNRestart.Restart()
            console.log(result.data)
            return result;
        }
        catch (error) {
            console.log(error)
            return error;
        }
    }

    return (
        <View style={[Style.view, { justifyContent: "flex-start", height: "100%" }]}>

            <StatusBar backgroundColor={COLORS.white} barStyle={"dark-content"}></StatusBar>
            <Image style={{ width: dimensions.width * 0.33, height: dimensions.width * 0.33, alignSelf: "center", marginTop: 50 }} source={require("../assets/images/loggo.jpg")}></Image>
            <Text style={[Style.textMedium, { alignSelf: "center" }]}>Sign In</Text>

            <Text style={[Style.text, { marginLeft: 20 }]}>User Name</Text>
            <TextInput placeholderTextColor={COLORS.greyfooter} placeholder="User Name" keyboardType="ascii-capable" style={Style.textinput} onChangeText={(text) => setusername(text)}></TextInput>

            <Text style={[Style.text, { marginLeft: 20 }]}>Password</Text>
            <TextInput placeholderTextColor={COLORS.greyfooter} placeholder="Password" keyboardType="ascii-capable" style={Style.textinput} onChangeText={(text) => setpassword(text)}></TextInput>

            <TouchableOpacity onPress={() => navigation.navigate("Forgot Password")}>
                <Text style={[Style.text, { textDecorationLine: "underline", alignSelf: "flex-end", margin: 10, fontSize: 14 }]}>Forgot Password</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => {
                handleLogin({
                    "username": username,
                    "password": password,
                    "deviceToken": '12345'
                })
            }} style={[Style.touchableButton, { marginTop: -10 }]}>
                <LinearGradient style={Style.touchableButton} colors={['#1A2159', '#1827A3',]}>
                    <Text style={Style.textinsideTouch}>Continue</Text>
                </LinearGradient>
            </TouchableOpacity>
            <View style={{ flexDirection: "row", alignSelf: "center", marginTop: 10 }}>
                <Text style={[Style.text, { fontSize: 12 }]}>Not Registered?</Text>

                <TouchableOpacity onPress={() => navigation.navigate("Registration")}>
                    <Text style={[Style.text, { fontSize: 12, textDecorationLine: "underline", marginLeft: 5 }]}>Create an account</Text>
                </TouchableOpacity>
            </View>

            <Footer></Footer>
        </View>
    )
}

export default Login