import { Pressable, StyleSheet, Text, useWindowDimensions, View } from "react-native";
import React, { useState } from "react";
// import { Ionicons } from "@expo/vector-icons";
import Ionic from "react-native-vector-icons/Ionicons"
import { Fonts, Weights } from "../../utils/Fonts";
import { Spaces } from "../../utils/Spacing";
import ListItem from "../shared/ListItem";
import { colors } from "../../utils/Colors";
import { Size } from "../../utils/Size";
import { Labels } from "../../utils/Labels";
import AccordionHeader from "./AccordionHeader";
import SingleAccordion from "../shared/SingleAccordion";

const OnPlansAndServices = () => {
  const {styles}=useStyle()

  const [onPlans, setOnPlans] = useState(false);
  const openPlansHandler = () => {
    setOnPlans(true);
  };
  const closePlansHandler = () => {
    setOnPlans(false);
  };
  return (
    <View style={styles.mainContainer}>
      {!onPlans ? (
        <SingleAccordion
          iconName={Labels.Calender_Icon}
          listName={"Plans & Services"}
          onButtonPress={openPlansHandler}
        />
      ) : (
        <>
          <AccordionHeader onHeaderPress={closePlansHandler}>
            Plans And Services
          </AccordionHeader>
          <View style={styles.lists}>
            <Pressable style={styles.listItemContainer}>
              <View style={styles.leftContainer}>
                <Ionic name={Labels.Wifi_Icon} size={Size.lg} color={colors.black}/>
                <View>
                  <Text style={styles.maintext}>Ziply Fiber Gig Internet</Text>
                  <Text style={styles.maintext}>
                    <Text style={styles.dollarText}>$60</Text>/mo
                  </Text>
                </View>
              </View>
              <View>
                <Text style={styles.right}>Plan details</Text>
              </View>
            </Pressable>
            <ListItem
              mainText="ziply account number"
              subText="****7890"
              controls="show"
            />
          </View>
        </>
      )}
    </View>
  );
};

export default OnPlansAndServices;
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
  mainContainer: {
    paddingHorizontal: Spaces.md,
  },
  lists: {
    marginBottom: Spaces.xl,
  },
  maintext: {
    fontSize: Fonts.md/fontScale,
    fontWeight: Weights.bold,
    color:colors.black

  },
  dollarText: {
    fontSize: Fonts.xxl/fontScale,
    color:colors.black

  },

  right: {
    fontSize: Fonts.xs/fontScale,
    color: colors.green,
    textAlignVertical: "top",
  },
  leftContainer: {
    flexDirection: "row",
  },
})
return {styles}
}
