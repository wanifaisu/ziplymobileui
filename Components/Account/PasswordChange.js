import { ScrollView, StyleSheet, Text, useWindowDimensions, View } from "react-native";
import React, { useState } from "react";
import { Spaces } from "../../utils/Spacing";
import { Fonts, Weights } from "../../utils/Fonts";

import { colors } from "../../utils/Colors";
import { useToast } from "react-native-toast-notifications";
import PasswordInput from "../shared/PasswordInput";
import CustomButton from "../UI/CustomButton";

const PasswordChange = ({ savePasswordHandler, password, confirmPassword }) => {
  const {styles}=useStyle()
  const toast = useToast();

  const [passwordData, setPasswordData] = useState({
    password: password,
    confirmPassword: confirmPassword,
  });
  const [samePassword, setSamePassword] = useState(false);
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
  const savePassword = () => {
    let validPas = validPassword();
    if (validPas) {
      savePasswordHandler(passwordData);
    } else {
      setSamePassword(true);
       showToast("passwords are not matching!","danger")

    }
  };
  const validPassword = () => {
    if (passwordData.password === passwordData.confirmPassword) {
      showToast("password changed","success")
      return true
    } else if (passwordData.password.length < 8 ) {
      return false;
    } else {
      return false;
    }
  };
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.passwordContainer}>
        <Text style={styles.heading}>Password Requirements</Text>
        <Text style={styles.paragraph}>
          Create your password using at minimum 8 characters.It must have at
          least 1 upper and 1 lowercase letter and 1 number.
        </Text>
        <View>
          <PasswordInput
            label="Password"
            value={passwordData.password}
            onChangePassword={(event) =>
              setPasswordData({ ...passwordData, password: event })
            }
          />
          <PasswordInput
            label="Re-enter password"
            value={passwordData.confirmPassword}
            onChangePassword={(event) =>
              setPasswordData({ ...passwordData, confirmPassword: event })
            }
          />
          {samePassword && (
            <Text style={styles.invalid}>Password not Same!!</Text>
          )}
        </View>
        <View style={styles.buttonContainer}>
          <CustomButton onPress={savePassword}>Save</CustomButton>
        </View>
      </View>
    </ScrollView>
  );
};

export default PasswordChange;
const useStyle = () => {
  const {fontScale} = useWindowDimensions();


const styles = StyleSheet.create({
  passwordContainer: {
    paddingVertical: Spaces.xs / 5,
  },
  heading: {
    fontSize: Fonts.lg/fontScale,
    fontWeight: Weights.bold,
    paddingVertical: Spaces.xs,
    color:colors.black
  },
  paragraph: {
    fontSize: Fonts.md/fontScale,
    color:colors.black
  },
  buttonContainer: {
    alignItems: "center",
  },
  invalid: {
    color: colors.red,
    fontSize: Fonts.sm/fontScale,
    paddingVertical: Spaces.xs,
  },
})
return {styles}
}
