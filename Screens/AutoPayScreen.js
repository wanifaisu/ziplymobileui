import { StyleSheet, Text, View ,useWindowDimensions} from "react-native";
import React from "react";
import { Fonts, Weights } from "../utils/Fonts";
import { Spaces } from "../utils/Spacing";
import { colors } from "../utils/Colors";
import AutopaySettings from "../Components/AutoPay/AutopaySettings";

const AutoPayScreen = ({route}) => {
  
  const autoPay=route?.params?.autoPay
  const {styles}=useStyle()
  return (
    <View style={styles.autopayContainer}>
      <View>
        <Text style={styles.heading}>Autopay is On</Text>
        <Text style={styles.paragraph}>
          Set and forget.With automatic payments,your full account balance is
          automatically charged each month
        </Text>
      </View>
      <AutopaySettings autoPay={autoPay}/>
    </View>
  );
};

export default AutoPayScreen;
const useStyle = () => {
  const {height,width,fontScale} = useWindowDimensions();

  const styles = StyleSheet.create({
    autopayContainer: {
      backgroundColor:colors.white,
      paddingHorizontal: Spaces.md,
      paddingVertical: Spaces.lg,
      height:height,
      width:width
    },
    heading: {
      fontSize: Fonts.lg/fontScale,
      fontWeight: Weights.bold,
      paddingVertical: Spaces.md,
    color:colors.black

    },
    paragraph: {
      fontSize: Fonts.md/fontScale,
      color:colors.black
    },
  })
  return {styles}
}

