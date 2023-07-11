import React, { useState } from "react";
import { View, TextInput, TouchableOpacity, Text, ScrollView, StatusBar, Modal, Image, ToastAndroid } from "react-native";
import Style, { dimensions } from "../assets/Style";
import { COLORS } from "../assets/Colors";
import LinearGradient from "react-native-linear-gradient"
import ApiManager, { SECRET_KEY } from "./APIManager";
import Footer from "./Footer";
import { useNavigation } from "@react-navigation/native";
import { regexforemailid, regexforname } from "./Regex";


const Register = () => {

    const [firstname, setname] = useState("")
    const [lastname, setfatherName] = useState("")
    const [PhoneNumber, setPhoneNumber] = useState("")
    const [EmailId, setEmailId] = useState("")
    const [Password, setpassword] = useState("")
    const [passwordVisible, setpasswordVisible] = useState(true)
    const [shownamewarning, setshownamewarning] = useState(false)
    const [showfathernamewarning, setshowfathernamewarning] = useState(false)
    const [showemailwarning, setshowemailwarning] = useState(false)
    const navigation = useNavigation()
 
    const handleRegister = async dataaa => {
        console.log(dataaa)
        try {
            const result = await ApiManager("register", {
                method: "POST",
                headers: {
                    'content-type': 'application/json',
                    'Secret-Key ': SECRET_KEY
                },
                data: dataaa
            });
            navigation.navigate("Login")
            console.log(result)
            return result;
        }
        catch (error) {
            console.log(error)
            ToastAndroid.show("Something went wrong", ToastAndroid.SHORT)
            return error;
        }
    }

    return (
        <ScrollView>
            <View style={[Style.view, { height: dimensions.height }]}>
                <StatusBar backgroundColor={COLORS.white} barStyle={"dark-content"}></StatusBar>

                <Image style={{ width: dimensions.width * 0.33, height: dimensions.width * 0.33, alignSelf: "center", marginTop: -100 }} source={require("../assets/images/loggo.jpg")}></Image>

                <Text style={[Style.textMedium, { alignSelf: "center" }]}>Sign Up</Text>
                <Text style={[Style.text, { alignSelf: "center", paddingBottom: 10 }]}>Register to manage your account</Text>
                <TextInput placeholderTextColor={COLORS.greyfooter} style={Style.textinput} onChangeText={(text) => {
                    setname(text)
                    if (!regexforname.test(text) || text == "") {
                        setshownamewarning(true)
                    }
                    else {
                        setshownamewarning(false)
                    }
                }} placeholder="First Name"></TextInput>
                {shownamewarning == true &&
                    <Text style={Style.redtext}>Please insert a valid name</Text>}

                <TextInput placeholderTextColor={COLORS.greyfooter} style={Style.textinput} onChangeText={(text) => {
                    setfatherName(text)
                    if (!regexforname.test(text) || text == "") {
                        setshowfathernamewarning(true)
                    }
                    else {
                        setshowfathernamewarning(false)
                    }
                }} placeholder="Last Name"></TextInput>
                {showfathernamewarning == true &&
                    <Text style={Style.redtext}>Please insert a valid name</Text>}

                <TextInput placeholderTextColor={COLORS.greyfooter} placeholder="User Name" style={Style.textinput} onChangeText={(text) => setPhoneNumber(text)}></TextInput>

                <TextInput placeholderTextColor={COLORS.greyfooter} style={Style.textinput} onChangeText={(text) => {
                    setEmailId(text)
                }}
                    onBlur={() => {
                        if (regexforemailid.test(EmailId)) {
                            setshowemailwarning(false)
                        } else {
                            setshowemailwarning(true)
                        }
                    }}
                    onSubmitEditing={() => {
                        if (regexforemailid.test(EmailId)) {
                            setshowemailwarning(false)
                        } else {
                            setshowemailwarning(true)
                        }
                    }} placeholder="Email Address"></TextInput>

                {showemailwarning == true &&
                    <Text style={Style.redtext}>Please insert a valid email address</Text>}


                <View style={[Style.textinput, { flexDirection: "row" }]}>
                    <TextInput placeholderTextColor={COLORS.greyfooter} secureTextEntry={passwordVisible} style={{ width: "85%", alignSelf: "flex-start", fontFamily: "Poppins-Medium" }} onChangeText={(text) => {
                        setpassword(text)
                    }} placeholder="Password"></TextInput>

                    <TouchableOpacity onPress={() => setpasswordVisible(!passwordVisible)}>
                        <Text style={[Style.text, { fontSize: 12, color: COLORS.bluetouchable, fontWeight: "bold" }]}>{passwordVisible == true ? "Show" : "Hide"}</Text>
                    </TouchableOpacity>
                </View>

                <TouchableOpacity onPress={() => {

                    if (shownamewarning == true || showfathernamewarning == true) {
                        ToastAndroid.show("Please fill all the details properly", ToastAndroid.SHORT)
                    }
                    else {
                        handleRegister({
                            "firstname": firstname,
                            "lastname": lastname,
                            "emailid": EmailId,
                            "username": PhoneNumber,
                            "password": Password
                        })
                    }
                }} style={Style.touchableButton}>
                    <LinearGradient style={Style.touchableButton} colors={['#1A2159', '#1827A3',]}>
                        <Text style={Style.textinsideTouch}>Sign Up</Text>
                    </LinearGradient>
                </TouchableOpacity>

                <View style={{ flexDirection: "row", alignSelf: "center", marginTop: 10 }}>
                    <Text style={[Style.text, { fontSize: 12 }]}>Do you have an account ?</Text>
                    <TouchableOpacity onPress={() => navigation.navigate("Login")}>
                        <Text style={[Style.text, { fontSize: 12, textDecorationLine: "underline" }]}>Login</Text>
                    </TouchableOpacity>
                </View>
                <Footer></Footer>

            </View >
        </ScrollView >
    )
}

export default Register