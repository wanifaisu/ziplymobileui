import { StyleSheet, Text, useWindowDimensions, View } from "react-native";
import React from "react";
import { colors } from "../../utils/Colors";
import { Spaces } from "../../utils/Spacing";
import { Fonts } from "../../utils/Fonts";

const RecentTransactions = ({paymentTransactionDetails}) => {
  const {styles}=useStyle()

 return(
   paymentTransactionDetails.map((item,index)=>{
    return(
      <View style={styles.container} key={index}>
      <View style={styles.left}>
        <Text style={styles.Name}>{item.type}</Text>
        <Text style={styles.subName}>{item.date}</Text>
      </View>
      <View style={styles.right}>
        <Text style={styles.Name}>{item.amount}</Text>
        <Text style={styles.subName}>{item.cardNumber}</Text>
      </View>
    </View>
    
    )
   })
 )
  
};

export default RecentTransactions;
const useStyle = () => {
  const {fontScale} = useWindowDimensions();


const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    borderColor: colors.gray,
    borderBottomWidth: Spaces.xs / 5,
    justifyContent: "space-between",
    paddingVertical: Spaces.xs,
    alignItems: "center",
  },
  Name: {
    fontSize: Fonts.md/fontScale,
    color:colors.black

  },
  subName: {
    fontSize: Fonts.xs/fontScale,
    color:colors.black

  },
  left: {
    paddingVertical: Spaces.xs / 2,
  },
  right: {
    paddingVertical: Spaces.xs / 2,
  },
})
return {styles}
}
