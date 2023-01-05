import { StyleSheet, Text, View,Pressable, useWindowDimensions } from "react-native";
import React from "react";
// import { Ionicons } from "@expo/vector-icons";
import AntDesign from "react-native-vector-icons/AntDesign";
import Ionic from "react-native-vector-icons/Ionicons";

import { colors } from "../../utils/Colors";
import { Spaces } from "../../utils/Spacing";
import { Fonts } from "../../utils/Fonts";
import { Labels } from "../../utils/Labels";
import { Size } from "../../utils/Size";

const SingleAccordion = ({
  iconName,
  listName,
  onButtonPress,
  marginStyle=0,
}) => {
  const {styles}=useStyle()
  const {fontScale} = useWindowDimensions();

  return (
    <Pressable style={[styles.secondBox, marginStyle]}   onPress={onButtonPress}>
      <View style={styles.container}>
        <Ionic name={iconName} size={Fonts.xxl/fontScale} color={colors.black} />

        <Text style={styles.text}>{listName}</Text>
      </View>
      <AntDesign
        name={Labels.Right_Icon}
        size={Fonts.xl/fontScale}
        color={colors.grey}
        style={styles.icon}
      
      />
    </Pressable>
  );
};

export default SingleAccordion;
const useStyle = () => {
  const {height,width,fontScale} = useWindowDimensions();

const styles = StyleSheet.create({
  secondBox: {
    paddingVertical: Spaces.sm,
    borderColor: colors.gray,
    borderBottomWidth: Spaces.xs / 5,
    paddingLeft: Spaces.xs,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
   
  },
  icon: {
    marginRight: Spaces.sm,
  },
  text: {
    fontSize: Fonts.md/fontScale,
    paddingLeft: Spaces.md,
    color:colors.black
  },
  container: {
    alignItems: "center",
    flexDirection: "row",
  },
})
return {styles}
}
