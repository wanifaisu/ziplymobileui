import { StyleSheet, Text, View,TextInput, useWindowDimensions } from "react-native";
import React, { useState } from "react";
import { RadioButton } from "react-native-paper";
import { colors } from "../../utils/Colors";
import {Spaces} from "../../utils/Spacing"
import {Fonts} from "../../utils/Fonts"
import {Size} from "../../utils/Size"
const PaymentAmount = () => {
  const {styles}=useStyle()
  const [checked, setChecked] = useState("first");
  return (
    <View style={styles.mainContainer}>
      <Text style={styles.heading}>Payment Amount</Text>
      <View style={[styles.payRow, styles.payBottomBorder]}>
        <RadioButton
          value="first"
          status={checked === "first" ? "checked" : "unchecked"}
          onPress={() => setChecked("first")}
          color={colors.green}
        />
        <View style={styles.pays}>
          <Text style={styles.due}>current balance due Oct 18,2022</Text>
          <Text style={styles.amount}>$60.00</Text>
        </View>
      </View>
      <View>
        <View style={styles.payBottomBorder}>
          <View style={styles.payRow}>
            <RadioButton
              value="second"
              status={checked === "second" ? "checked" : "unchecked"}
              onPress={() => setChecked("second")}
               color={colors.green}
            />
            <View style={styles.pays}>
              <Text style={styles.due}>Pay another amount</Text>
            </View>
          </View>
          <View>
            {checked === "second" && <TextInput style={styles.inputBox} keyboardType="numeric" />}
          </View>
        </View>
      </View>
    </View>
  );
};

export default PaymentAmount;
const useStyle = () => {
  const {fontScale} = useWindowDimensions();


const styles = StyleSheet.create({
  mainContainer: {
    paddingVertical: Spaces.xs,
  },
  due:{
color:colors.black
  },
  payRow: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical:Spaces.xs,
  },
  amount: {
    fontSize:Fonts.md/fontScale,
color:colors.black

  },
  heading: {
    fontSize:Fonts.md/fontScale,
    color:colors.grey,
    paddingVertical: Spaces.md,
  },
  pays: {
    paddingHorizontal:Spaces.xs,
  },
  inputBox: {
    borderWidth: Size.md/20,
    borderColor:colors.green,
    padding:Spaces.sm,
    borderRadius: Size.axl/10,
    backgroundColor: colors.lightgray,
    marginVertical: Spaces.sm,
  },
  payBottomBorder: {
    borderBottomWidth: Size.xs/10,
    borderBottomColor: colors.gray,
  },
})
return {styles}
}
