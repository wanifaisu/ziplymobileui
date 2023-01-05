import { StyleSheet, Text, View, TouchableOpacity, useWindowDimensions } from "react-native";
import React from "react";
import Foundation from "react-native-vector-icons/Foundation";
import { Fonts, Weights } from "../../utils/Fonts";
import { Spaces } from "../../utils/Spacing";
import { colors } from "../../utils/Colors";
import { Labels } from "../../utils/Labels";
import { Size } from "../../utils/Size";
import { useNavigation } from "@react-navigation/native";
import CustomButton from "../UI/CustomButton";
const MakePayment = () => {
  const { styles } = useStyle();
  const navigation = useNavigation();
  const {height,width,fontScale} = useWindowDimensions();

  
  const handlePayment = () => {
    navigation.navigate("PayScreen");
  };
  const manageAutopay = () => {
    navigation.navigate("AutoPayScreen");
  };
  return (
    <View style={styles.makePaymentContainer}>
      <Text style={styles.firstText}>My Payments</Text>
      <Text style={styles.secondText}>Ziply Fiber Gig Internet</Text>
      <View style={styles.amountContainer}>

      <Foundation
          name={Labels.Dollar_Icon}
          size={Size.lg/fontScale}
          color={colors.black}
         />
      <Text style={styles.thirdText}>60<Text style={styles.dollar}>.00</Text></Text>
      </View>
      <View style={styles.paddingStyle}>
        <Foundation
          name={Labels.Dollar_Icon}
          size={Fonts.lg/fontScale}
          style={styles.marginStyle}
          color={colors.black}
        />
        <Text style={styles.autoPay}>AutoPay Scheduled for Oct 18</Text>
      </View>
      <Text style={styles.fourthText} onPress={manageAutopay}>
        Manage Autopay
      </Text>
      <View style={styles.buttonContainer}>
        <CustomButton onPress={handlePayment}>Make a Payment</CustomButton>
      </View>
    </View>
  );
};

export default MakePayment;

const useStyle = () => {
  const {fontScale} = useWindowDimensions();

const styles = StyleSheet.create({
  makePaymentContainer: {
    flex: 1,
    justifyContent: "center",
  },
  amountContainer:{
    flexDirection:"row",
    alignItems:"center"
  },
  dollar: {
    fontSize: Fonts.md/fontScale,
  },

  paddingStyle: {
    paddingTop: Spaces.xs,
    flexDirection: "row",
  },
  marginStyle: {
    marginRight: Spaces.xs,
  },
  firstText: {
    fontSize: Fonts.md/fontScale,
    color: colors.grey,
    paddingTop: Spaces.lg,
  },
  secondText: {
    paddingTop: Spaces.sm,
    fontWeight: Weights.bold,
    fontSize: Fonts.md/fontScale,
    color:colors.black
  },
  thirdText: {
    fontSize: Fonts.xxl/fontScale,
    fontWeight: Weights.bold,
    color:colors.black
  },
  fourthText: {
    color: colors.green,
    fontSize: Fonts.sm/fontScale,
  },
  buttonContainer:{
    flex:1,
    justifyContent:"center",
    flexDirection:"row"
  },
  autoPay:{
    color:colors.black
  }
})

return { styles }
}
