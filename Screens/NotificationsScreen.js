import { StyleSheet, View ,useWindowDimensions, ScrollView} from "react-native";
import React from "react";
import { Weights } from "../utils/Fonts";
import { Spaces } from "../utils/Spacing";
import NotificationItem from "../Components/Notifications/NotificationItem";
const NotificationsScreen = ({ navigation }) => {
  const notificationDetails=[
    {
      message:"Your Payment is due on Oct 18,2022",
      date:"yesterday",
      navigateTo:"Billing"
    },
    {
      message:"There is an outage in your neighborhood",
      date:"2 days ago",
      navigateTo:""
    },
    {
      message:"We recieved your payment",
      date:"sep 18",
      navigateTo:""
    },
    {
      message:"Your service will be installed tomorrow between 1:00 and 2:00 pm",
      date:"Aug 26",
      navigateTo:"Home"
    },
   
  ]
  const naviagteScreens=(screen)=>{
    if(screen==="Home"){

      navigation.navigate("Home", {
        show: true,
      });
    }else if(screen==="Billing"){
      navigation.navigate("Billing");

    }
  }
  const {styles}=useStyle()
  

  return (
    <ScrollView showsVerticalScrollIndicator={false}>

    <View style={styles.NotificationContainer}>
      <NotificationItem
      notificationDetails={notificationDetails}
        onPress={naviagteScreens}
      />
      
      
    </View>
    </ScrollView>
  );
};

export default NotificationsScreen;


const useStyle = () => {
  const {height,width} = useWindowDimensions();

  const styles = StyleSheet.create({
    NotificationContainer: {
      paddingHorizontal: Spaces.md,
      paddingVertical: Spaces.lg,
      width:width,
      height:height,
    },
    text: {
      fontWeight: Weights.bold,
    },
  })
  return {styles}
}


