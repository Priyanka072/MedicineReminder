import React from "react"
import { View, Text, ScrollView } from "react-native"
import Style, { dimensions } from "../assets/Style"
import { COLORS } from "../assets/Colors"

export const PrivacyPolicies = () => {
    return (
        <View style={{ padding: 10, alignSelf: "center", backgroundColor: COLORS.white }}>
            <ScrollView>

                <Text style={{ alignSelf: "center", fontFamily: "Poppins-Bold", fontSize: 16, padding: 5, color: COLORS.black, marginTop: 10 }}>
                    Privacy Policy
                </Text>
                <Text style={Style.textInfo}>Welcome to Gokhale Maharajas Alumnis Association (“Platform”)! We are committed to transparency about the data we collect about you on our Platform.</Text>
                <Text style={Style.textInfo}>Please read our Privacy Policy carefully. Our Privacy Policy applies to all the Personal Information that we collect when you use our Platform and related Services.</Text>
                <Text style={Style.textInfo}>Our Privacy Policy lets you know what Personal Information we collect and how we use it. We collect your Personal Information to provide Services to you. We will never  share your personal data with third parties without your consent.</Text>
                <Text style={Style.textbold}>ABOUT THE COMPANY & THIS PRIVACY POLICY</Text>
                <Text style={Style.textInfo}>We provide to you an application-based platform (“Platform”) where you can connect and interact with communities of your choice and regularly see news and updates about that community and the people of that community (“Services”). The type of your Personal Information we collect, store, and/or use;</Text>
                <Text style={Style.textInfo}>The purpose for collection of such data or information from you;


                    Our information security practices and policies (how we ensure confidentiality of your data); and
                    Our policy on sharing or transferring your data or information with third parties.
                </Text>
                <Text style={Style.textInfo}>Since this Privacy Policy is an electronic contract under the Information technology Act, 2000 of the Republic of India, it does not require any physical, electronic or digital signature.</Text>
                <Text style={Style.textbold}>TYPE OF PERSONAL INFORMATION THAT WE COLLECT</Text>
                <Text style={Style.textbold}>A. Information that we collect:</Text>
                <Text style={Style.textInfo}>When you download, access, and use our Platform and related Services, we must receive and collect certain data of yours and store the same to be able to operate, improve, understand, customize, support, market, and provide to you with better Services and experiences. However, we only collect such information and data that we consider necessary to meet our requirements and improve our Services. The type of information we collect depends on how you use our Platform and what Services you avail from us.</Text>
                <Text style={Style.textbold}>Mandatory information requirements : </Text>
                <Text style={Style.textInfo}>We require certain information to deliver our services and without this, we will not be able to provide you with our Service. For example, to enable you to create an account on our Platform, you must provide your mobile number, name, Batch, designation </Text>
                <Text style={Style.textbold}>Usage and log information : </Text>
                <Text style={Style.textInfo}>We collect information about your activity on our Platform, like service-related, diagnostic, and performance information. This includes information about your activity (including how you use our Services, your Services settings, how you interact with others using our Services, and the time, frequency, and duration of your activities and interactions), log files, and diagnostic, crash, and performance logs and reports.</Text>
            </ScrollView>
        </View>
    )
}