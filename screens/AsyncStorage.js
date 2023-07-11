import AsyncStorage from "@react-native-async-storage/async-storage"

const getUserId = async () => {
  var userid = await AsyncStorage.getItem("userDetails").then((userDetails) => {
    if (userDetails) {
      const UserDetails = JSON.parse(userDetails)
      const userId = UserDetails.userId
      return userId
    }
  })
  return userid
}

const getUserToken = async () => {
  var userToken = await AsyncStorage.getItem("userDetails").then((userDetails) => {
    if (userDetails) {
      const UserDetails = JSON.parse(userDetails)
      const userToken = UserDetails.userToken
      return userToken
    }
  })
  return userToken
}

const getLanguagecode = async () => {
  var code = await AsyncStorage.getItem("code").then((code) => {
    if (code) {
      return code
    }
  })

  return code
}
export const userId = getUserId()
export const userToken = getUserToken()
export const code = getLanguagecode()
