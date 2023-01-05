import {Alert, StyleSheet, Text, useWindowDimensions, View} from 'react-native';
import React, {useEffect} from 'react';
import {Spaces} from '../utils/Spacing';
import {Fonts, Weights} from '../utils/Fonts';
import Methods from '../Components/PaymentMethod/Methods';
import {colors} from '../utils/Colors';
import RazorpayCheckout from 'react-native-razorpay';
import AsyncStorage from '@react-native-async-storage/async-storage';
import SuccessPaymentModel from '../Components/UI/SuccessPaymentModel';
// import { usePaymentSheet } from "@stripe/stripe-react-native";

// const API_URL = "http://192.168.1.8:8000";

const PaymentMethodScreen = () => {
  const {styles} = useStyle();
  const [loginUser, setLoginUser] = useState({});
  const [modalVisible, setModalVisible] = useState(false);
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
  const addPaymentHandler = () => {
    var options = {
      description: 'Credits towards consultation',
      image: 'https://i.imgur.com/3g7nmJC.png',
      currency: 'INR',
      key: 'rzp_test_7hgXSzm6FMTxGN', // Your api key
      amount: '5000',
      name: loginUser?.username,
      prefill: {
        email: 'void@razorpay.com',
        contact: '7006747612',
        name: 'Razorpay Software',
      },
      theme: {color: '#F37254'},
    };
    RazorpayCheckout.open(options)
      .then(data => {
        setModalVisible(true);
        // handle success
        // alert(`Success: ${data.razorpay_payment_id}`);
      })
      .catch(error => {
        // handle failure
        alert(`Error: ${error.code} | ${error.description}`);
      });
  };
  // try {
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
  //  };

  return (
    <View style={styles.payMethodContainer}>
      <Text style={styles.heading}>Your saved cards and bank accounts</Text>
      <Text style={styles.paragraph}>
        Lorem ipsum dolor sit amet, tantas perequeris ateum, cu ignota
        delentiqui.Nostro ponderum.
      </Text>
      <Methods addPaymentHandler={addPaymentHandler} />
      <SuccessPaymentModel
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
      />
    </View>
  );
};

export default PaymentMethodScreen;

const useStyle = () => {
  const {height, width, fontScale} = useWindowDimensions();

  const styles = StyleSheet.create({
    payMethodContainer: {
      paddingHorizontal: Spaces.md,
      paddingVertical: Spaces.lg,
      height: height,
      width: width,
    },
    heading: {
      fontSize: Fonts.lg / fontScale,
      fontWeight: Weights.bold,
      paddingVertical: Spaces.md,
      color: colors.black,
    },
    paragraph: {
      fontSize: Fonts.md / fontScale,
      color: colors.black,
    },
  });
  return {styles};
};
