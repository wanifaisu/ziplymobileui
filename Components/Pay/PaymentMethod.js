import {StyleSheet, Text, useWindowDimensions, View} from 'react-native';
import React, {useState} from 'react';
import { RadioButton } from "react-native-paper";
import {colors} from '../../utils/Colors';
import {Spaces} from '../../utils/Spacing';
import {Fonts} from '../../utils/Fonts';
import {Size} from '../../utils/Size';
const PaymentMethod = () => {
  const [checked, setChecked] = useState('first');
  const {styles} = useStyle();
  return (
    <View style={styles.mainContainer}>
      <Text style={styles.heading}>Payment Method</Text>
      <View style={[styles.payRow, styles.payBottomBorder]}>
        <RadioButton
          value="first"
          status={checked === "first" ? "checked" : "unchecked"}
          onPress={() => setChecked("first")}
          color={colors.green}
        />
        <View style={styles.pays}>
          <Text style={styles.method}>Amex ****7890</Text>
        </View>
      </View>
      <View style={[styles.payRow, styles.payBottomBorder]}>
        <RadioButton
          value="first"
          status={checked === "second" ? "checked" : "unchecked"}
          onPress={() => setChecked("second")}
          color={colors.green}
        />
        <View style={styles.pays}>
          <Text style={styles.method}>Visa ***1234</Text>
        </View>
      </View>
      <View style={[styles.payRow, styles.payBottomBorder]}>
        <RadioButton
          value="first"
          status={checked === "third" ? "checked" : "unchecked"}
          onPress={() => setChecked("third")}
          color={colors.green}
        />
        <View style={styles.pays}>
          <Text style={styles.method}>New credit card / bank account</Text>
        </View>
      </View>
    </View>
  );
};

export default PaymentMethod;
const useStyle = () => {
  const {fontScale} = useWindowDimensions();

  const styles = StyleSheet.create({
    mainContainer: {
      paddingVertical: Spaces.xs,
    },
    heading: {
      fontSize: Fonts.md / fontScale,
      color:colors.grey,
      paddingVertical: Spaces.md,
    },
    payRow: {
      flexDirection: 'row',
      alignItems: 'center',
      paddingVertical: Spaces.xs,
    },

    pays: {
      paddingHorizontal: Spaces.xs,
    },
    payBottomBorder: {
      borderBottomWidth: Size.xs / 10,
      borderBottomColor: colors.gray,
    },
    method: {
      fontSize: Fonts.md / fontScale,
      color: colors.black,
    },
  });
  return {styles};
};
