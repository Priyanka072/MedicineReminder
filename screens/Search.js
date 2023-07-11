import React, { useState } from "react";
import { View, TouchableOpacity, Text, TextInput, Image, ToastAndroid } from "react-native";
import { userId, userToken } from "./AsyncStorage";
import { SECRET_KEY } from "./APIManager";
import { useRef } from "react";
import ApiManager from "./APIManager";
import { FlatList } from "react-native-gesture-handler";
import { Dimensions } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { COLORS } from "../assets/Colors";
import Styles from "../assets/Style";
import Loader from "./Loader"
import Style from "../assets/Style";

const SearchScreen = () => {

    const [oldData, setOldData] = useState()
    const [data, setData] = useState()
    const [search, setSearch] = useState('')
    const searchRef = useRef()
    const navigation = useNavigation()
    const dimensions = Dimensions.get("screen")
    const [empty, setempty] = useState(false)

    const [isLoading, setisloading] = useState(false)
    const [searchingishappening, setsearchingishappening] = useState(false)

    const user_getSearch = async data => {
        console.log(userToken._j)
        setempty(false)
        try {
            const result = await ApiManager("user/userSerach", {
                method: "GET",
                headers: {
                    'Authorization': 'Bearer ' + userToken._j,
                    'content-type': 'application/json',
                    'user_id': userId._j,
                    'project_secret_key': SECRET_KEY
                },
                params: data
            });
            setData(result.data.data)
            setOldData(result.data.data)
            setisloading(false)
            return result;
        }
        catch (error) {
            if (error.response.status == 404) {
                setempty(true)
            }
            setisloading(false)
            return error;
        }
    }

    const searchwithKeyword = (txt) => {
        setSearch(txt)
        user_getSearch({
            "keyword": txt
        })
    }

    const renderItem = ({ item, index }) => {
        return (
            <View style={{ marginLeft: -5 }}>
                <TouchableOpacity onPress={() => navigation.navigate("View", { friend_id: item._id })}>
                    <View style={[Style.cardview, { height: dimensions.height * 0.22 }]}>
                        <Image source={require("../assets/images/logo.png")} style={Style.cardimage}></Image>
                        <Text numberOfLines={1} style={[Style.cardText, { fontSize: 14, }]}>{item.name}</Text>
                        <Text numberOfLines={1} style={Style.cardText}>{item.designation}</Text>

                        <Text numberOfLines={1} style={Style.cardText}>{item.location}</Text>
                    </View>
                </TouchableOpacity>
            </View>
        )
    }

    return (
        <View style={{ height: '100%', backgroundColor: '#FFFFFF' }}>
            <View style={{ flexDirection: "row", marginTop: 10, height: "10%", alignSelf: "center", width: '95%', height: 50, borderRadius: 10, borderWidth: 1 }}>
                <Image style={{ alignSelf: "center", marginLeft: 10, width: 20, height: 20 }} source={require("../assets/images/Search.png")}></Image>
                <TextInput
                    style={{ color: COLORS.black, fontFamily: "Poppins-Medium", width: "80%" }}
                    ref={searchRef}
                    placeholder="Search by Name, Batch or Designation"
                    value={search}
                    onChangeText={txt => {
                        setsearchingishappening(true)
                        searchwithKeyword(txt)
                    }}
                    placeholderTextColor={COLORS.darkgrey}
                />

                {search == '' ? null : (
                    <TouchableOpacity
                        style={{ marginRight: 15 }}
                        onPress={() => {
                            searchRef.current.clear();
                            searchFilterFunction('');
                            setSearch('');
                            setempty(false);
                            setsearchingishappening(false)
                        }}>

                    </TouchableOpacity>
                )}
            </View>

            {isLoading == true ?
                <View style={{ width: "100%", height: "100%", backgroundColor: COLORS.white, justifyContent: "center" }}>
                    <Loader></Loader>
                </View> :
                <View>
                    {searchingishappening == true ?
                        <View>
                            {empty == true ?
                                <Text style={[Styles.textMedium, { marginTop: 50 }]}>Not Found</Text>
                                :
                                <View style={{ width: dimensions.width, alignSelf: "center", padding: 10, marginTop: 10, marginBottom: 100 }}>
                                    <FlatList numColumns={2} data={data} renderItem={renderItem} ></FlatList>
                                </View>}
                        </View> :
                        null}
                </View>}
        </View>
    );
}
export default SearchScreen