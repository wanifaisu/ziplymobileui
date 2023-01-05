import React from "react";
import { View, Text, StyleSheet, ScrollView, useWindowDimensions } from "react-native";
import { colors } from "../../utils/Colors";
import { Fonts } from "../../utils/Fonts";
import { Size } from "../../utils/Size";
import { Spaces } from "../../utils/Spacing";

const Message = ({ incomingMsg, sentMsg, msg }) => {
  const {styles}=useStyle()
  return (
    <ScrollView style={styles.messageContainer} showsVerticalScrollIndicator={false}>
      {incomingMsg && (
        <View style={styles.incomingMsgBox}>
          <Text style={styles.incomingMsgText}>{msg}</Text>
        </View>
      )}
      {sentMsg && (
        <View style={styles.sentMsgBox}>
          <Text style={styles.sentMsgText}>{msg}</Text>
        </View>
      )}
    </ScrollView>
  );
};

export default Message;
const useStyle = () => {
  const {fontScale} = useWindowDimensions();


const styles = StyleSheet.create({
  messageContainer: {
    paddingHorizontal: Spaces.xs,
  },
  incomingMsgBox: {
    backgroundColor:colors.lightgray,
    alignSelf: "flex-start",
    margin:Spaces.xs,
    borderWidth: Spaces.xs/10,
    borderColor:colors.gray,
    borderBottomRightRadius:Size.sm,
    borderTopLeftRadius: Size.xs,
    borderTopRightRadius:Size.xs,
    padding:Spaces.xs

  },
 
  incomingMsgText: { 
    color: colors.black, 
    fontSize:Fonts.md/fontScale,
    padding:Spaces.md},

  sentMsgBox: {
    backgroundColor:colors.green,
    borderBottomLeftRadius:Size.sm,
    borderTopLeftRadius: Size.xs,
    borderTopRightRadius:Size.xs,
    alignSelf: "flex-end",
    margin:Spaces.xs,
    padding:Spaces.xs
  },

  sentMsgText: {
     color:colors.white,
     fontSize:Fonts.md/fontScale,
      padding:Spaces.md },

  sendTxt: { color: "white" },
})
return {styles}
}
