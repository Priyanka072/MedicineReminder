import React, { useState } from "react"
import { TextInput, View, TouchableOpacity, Text } from "react-native"
import Style, { dimensions } from "../assets/Style"
import { COLORS } from "../assets/Colors"
import { SelectList } from 'react-native-dropdown-select-list'
import LinearGradient from "react-native-linear-gradient"
import DateTimePickerModal from "react-native-modal-datetime-picker";
import moment from 'moment/moment';


const AddMedicine = () => {

    const [name, setname] = useState('')
    const [shape, setshape] = ('')
    const [fromDate, setfromdate] = ('')
    const [toDate, setdodate] = ('')
    const [timing, settiming] = ([])
    const [description, setdescription] = ('')
    const [frequency, setfrequency] = ([])
    const [dose, setdose] = ([])

    const minDate = moment().toDate();
    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

    const shapes = [
        { key: '1', value: "Pill" },
        { key: '2', value: "Injection" },
        { key: '3', value: "Syrup" },
        { key: '4', value: "Tablet" },
        { key: '4', value: "Further Study" },
        { key: '4', value: "Further Study" },
        { key: '4', value: "Further Study" },
        { key: '4', value: "Further Study" },
    ]

    const showDatePicker = () => {
        setDatePickerVisibility(true);
    };

    const hideDatePicker = () => {
        setDatePickerVisibility(false);
    };

    const handleConfirm = (date) => {
        const indiandate = moment.utc(date).format('DD MMM YYYY');
        const indianTime = moment.utc(date).add(5, 'hours').add(30, 'minutes').format('hh:mm A');
        hideDatePicker();
    };

    return (
        <View style={{ height: dimensions.height, backgroundColor: COLORS.white, padding: 10 }}>

            <TextInput style={Style.textinput} placeholder="Medicine Name"></TextInput>

            <SelectList
                inputStyles={{ color: COLORS.black, fontFamily: "Poppins-Medium" }}
                boxStyles={Style.textinput}
                dropdownStyles={{ backgroundColor: COLORS.white, width: dimensions.width * 0.9, alignSelf: "center" }}
                dropdownTextStyles={{ color: COLORS.black, fontFamily: "Poppins-Medium" }}
                setSelected={(val) =>
                    setshape(val)
                }
                data={shapes}
                save="key"
                placeholder={"Shape"}
                search={false}
            />

            <TouchableOpacity style={[Style.blueButtons, { backgroundColor: COLORS.grey, borderWidth: 0.5, height: 50, marginLeft: 20, justifyContent: "center" }]} onPress={() => showDatePicker()}>
                <Text style={[Style.buttonText, { color: COLORS.black, fontSize: 16, alignItems: "center", alignSelf: "center" }]}>{fromDate ? "Added" : "+"}</Text>
            </TouchableOpacity>

            <DateTimePickerModal
                isVisible={isDatePickerVisible}
                mode="datetime"
                onConfirm={handleConfirm}
                onCancel={hideDatePicker}
                minimumDate={minDate}

            />

            <TouchableOpacity onPress={() => {
                if (shownamewarning == true || showfathernamewarning == true) {
                    ToastAndroid.show("Please fill all the details properly", ToastAndroid.SHORT)
                }
                else {
                    handleaddmedicine({
                        "name": '',
                        "shape": '',
                        "fromDate": '',
                        "toDate": '',
                        "timing": [],
                        "description": '',
                        "frequency": [],
                        "dose": [],
                    })
                }
            }} style={Style.touchableButton}>
                <LinearGradient style={Style.touchableButton} colors={['#1A2159', '#1827A3',]}>
                    <Text style={Style.textinsideTouch}>Add </Text>
                </LinearGradient>
            </TouchableOpacity>
        </View>
    )
}

export default AddMedicine