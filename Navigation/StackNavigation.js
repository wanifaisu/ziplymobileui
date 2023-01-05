import React from "react";
import { StyleSheet, useWindowDimensions } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AntDesign from "react-native-vector-icons/AntDesign";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import Feather from "react-native-vector-icons/Feather";
import Ionic from "react-native-vector-icons/Ionicons";
import { colors } from "../utils/Colors";
import { Fonts, Weights } from "../utils/Fonts";
import { Spaces } from "../utils/Spacing";
import { Labels } from "../utils/Labels";
import { Size } from "../utils/Size";
import Home from "../Screens/Home";
import Billing from "../Screens/Billing";
import Account from "../Screens/Account";
import Support from "../Screens/Support";
import PayScreen from "../Screens/PayScreen";
import ChatSupportScreen from "../Screens/ChatSupportScreen";
import AutoPayScreen from "../Screens/AutoPayScreen";
import PaymentMethodScreen from "../Screens/PaymentMethodScreen";
import NotificationBadgeIcon from "./NotificationBadgeIcon";
import LoginScreen from "../Screens/LoginScreen";
import NotificationsScreen from "../Screens/NotificationsScreen";
import FingerPrintScreen from "../Screens/FingerPrintScreen";
const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();
const TabNavigation = ({ navigation }) => {
  const handleNotifications = () => {
    navigation.navigate("NotificationsScreen");
  };
  const handleChatSupport = () => {
    navigation.navigate("ChatSupportScreen");
  };
  const goToAutopay=()=>{
    navigation.navigate("AutoPayScreen")
  }
  const { height, width, fontScale } = useWindowDimensions();

  return (
    <Tab.Navigator
      initialRouteName={Labels.Home}
      screenOptions={{
        tabBarHideOnKeyboard: true,
        tabBarInactiveTintColor: colors.black,
        tabBarActiveTintColor: colors.green,
        tabBarLabelStyle: {
          fontSize: Fonts.xs / fontScale,
        },
        tabBarStyle: {
          paddingTop: Spaces.sm,
          paddingBottom: Spaces.sm,
          height: height / 11,
        },
        headerTintColor: colors.black,
        headerTitleStyle: {
          fontWeight: Weights.bold,
          fontSize: Fonts.xlg / fontScale,
        },

        headerTitleAlign: "center",
        headerStyle: styles.headerStyle,
        ContentStyle: { backgroundColor: colors.white },
      }}
    >
      <Tab.Screen
        name={Labels.Home}
        component={Home}
        options={{
          title: Labels.Ziply,
          tabBarLabel: Labels.Home,
          tabBarIcon: ({ color }) => (
            <AntDesign
              name={Labels.Home_Icon}
              color={color}
              size={Fonts.xxl / fontScale}
            />
          ),
          headerRight: () => (
            <NotificationBadgeIcon onPressNotifications={handleNotifications} color={colors.black} />
          ),
        }}
      />

      <Tab.Screen
        name={Labels.Billing}
        component={Billing}
        options={{
          tabBarLabel: Labels.Billing,
          tabBarIcon: ({ color }) => (
            <MaterialIcons
              name={Labels.Billing_Icon}
              color={color}
              size={Fonts.xxl / fontScale}
            />
          ),
          headerRight: () => (
            <NotificationBadgeIcon onPressNotifications={handleNotifications} color={colors.black} />
          ),
        }}
      />
      <Tab.Screen
        name={Labels.Account}
        component={Account}
        options={{
          tabBarLabel: Labels.Account,
          tabBarIcon: ({ color }) => (
            <MaterialIcons
              name={Labels.Account_Icon}
              color={color}
              size={Fonts.xxl / fontScale}
            />
          ),
          headerStyle: {
            backgroundColor: colors.green,
            borderColor: colors.green,
          },
          headerTintColor: colors.white,
          headerTitleStyle: {
            fontWeight: Weights.bold,
            fontSize: Fonts.xlg / fontScale,
          },

          headerRight: () => (
            <NotificationBadgeIcon
              onPressNotifications={handleNotifications}
              color={colors.white}
            />
          ),
        }}
      />
      <Tab.Screen
        name={Labels.Support}
        component={Support}
        options={{
          tabBarLabel: Labels.Support,
          tabBarIcon: ({ color }) => (
            <AntDesign
              name={Labels.Support_Icon}
              color={color}
              size={Fonts.xxl / fontScale}
            />
          ),
          headerStyle: {
            backgroundColor: colors.green,
            borderColor: colors.green,
          },
          headerTintColor: colors.white,
          headerTitleStyle: {
            fontWeight: Weights.bold,
            fontSize: Fonts.xlg / fontScale,
          },

          headerRight: () => (
            <Ionic
              name={Labels.Chat_Icon}
              size={Fonts.xlg / fontScale}
              color={colors.white}
              style={styles.icon}
              onPress={handleChatSupport}
            />
          ),
        }}
      />
      <Tab.Screen
        name={Labels.More}
        component={AutoPayScreen}
        options={{
          title:"AutoPay",
          tabBarLabel: Labels.More,
          tabBarIcon: ({ color }) => (
            <Feather
              name={Labels.More_Icon}
              color={color}
              size={Fonts.xxl / fontScale}
              onPress={goToAutopay}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};
const StackNavigation = () => {
  const { height, fontScale } = useWindowDimensions();
  const navigation = useNavigation();
  const handleNotifications = () => {
    navigation.navigate("NotificationsScreen");
  };
  return (
    <Stack.Navigator
       initialRouteName="FingerPrintScreen"
      screenOptions={{
        headerTintColor: colors.black,
        headerTitleAlign: "center",
        headerTitleStyle: {
          fontWeight: Weights.bold,
          fontSize: Fonts.xlg / fontScale,
        },
        contentStyle: { backgroundColor: colors.white },
        headerRight: () => (
          <NotificationBadgeIcon onPressNotifications={handleNotifications} color={colors.black}/>
        ),
      }}
    >
      <Stack.Screen
        name="LoginScreen"
        component={LoginScreen}
        options={{
         headerShown:false
        }}
      />
      <Stack.Screen
        name="FingerPrintScreen"
        component={FingerPrintScreen}
        options={{
          headerShown:false
        }}
      />
      
      <Stack.Screen
        options={{
          headerShown: false,
        }}
        name="TabScreen"
        component={TabNavigation}
      />
      <Stack.Screen
        name="PayScreen"
        component={PayScreen}
        options={{
          title: "Make a Payment",
        }}
      />
      <Stack.Screen
        name="NotificationsScreen"
        component={NotificationsScreen}
        options={{
          title: "Notifications",
          headerRight: () => (
            <Ionic
              name={Labels.Settings_Icon}
              size={Fonts.xlg / fontScale}
              style={styles.icon}
              color={colors.black}
            />
          ),
        }}
      />
      <Stack.Screen
        name="AutoPayScreen"
        component={AutoPayScreen}
        options={{
          title: "AutoPay",
        }}
      />
 

      <Stack.Screen
        name="PaymentMethodScreen"
        component={PaymentMethodScreen}
        options={{
          title: "Payment Methods",
        }}
      />
     
      <Stack.Screen
        name="ChatSupportScreen"
        component={ChatSupportScreen}
        options={{
          title: "Chat Support",
        }}
      />  
    </Stack.Navigator>
  );
};

export default StackNavigation;

const styles = StyleSheet.create({
  icon: {
    paddingRight: Spaces.sm,
  },

  headerStyle: {
    borderBottomWidth: Size.xs / 15,
    borderBottomColor: colors.grey,
  },
});
