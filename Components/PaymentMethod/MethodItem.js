import { StyleSheet, Text, useWindowDimensions, View } from "react-native";
import React from "react";
import { Fonts } from "../../utils/Fonts";
import { colors } from "../../utils/Colors";
import { Spaces } from "../../utils/Spacing";
import { Size } from "../../utils/Size";

const MethodItem = ({ mainText, subText }) => {
  const {styles}=useStyle()

  return (
    <View style={styles.methodItemContainer}>
      <View>
        <Text style={styles.mainText}>{mainText}</Text>
        <Text style={styles.subText}>{subText}</Text>
      </View>
      <View style={styles.actionContainer}>
        <Text style={styles.actionText}>Edit</Text>
        <Text style={styles.actionText}>Delete</Text>
      </View>
    </View>
  );
};

export default MethodItem;
const useStyle = () => {
  const {fontScale} = useWindowDimensions();

const styles = StyleSheet.create({
  methodItemContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: Spaces.sm,
    borderBottomColor: colors.gray,
    borderBottomWidth: Size.xs / 10,
  },

  mainText: {
    fontSize: Fonts.xs/fontScale,
    color:colors.black
  },
  subText: {
    fontSize: Fonts.md/fontScale,
    color:colors.black

  },
  actionText: {
    fontSize: Fonts.xs/fontScale,
    color: colors.green,
    textAlignVertical: "top",
  },
  actionContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "20%",
  },
})
return {styles}
}
