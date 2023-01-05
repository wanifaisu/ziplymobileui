import { Pressable, StyleSheet, Text, useWindowDimensions, View } from "react-native";
import React from "react";
import { Spaces } from "../../utils/Spacing";
import { Fonts } from "../../utils/Fonts";
import { colors } from "../../utils/Colors";
import { Size } from "../../utils/Size";
import DatePicker from 'react-native-date-picker'


const ListItem = ({ mainText, subText, controls,onPressControl,date,datePicker,onDateSelected,hideDatePicker}) => {
  const {styles}=useStyle()
  return (
    <>
    <Pressable style={styles.listItemContainer}>
      <View>
        <Text style={styles.maintext}>{ mainText}</Text>
        <Text style={styles.subText}>{subText}</Text>
      </View>
      <Pressable onPress={onPressControl}>
        <Text style={styles.controls}>{controls}</Text>
      </Pressable>
    </Pressable>
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
    </>
  );
};

export default ListItem;

const useStyle = () => {
  const {fontScale} = useWindowDimensions();

const styles = StyleSheet.create({
  listItemContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottomColor: colors.gray,
    borderBottomWidth: Size.xs / 10,
    paddingVertical: Spaces.xs,
  },
  maintext: {
    fontSize: Fonts.xs/fontScale,
    color:colors.black
  },
  subText: {
    fontSize: Fonts.md/fontScale,
    color:colors.black

  },
  controls: {
    fontSize: Fonts.xs/fontScale,
    color: colors.green,
    textAlignVertical: "top",
  },
})
return {styles}
}
