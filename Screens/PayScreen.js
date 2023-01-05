import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  useWindowDimensions,
  Alert,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {colors} from '../utils/Colors';
import {Spaces} from '../utils/Spacing';
import {Fonts} from '../utils/Fonts';
import CustomButton from '../Components/UI/CustomButton';
import PaymentAmount from '../Components/Pay/PaymentAmount';
import PaymentDate from '../Components/Pay/PaymentDate';
import PaymentMethod from '../Components/Pay/PaymentMethod';
import RazorpayCheckout from 'react-native-razorpay';
import AsyncStorage from '@react-native-async-storage/async-storage';

// import { usePaymentSheet } from "@stripe/stripe-react-native";

// const API_URL = "http://192.168.1.8:8000";
const PayScreen = () => {
  const {styles} = useStyle();
  const [loginUser, setLoginUser] = useState({});
  // const { loading, initPaymentSheet, presentPaymentSheet } = usePaymentSheet();
  const getData = async () => {
    try {
      const value = await AsyncStorage.getItem('user');
      let user = JSON.parse(value);
      if (user !== null) {
        setLoginUser(user);
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getData();
  }, []);
  const paymentHandler = amt => {
    var options = {
      description: 'Credits towards consultation',
      image: 'https://i.imgur.com/3g7nmJC.png',
      currency: 'INR',
      key: 'rzp_test_7hgXSzm6FMTxGN', // Your api key
      amount: amt,
      name: loginUser?.username,
      prefill: {
        email: 'void@razorpay.com',
        contact: '7006747612',
        name: loginUser?.username,
      },
      theme: {color: '#F37254'},
    };
    RazorpayCheckout.open(options)
      .then(data => {
        // handle success
        alert(`Success: ${data.razorpay_payment_id}`);
      })
      .catch(error => {
        // handle failure
        alert(`Error: ${error.code} | ${error.description}`);
      });
  };
  //  try {
  //    const response = await fetch(`${API_URL}/pay`, {
  //      method: "POST",
  //      headers: {
  //        "Content-Type": "application/json",
  //      },
  //    });
  //    const data = await response.json();
  //    if (!response.ok) return Alert.alert(data.message);
  //    const clientSecret = data.clientSecret;
  //    const initSheet = await initPaymentSheet({
  //      paymentIntentClientSecret: clientSecret,
  //      merchantDisplayName: "jaseela",
  //      return_url: `http://${API_URL}/stripe`,
  //    });
  //    if (initSheet.error) return Alert.alert(initSheet.error.message);
  //    const presentSheet = await presentPaymentSheet({
  //      clientSecret,
  //    });
  //    if (presentSheet.error) return Alert.alert(presentSheet.error.message);
  //    Alert.alert("Payment completed");
  //  } catch (error) {
  //    console.log(error);
  //    Alert.alert("something went wrong");
  //  }

  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <PaymentAmount />
        <PaymentDate />
        <PaymentMethod />
        <Text style={styles.manageAmount}>Manage payment methods</Text>
        <Text>
          payment disclaimer goes here odio volumus per id at sea vidit labores.
          <Text style={styles.manageAmount}>Payment Terms & Conditions</Text>
        </Text>

        <View style={styles.buttonContainer}>
          <CustomButton onPress={() => paymentHandler('6000')}>
            {' '}
            Pay $60.00
          </CustomButton>
        </View>
      </ScrollView>
    </View>
  );
};

export default PayScreen;

const useStyle = () => {
  const {height, width} = useWindowDimensions();

  const styles = StyleSheet.create({
    container: {
      paddingHorizontal: Spaces.md,
      paddingVertical: Spaces.sm,
      width: width,
    },
    manageAmount: {
      color: colors.green,
      fontSize: Fonts.sm,
      marginBottom: Spaces.lg,
      marginTop: Spaces.xs,
    },
    buttonContainer: {
      flex: 1,
      justifyContent: 'center',
      flexDirection: 'row',
    },
  });
  return {styles};
};
