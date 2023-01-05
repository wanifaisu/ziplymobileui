import { StyleSheet, View, Text, ScrollView,useWindowDimensions } from "react-native";
import React from "react";

import { colors } from "../utils/Colors";
import { Fonts } from "../utils/Fonts";
import { Spaces } from "../utils/Spacing";
import { Labels } from "../utils/Labels";
import MakePayment from "../Components/shared/MakePayment";
import SingleAccordion from "../Components/shared/SingleAccordion";
import RecentTransactions from "../Components/Billing/RecentTransactions";
import AccordionItem from "../Components/shared/AccordionItem";

const paymentTransactionDetails = [
  {
    id: 1,
    type: "Payment",
    date: "Oct 18",
    amount: "$60.00",
    cardNumber: "Amex***7890",
  },
  {
    id: 2,
    type: "Payment",
    date: "Sept 18",
    amount: "$60.00",
    cardNumber: "Amex***7890",
  },
  {
    id: 3,
    type: "Credit",
    date: "Oct 18",
    amount: "$60.00",
    cardNumber: "Amex***7890",
  },
  {
    id: 3,
    type: "Payment",
    date: "Aug 18",
    amount: "$60.00",
    cardNumber: "Amex***7890",
  },
];
const Billing = () => {
  const {styles}=useStyle()
  return (
    <ScrollView
      style={styles.billingContainer}
      showsVerticalScrollIndicator={false}
    >
      <View style={styles.innerContainer}>
        <MakePayment />
      </View>
      <View style={styles.billingbox}>
        <SingleAccordion
          iconName={Labels.NewsPaper_Icon}
          listName="Current Bill"
         
        />
        <SingleAccordion
          iconName={Labels.List_Icon}
          listName="Billing History"
         
        />
      </View>
      <View style={styles.innerContainer}>
        <Text style={styles.heading}>Recent Transactions</Text>

        <RecentTransactions paymentTransactionDetails={paymentTransactionDetails} />

        <AccordionItem>All transactions</AccordionItem>
      </View>
    </ScrollView>
  );
};

export default Billing;

const useStyle = () => {
  const {height,width,fontScale} = useWindowDimensions();

  const styles = StyleSheet.create({
    billingContainer: {
      backgroundColor: colors.white,
      flexDirection: "column",
      padding:Spaces.md,
      width:width,
      height:height
    },
    marginStyle: {
      marginHorizontal: Spaces.md,
    },
    heading: {
      fontSize: Fonts.md/fontScale,
      color: colors.grey,
      paddingTop: Spaces.lg,
      paddingBottom: Spaces.sm,
    },
    innerContainer: {
      marginBottom: Spaces.lg,
    },
    icon: {
      marginRight: Spaces.sm,
    },
    billingbox: {
      marginTop: Spaces.lg,
    },
  })
  return {styles}
}

