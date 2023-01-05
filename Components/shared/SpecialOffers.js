import { StyleSheet, Text, useWindowDimensions, View } from "react-native";
import React from "react";
import { Spaces } from "../../utils/Spacing";
import { Fonts, Weights } from "../../utils/Fonts";
import { colors } from "../../utils/Colors";
import {Size} from "../../utils/Size"
const SpecialOffers = ({ heading, subHeading }) => {
  const {styles}=useStyle()
  return (
    <>
      <View style={styles.container}>
        <View style={styles.contentBox}>
          <Text style={styles.heading}>{heading}</Text>
          <Text style={styles.content}>
            Lorem epsum dolor sit amet,eu omnium mentium duo,elitr nostruo duo
            ei.
          </Text>
          <Text style={styles.remaining}>{subHeading}</Text>
        </View>
        <View style={styles.imageBox}></View>
      </View>
    </>
  );
};

export default SpecialOffers;

const useStyle = () => {
  const {height,width,fontScale} = useWindowDimensions();

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: Spaces.sm,
  },

  heading: {
    paddingTop: Spaces.xs,
    fontWeight: Weights.bold,
    fontSize: Fonts.md/fontScale,
    color:colors.black

  },
  content: {
    paddingTop: Spaces.xs,
    fontWeight: Weights.sm,
    color:colors.black

  },
  remaining: {
    paddingTop: Spaces.xs,
    color: colors.green,
    paddingBottom: Spaces.sm,
  },

  imageBox: {
    height: height/5,
    width: width/2.5,
    backgroundColor: colors.lightgray,
    borderRadius: Spaces.md,
    marginRight: Spaces.sm,
  },
  contentBox: {
    width: "55%",
  },
})

return { styles }
}
