import { Pressable, StyleSheet, Text, useWindowDimensions } from "react-native";
import React from "react";
import { colors } from "../../utils/Colors";
import { Fonts } from "../../utils/Fonts";
import { Spaces } from "../../utils/Spacing";

const NotificationItem = ({notificationDetails,onPress,style}) => {
  const {styles}=useStyle()

  return (

notificationDetails.map((item,index)=>{
  return (
    <Pressable style={styles.itemContainer} onPress={()=>onPress(item.navigateTo)} key={index}>
    <Text style={[style, styles.itemText]}>{item.message}</Text>
    <Text style={styles.subText}>{item.date}</Text>
  </Pressable>
  )
})
   
  )
};

export default NotificationItem;
const useStyle = () => {
  const {fontScale} = useWindowDimensions();


const styles = StyleSheet.create({
  itemContainer: {
    paddingVertical: Spaces.sm,
    borderBottomColor: colors.gray,
    borderBottomWidth: Spaces.md/10,
    paddingHorizontal: Spaces.xs,

  },
  itemText: {
    fontSize: Fonts.md/fontScale,
    color:colors.black
  },
  subText: {
    fontSize: Fonts.xs/fontScale,
    color: colors.grey,

  },
})
return {styles}
}
