import React, { useState } from "react"
import { View, TouchableOpacity, Text } from "react-native"
import Style from "../assets/Style"
import LinearGradient from "react-native-linear-gradient"
import { useNavigation } from "@react-navigation/native";

const Feed = () => {

    const [showmedicinemenu, setshowmedicinemenu] = useState(false)
    const [showappointmentmenu, setshowappointmentmenu] = useState(false)
    const [showexarciemenu, setshowexercismenu] = useState(false)

    const navigation = useNavigation()

    return (
        <View>
            <TouchableOpacity style={Style.touchableButton} onPress={() => setshowmedicinemenu(!showmedicinemenu)}>
                <LinearGradient style={Style.touchableButton} colors={['#1A2159', '#1827A3',]}>
                    <Text style={Style.textinsideTouch}>Medicine</Text>
                </LinearGradient>
            </TouchableOpacity>

            {
                showmedicinemenu &&
                <View>
                    <TouchableOpacity style={Style.touchableButton} onPress={() => navigation.navigate("Add Medicine")}>
                        <LinearGradient style={Style.touchableButton} colors={['#1A2159', '#1827A3',]}>
                            <Text style={Style.textinsideTouch}>Add Medicine</Text>
                        </LinearGradient>
                    </TouchableOpacity>
                    <TouchableOpacity style={Style.touchableButton} onPress={() => navigation.navigate("Add Medicine")}>
                        <LinearGradient style={Style.touchableButton} colors={['#1A2159', '#1827A3',]}>
                            <Text style={Style.textinsideTouch}>View Medicine</Text>
                        </LinearGradient>
                    </TouchableOpacity>
                </View>
            }

            <TouchableOpacity style={Style.touchableButton} onPress={() => setshowappointmentmenu(!showappointmentmenu)}>
                <LinearGradient style={Style.touchableButton} colors={['#1A2159', '#1827A3',]}>
                    <Text style={Style.textinsideTouch}>Appointment</Text>
                </LinearGradient>
            </TouchableOpacity>
            {
                showappointmentmenu &&
                <View>
                    <TouchableOpacity style={Style.touchableButton} onPress={() => navigation.navigate("Add Medicine")}>
                        <LinearGradient style={Style.touchableButton} colors={['#1A2159', '#1827A3',]}>
                            <Text style={Style.textinsideTouch}>Add Appointment</Text>
                        </LinearGradient>
                    </TouchableOpacity>
                    <TouchableOpacity style={Style.touchableButton} onPress={() => navigation.navigate("Add Medicine")}>
                        <LinearGradient style={Style.touchableButton} colors={['#1A2159', '#1827A3',]}>
                            <Text style={Style.textinsideTouch}>Show Appointment</Text>
                        </LinearGradient>
                    </TouchableOpacity>
                </View>
            }

            <TouchableOpacity style={Style.touchableButton} onPress={() => setshowexercismenu(!showexarciemenu)}>
                <LinearGradient style={Style.touchableButton} colors={['#1A2159', '#1827A3',]}>
                    <Text style={Style.textinsideTouch}>Exercise</Text>
                </LinearGradient>
            </TouchableOpacity>
            {
                showexarciemenu &&
                <View>
                    <TouchableOpacity style={Style.touchableButton} onPress={() => navigation.navigate("Add Medicine")}>
                        <LinearGradient style={Style.touchableButton} colors={['#1A2159', '#1827A3',]}>
                            <Text style={Style.textinsideTouch}>Add Exercise</Text>
                        </LinearGradient>
                    </TouchableOpacity>
                    <TouchableOpacity style={Style.touchableButton} onPress={() => navigation.navigate("Add Medicine")}>
                        <LinearGradient style={Style.touchableButton} colors={['#1A2159', '#1827A3',]}>
                            <Text style={Style.textinsideTouch}>Show Exercise</Text>
                        </LinearGradient>
                    </TouchableOpacity>
                </View>
            }
        </View>
    )
}

export default Feed