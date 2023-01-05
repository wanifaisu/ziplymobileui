import { StyleSheet, View} from "react-native";
import React, { useEffect, useState } from "react";
import ListItem from "../shared/ListItem";
import SingleAccordion from "../shared/SingleAccordion";
import { Labels } from "../../utils/Labels";
import { Spaces } from "../../utils/Spacing";
import AccordionHeader from "./AccordionHeader";
import EditInput from "../shared/EditInput";

const OnProfile = ({editProfile,setEditProfile,profileDetails,setProfileDetails ,openPasswordHandler}) => {

  const [onProfile, setOnProfile] = useState(false);

  const openAccordionHandler = () => {
    setOnProfile(true);
  };
  const closeAccordionHandler = () => {
    setOnProfile(false);
  };

  const emailhandler = () => {
    setEditProfile({ ...editProfile, isEmail: true });

  };
  const phoneNumberHandler = () => {
    setEditProfile({ ...editProfile, isPhone: true });
  };
  const addEmailHandler = (event) => {
    setProfileDetails({ ...profileDetails, email: event });
    setEditProfile({ ...editProfile, isEmail: false });
  };
  const addPhoneHandler = (event) => {
    setProfileDetails({ ...profileDetails, phoneNumber: event });
    setEditProfile({ ...editProfile, isPhone: false });
  };

  const hidePassword=()=>{
    let passwordLength= profileDetails.password.length
    let passwordString=""
    for(var i=1;i<=passwordLength;i++){
      passwordString+="●"
    }
    return passwordString
  }
  const hideIcons=hidePassword()
  return (
    <View style={styles.mainContainer}>
      {!onProfile ? (
        <SingleAccordion
          iconName={Labels.Profile_Icon}
          listName={"Profile"}
          onButtonPress={openAccordionHandler}
        />
      ) : (
        <>
          <AccordionHeader onHeaderPress={closeAccordionHandler}>
            Profile
          </AccordionHeader>

          <View style={styles.lists}>

            {!editProfile.isEmail ?
            <ListItem
              mainText="Email Address"
              subText={profileDetails.email}
              controls="Edit"
              onPressControl={emailhandler}
            />: <EditInput editValue={profileDetails?.email} addChangeHandler={addEmailHandler}/>}
            
            {!editProfile.isPhone ?
            <ListItem
              mainText="Phone Number"
              controls="Edit"
              subText={profileDetails.phoneNumber}
              onPressControl={phoneNumberHandler}
            />: <EditInput editValue={profileDetails?.phoneNumber} addChangeHandler={addPhoneHandler}/>}
            <ListItem
              mainText="Password"
              subText={hideIcons}
              controls="change password"
              onPressControl={openPasswordHandler}
            />
          </View>
        </>
      )}
    </View>
  );
};

export default OnProfile;

const styles = StyleSheet.create({
  mainContainer: {
    paddingHorizontal: Spaces.md,
  },
  lists: {
    marginBottom: Spaces.xl,
  },
});
