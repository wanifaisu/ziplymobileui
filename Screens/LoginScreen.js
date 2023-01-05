import { StyleSheet, Text, View,useWindowDimensions, Image,  } from 'react-native'
import React, { useState } from 'react'
import PasswordInput from '../Components/shared/PasswordInput'
import CustomButton from '../Components/UI/CustomButton'
import { Spaces } from '../utils/Spacing'
import CustomInput from '../Components/shared/CustomInput'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useToast } from "react-native-toast-notifications";

const LoginScreen = ({navigation}) => {
  const { styles } = useStyle();
  const toast = useToast();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const storeData = async (value) => {
    try {
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem("user", jsonValue);
    } catch (e) {
      console.log("error occured");
    }
  };
  function showToast(message,color) {
    toast.hideAll()
    toast.show(message, {
      type: color,
      placement: "bottom",
      duration: 1000,
      offset: 10,
      animationType: "slide-in",
    });
  }
  const handleLogin = () => {
    if (username !== "" && password !== "") {
      let loginData = { username: username, password: password };
      storeData(loginData);
      navigation.navigate("TabScreen");
      showToast("logged in successfully!", "success");
      setUsername("");
      setPassword("");
    } else {
      showToast("please enter credentials!", "danger");
    }
  };

  return (
    <View style={styles.loginContainer}>
        <>
          <Image
            source={require("../assets/Ziplymobilesplash.png")}
            style={styles.logo}
          />
          <CustomInput
            label="Username"
            value={username}
            onChange={(username) => setUsername(username)}
          />
          <PasswordInput
            label="Password"
            value={password}
            onChangePassword={(password) => setPassword(password)}
          />
          <View style={styles.buttons}>
            <CustomButton  onPress={handleLogin}>
              Login
            </CustomButton>
            {/* <View style={styles.bioButton}>
        <IconButton icon={Labels.FingerPrint_Icon} size={Fonts.xl/fontScale} color={colors.white}  onIconPress={showAndroidAlert} />
         <Text style={styles.scanText}>Scan</Text>
        </View> */}
          </View>
        </>
    </View>
  )
}

export default LoginScreen
const useStyle = () => {
  const { height, width, fontScale } = useWindowDimensions()
const styles = StyleSheet.create({ loginContainer: {
  flex: 1,
  justifyContent: "center",
  alignItems: "center",
  paddingHorizontal: Spaces.lg,
  height:height,
  
},
logo: {
  height: height / 5,
  width: width / 1.1,
},
buttons: {
  flexDirection:"row",
  justifyContent: "center",
  flexDirection: "row",
  alignItems: "center",

}
})
return { styles };
};
