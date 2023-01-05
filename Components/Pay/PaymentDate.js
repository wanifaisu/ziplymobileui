import { StyleSheet, Text, useWindowDimensions, View } from "react-native";
import React, { useState } from "react";
import Ionic from "react-native-vector-icons/Ionicons"
import { colors } from "../../utils/Colors";
import { Spaces } from "../../utils/Spacing";
import { Fonts } from "../../utils/Fonts";
import { Size } from "../../utils/Size";
import DatePicker from 'react-native-date-picker'
const PaymentDate = () => {
  const { styles } = useStyle();
  const [date, setDate] = useState(new Date());
  const [datePicker, setDatePicker] = useState(false);
  const { fontScale } = useWindowDimensions();

  function showDatePicker() {
    setDatePicker(true);
  }
  const hideDatePicker = () => {
    setDatePicker(false);
  };
  function onDateSelected(date) {
    setDate(date);
    setDatePicker(false);
  }
  const getFormattedDate = (date) => {
    return `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`;
  };
  return (
    <View style={styles.mainContainer}>
      <Text style={styles.heading}>Payment Date</Text>
      <View style={styles.inputBox}>
        <Ionic
          name="calendar-outline"
          size={Fonts.lg / fontScale}
          color={colors.black}
           onPress={showDatePicker}
        />
        
        {datePicker && (
           
           <DatePicker
           modal
           open={datePicker}
           date={date}
           onConfirm={(date) => {
            onDateSelected(date)
           }}
           onCancel={hideDatePicker}
         />
        )}
        <Text style={styles.input}> {getFormattedDate(date)} </Text>
      </View>
    </View>
  );
};

export default PaymentDate;

const useStyle = () => {
  const { fontScale } = useWindowDimensions();

  const styles = StyleSheet.create({
    mainContainer: {
      paddingVertical: Spaces.xs,
    },
    heading: {
      fontSize: Fonts.md / fontScale,
      color:colors.grey,
      paddingVertical: Spaces.md,
    },
    inputBox: {
      flexDirection: "row",
      borderWidth: Size.md / 20,
      borderRadius: Size.axl / 10,
      borderColor: colors.gray,
      backgroundColor: colors.lightgray,
      padding: Spaces.sm,
      alignItems: "center",
    },
    input: {
      flex: 1,
      fontSize: Fonts.md / fontScale,
      marginLeft: Spaces.sm,
      color:colors.black
    },
    datePicker: {
      backgroundColor: colors.green,
    },
  });
  return { styles };
};
