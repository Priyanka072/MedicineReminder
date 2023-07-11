import { StyleSheet, Dimensions } from "react-native"
import { COLORS } from "./Colors"
const { width } = Dimensions.get("window").width;

export const dimensions = Dimensions.get("screen")

export default Styles = StyleSheet.create({
    view: {
        width: dimensions.width,
        backgroundColor: COLORS.white,
        justifyContent: "center",
        alignSelf: "center",
        marginBottom: 10
    },
    textinput: {
        color: COLORS.black,
        borderWidth: 0.3,
        backgroundColor: COLORS.grey,
        alignItems: "center",
        alignSelf: "center",
        width: dimensions.width * 0.9,
        margin: 5,
        fontFamily: "Poppins-Medium",
        height: 50,
        marginTop: 5,
        borderRadius: 5,
        paddingHorizontal: 10
    },
    touchableButton: {
        flexDirection: "row",
        marginTop: 15,
        width: dimensions.width * 0.9,
        alignSelf: 'center',
        height: 45,
        borderRadius: 5,
        justifyContent: 'center',
        backgroundColor:COLORS.bluetouchable
    },
    textinsideTouch: {
        color: COLORS.white,
        fontFamily: "Poppins-Bold",
        fontSize: 14,
        alignSelf: "center",
        marginTop:-10
    },

    textMedium: {
        color: COLORS.black,
        padding: 5,
        fontFamily: "Poppins-SemiBold",
        fontSize: 16,
        marginLeft: 10,
    },

    text: {
        color: COLORS.black,
        fontFamily: "Poppins-Regular",
        fontSize: 12,
        marginLeft: 10
    },
    textbold: {
        color: COLORS.black,
        fontFamily: "Poppins-Bold",
        fontSize: 13,
        alignItems: "center",
        alignContent: "center",
        width: "100%",
        marginTop: 10,
        marginLeft:10
    },
    textMessage: {
        color: COLORS.black,
        fontFamily: "Poppins-Regular",
        fontSize: 14,
        alignItems: "center",
        alignSelf: "center",
        width: "100%",
        marginLeft: 20,

    },
    phoneNumberView: {
        height: 45,
        backgroundColor: COLORS.grey,
        alignSelf: 'center',
        width: "85%"
    },
    textfooter: {
        color: COLORS.greyfooter,
        padding: 5,
        fontFamily: "Poppins-Medium",
        fontSize: 16,
    },
    redtext: {
        fontFamily: "Poppins-Regular",
        color: COLORS.red,
        marginLeft: 20
    },
    viewWrapper: {
        //flex: 1,
        alignItems: "center",
        backgroundColor: COLORS.white,
        width: "80%",
        alignSelf: "center",
        height: "55%",
        marginTop: 150,
        borderRadius: 10,
        elevation: 5,
        position: "absolute"
    },
    modalView: {
        alignItems: "center",
        justifyContent: "center",
        position: "absolute",
        top: "50%",
        left: "50%",
        elevation: 5,
        transform: [{ translateX: -(width * 0.4) },
        { translateY: -90 }],
        height: 180,
        width: width * 0.8,
        backgroundColor: COLORS.white,
        borderRadius: 7,
    },
    modalViewInLine: {
        alignItems: "center",
        justifyContent: "center",
        position: "absolute",
        top: "50%",
        left: "50%",
        elevation: 5,
        transform: [{ translateX: -(width * 0.4) },
        { translateY: -90 }],
        height: 180,
        width: width * 0.8,
        backgroundColor: COLORS.white,
        borderRadius: 7,
        flexDirection: 'row'
    },
    OTPInput: {
        width: '50%',
        alignSelf: 'center',
        height: 100,
        marginTop: 10,
        borderRadius: 10,
    },

    touchEvent: {
        borderRadius: 10,
        borderWidth: 0.5,
        width: "45%",
        alignItems: "center",
        alignSelf: "center",
        marginRight: 5,
        height: 30,
        justifyContent: "center"
    },
    textEvent: {
        color: COLORS.black,
        alignItems: "center",
        alignSelf: "center",
        fontFamily: "Poppins-Medium",
        fontSize: 14
    },
    cardview: {
        backgroundColor: COLORS.white,
        marginLeft: 5,
        padding: 10,
        borderWidth: 0.5,
        borderRadius: 10,
        marginTop: 10,
        width: dimensions.width * 0.45,
        marginRight: 5,
    },
    cardimage: {
        height: 100,
        width: 100,
        margin: 2,
        borderRadius: 100,
        alignSelf: "center"
    },
    cardText: {
        fontFamily: "Poppins-Medium",
        fontSize: 10,
        color: COLORS.black,
        alignSelf: "center",
    },
    BlueText: {
        fontSize: 22,
        color: COLORS.bluetouchable
    },
    cardtouchable: {
        alignSelf: 'center',
        borderRadius: 10,
        justifyContent: 'center',
        backgroundColor: COLORS.bluetouchable,
        width: '80%',
        padding: 3,
        marginTop: 5
    },
    tabBar: {
        backgroundColor: '#f4f5f9',
        flexDirection: "row",
        height: 70,
        justifyContent: "center",
        elevation: 10
    },
    tabBarLabel: {
        color: '#000000',
        alignSelf: "center",
        margin: 10
    },
    container: {
        flex: 1,
        //backgroundColor: '#fff',
        //justifyContent: 'center',
    },
    cardContainer: {
        backgroundColor: COLORS.white,
        width: '96%',
        alignSelf: "center",
        padding: 10,
        borderRadius: 10,
        marginTop: 10,
        elevation: 10,
        height: 130
    },
    card: {

    },
    heading: {
        fontSize: 12,
        color: COLORS.black,
        fontFamily: "Poppins-Bold",
        width: '65%'
    },
    body: {
        fontSize: 20,
        lineHeight: 20 * 1.5,
        textAlign: 'center',
    },
    subCategoriesList: {
    },
    tabBar: {
        backgroundColor: COLORS.white,
        flexDirection: "row",
        height: 70,
        justifyContent: "center",
        elevation: 10,
        width: "100%"
    },
    blueButtons: {
        width: '45%',
        height: dimensions.height * 0.06,
        alignSelf: "flex-start",
        margin: 10,
        borderRadius: 10,
        justifyContent: 'center',
        backgroundColor: COLORS.bluetouchable,
        padding: 3,
        marginTop: 5
    },
    buttonText: {
        color: COLORS.white,
        padding: 5,
        fontFamily: "Poppins-Regular",
        fontSize: 14,
        alignSelf: "center"
    },
    textDateandTime: {
        color: COLORS.black,
        padding: 5,
        fontFamily: "Poppins-Regular",
        fontSize: 14,
        marginTop: -10,
        alignSelf: "flex-start",
        marginLeft: 10
    },
    textInfo: {
        color: COLORS.black,
        fontFamily: "Poppins-Regular",
        fontSize: 12,
        textAlign: "justify",
        marginTop: 10
    },
    approveButton: {
        width: "30%",
        backgroundColor: COLORS.green,
        justifyContent: "center",
        borderRadius: 10,
        height: dimensions.height * 0.04
    },
    declineButton: {
        width: "30%",
        backgroundColor: COLORS.red,
        justifyContent: "center",
        borderRadius: 10,
        height: dimensions.height * 0.04,
        marginLeft: 15
    },
    blueButton:{
        width: "20%", 
        alignItems: "center", 
        alignSelf: "center", 
        backgroundColor: COLORS.bluetouchable, 
        borderRadius: 10, 
        height: 30, 
        justifyContent: "center" 
    }
})