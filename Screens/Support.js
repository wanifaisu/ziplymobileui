import { StyleSheet, View, ScrollView,useWindowDimensions } from "react-native";
import React from "react";
import { colors } from "../utils/Colors";
import { Spaces } from "../utils/Spacing";
import SpecialOffers from "../Components/shared/SpecialOffers";
import VideoPlay from "../Components/Support/VideoPlay";
const Support = () => {
const {styles}=useStyle()

  return (
    <ScrollView showsVerticalScrollIndicator={false} style={styles.videoContainer}>
      
      <VideoPlay /*  videoUrl= 'https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4' *//>
      <View style={styles.supportContainer} showsVerticalScrollIndicator={false}>
        <SpecialOffers heading="Network Health" subHeading="Troubleshoot" />
        <SpecialOffers heading="Speed test" subHeading="Run a speed test" />
        <SpecialOffers heading="Get help" subHeading="Chat with support" />
      </View>
      
    </ScrollView>
  );
};

export default Support;


const useStyle = () => {
  const {height,width} = useWindowDimensions();
  const styles = StyleSheet.create({
    supportContainer: {
      backgroundColor: colors.white,
      flexDirection: "column",
      paddingHorizontal: Spaces.md,
      paddingVertical: Spaces.xxl,
      width:width,
    },
  })
  return {styles}
}
