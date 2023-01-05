import { StyleSheet, View } from "react-native";
import React, { useState } from "react";
import AccordionItem from "../shared/AccordionItem";
import ListItem from "../shared/ListItem";
import SingleAccordion from "../shared/SingleAccordion";
import { Spaces } from "../../utils/Spacing";
import { useNavigation } from "@react-navigation/native";
import { Labels } from "../../utils/Labels";
import AccordionHeader from "./AccordionHeader";
import EditInput from "../shared/EditInput";

const OnBillPreferences = ({editBilling,setEditBilling,profileDetails,setProfileDetails }) => {
  const [onBill, setOnBill] = useState(false);

  const navigation = useNavigation();
  const addressHandler = () => {
    setEditBilling({ ...editBilling, isAddress: true });

  };
  const paperlessHandler = () => {
    setEditBilling({ ...editBilling, isPaperless:!editBilling.isPaperless });
  };
  const addAddressHandler=(event)=>{
    setProfileDetails({ ...profileDetails,billingAddress: event });
    setEditBilling({ ...editBilling, isAddress: false });
  }
  const paymentMethodHandler = () => {
    navigation.navigate("PaymentMethodScreen");
  };
  const AutoPayHandler = () => {
    setEditBilling({ ...editBilling, isAutoPay:!editBilling.isAutoPay});
    navigation.navigate("AutoPayScreen",{autoPay:editBilling.isAutoPay});
  };
  const openBillPreferences = () => {
    setOnBill(true);
  };
  const closeBillPreferences = () => {
    setOnBill(false);
  };
  return (
    <View style={styles.mainContainer}>
      {!onBill ? (
        <SingleAccordion
          iconName={Labels.NewsPaper_Icon}
          listName={"Bill Preferences"}
          onButtonPress={openBillPreferences}
        />
      ) : (
        <>
          <AccordionHeader onHeaderPress={closeBillPreferences}>
            Bill Preferences
          </AccordionHeader>
          <View style={styles.lists}>
            {!editBilling.isAddress ? 
            <ListItem
              mainText="Billing address"
              subText={profileDetails.billingAddress}
              controls="Edit"
              onPressControl={addressHandler}
            />: <EditInput editValue={profileDetails?.billingAddress} addChangeHandler={addAddressHandler}/>}
            <ListItem
              mainText="AutoPay"
              subText={!editBilling.isAutoPay? "On":"Off"}
              controls="Manage"
              onPressControl={AutoPayHandler}
            />
            <ListItem
              mainText="Paperless billing"
              subText={!editBilling.isPaperless? "Off":"On"}
              controls={!editBilling.isPaperless? "Turn On":"Turn Off"}
              onPressControl={paperlessHandler}
            />
            <AccordionItem onPress={paymentMethodHandler}>
              Manage Payment Methods
            </AccordionItem>
          </View>
        </>
      )}
    </View>
  );
};

export default OnBillPreferences;

const styles = StyleSheet.create({
  mainContainer: {
    paddingHorizontal: Spaces.md,
  },
  lists: {
    marginBottom: Spaces.xl,
  },
});
