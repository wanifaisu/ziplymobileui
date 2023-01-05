import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  useWindowDimensions,
  PermissionsAndroid,
  Alert,
  Platform,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import MakePayment from '../Components/shared/MakePayment';
import NetworkStatus from '../Components/Home/NetworkStatus';
import PushNotificationIOS from '@react-native-community/push-notification-ios';
import PushNotification from 'react-native-push-notification';
import messaging from '@react-native-firebase/messaging';
import {colors} from '../utils/Colors';
import {Fonts, Weights} from '../utils/Fonts';
import {Spaces} from '../utils/Spacing';
import SpecialOffers from '../Components/shared/SpecialOffers';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Geolocation from '@react-native-community/geolocation';
import axios from 'axios';
const Home = ({route}) => {
  const showOrder = route?.params?.show;
  const {styles} = useStyle();
  const [loginUser, setLoginUser] = useState({});
  const [userLocation, setUserLocation] = useState({});
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
  const requestLocationPermission = async () => {
    Geolocation.getCurrentPosition(
      position => {
        setUserLocation(position.coords);

        let address = getAddressFromCoordinates(
          position.coords.latitude,
          position.coords.longitude,
        );
        console.log(address, 'address');
      },
      error => console.log('error'),
      {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000},
    );
  };
  const requestUserPermission = async () => {
    const authStatus = await messaging().requestPermission();
    return (
      authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
      authStatus === messaging.AuthorizationStatus.PROVISIONAL
    );
  };
  useEffect(() => {
    if (requestUserPermission()) {
      messaging()
        .getToken()
        .then(fcmToken => {
          console.log(fcmToken, 'fc token');
        });
    } else console.log(authStatus);
    messaging()
      .getInitialNotification()
      .then(async remoteMessage => {
        if (remoteMessage) {
          console.log(
            'getInitialNotification :' +
              'Notification cause app to open from quit state',
          );
          console.log(remoteMessage);
          alert(
            'getInitialNotification :' +
              'Notification cause app to open from quit state',
          );
        }
      });
    messaging().onNotificationOpenedApp(async remoteMessage => {
      if (remoteMessage) {
        console.log(
          'getInitialNotification :' +
            'Notification cause app to open on background',
        );
        alert(
          'getInitialNotification :' +
            'Notification cause app to open on background',
        );
      }
    });
    messaging().setBackgroundMessageHandler(async remoteMessage => {
      console.log('Message handled in the background', remoteMessage);
    });
    const unsubscribe = messaging().onMessage(async remoteMessage => {
      alert('Anew FCM message arrived');
      console.log('Anew FCM message arrived', JSON.stringify(remoteMessage));
    });
    getUserPermession();
    getData();
    // fetchToken();
  }, []);

  const HERE_API_KEY = 'a11e25dd5c6c4907319f432c5e690ed7';

  function getAddressFromCoordinates(latitude, longitude) {
    axios
      .get(
        `http://api.positionstack.com/v1/reverse?access_key=432fec8381c3a38d53e8941931889345&query=${latitude},${longitude}`,
      )

      .then(function (response) {
        console.log(response?.data?.data[0]?.locality, 'locality');
        console.log(response?.data?.data[0]?.region_code, 'region_code');
        console.log(response?.data?.data[0]?.name, 'name');
        console.log(response?.data?.data[1].postal_code, 'vavbab');
        alert(
          'locality is ' +
            response?.data?.data[0]?.locality +
            ' region code is ' +
            response?.data?.data[0]?.region_code +
            ' address ' +
            response?.data?.data[0]?.name +
            ' and the pincode is  ' +
            response?.data?.data[1].postal_code,
        );
      })
      .catch(function (error) {
        console.log(error);
      })
      .then(function () {
        // always executed
      });
  }
  const getUserPermession = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        {
          title: 'Device current location permission',
          message: 'Allow app to get your current location',
          buttonNeutral: 'Ask Me Later',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        },
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        requestLocationPermission();
      } else {
        Alert('Location permission denied');
      }
    } catch (err) {
      console.warn(err);
    }
  };
  const getAddress = async (langitude, latitude) => {};
  const fetchToken = async () => {
    const token = await getFcmToken();
    if (token) {
      setGeneratedToken(token);
    }
  };
  const getFcmToken = async () => {
    // try {
    //   const newFcmToken = await messaging().getToken();
    //   console.log(newFcmToken);
    //   return newFcmToken;
    // } catch (error) {
    //   console.error(error);
    //   return null;
    // }
  };
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.homeContainer}>
        <View style={styles.nameContainer}>
          <Text style={[styles.mainText, styles.textPadding]}>
            Hi {loginUser?.username}
          </Text>
          <Text style={[styles.subText, styles.textPadding]}>
            Friday, October 14
          </Text>
        </View>
        {showOrder && (
          <View style={styles.innerContainer}>
            <Text style={styles.headingText}>Order Status</Text>
            <View style={styles.imageBox}></View>
          </View>
        )}
        <View style={styles.networkContainer}>
          <NetworkStatus />
        </View>
        <View style={styles.innerContainer}>
          <MakePayment />
        </View>
        <View style={styles.innerContainer}>
          <Text style={styles.headingText}>Special Offers</Text>
          <SpecialOffers
            heading="Add Ziply Fiber Voice for just $20/mo"
            subHeading="Learn More"
          />
        </View>
      </View>
    </ScrollView>
  );
};

const useStyle = () => {
  const {height, width, fontScale} = useWindowDimensions();

  const styles = StyleSheet.create({
    homeContainer: {
      backgroundColor: colors.white,
      padding: Spaces.md,
      flex: 1,
      justifyContent: 'center',
      width: width,
    },
    headingText: {
      fontSize: Fonts.md / fontScale,
      color: colors.grey,
      paddingTop: Spaces.md,
    },
    innerContainer: {
      paddingTop: Spaces.md,
      paddingBottom: 3 * Spaces.sm,
      borderTopColor: colors.grey,
      borderTopWidth: Spaces.xs / 10,
    },
    nameContainer: {
      paddingTop: Spaces.md,
      paddingBottom: 3 * Spaces.sm,
    },
    textPadding: {
      fontWeight: Weights.bold,
      paddingBottom: Spaces.xs,
    },
    mainText: {
      fontSize: Fonts.xxl / fontScale,
      color: colors.black,
    },
    subText: {
      fontSize: Fonts.md / fontScale,
      color: colors.black,
    },

    networkContainer: {
      paddingTop: Spaces.lg,
      paddingBottom: Spaces.lg,
      borderTopColor: colors.gray,
      borderTopWidth: Spaces.xs / 10,
      flexDirection: 'row',
      justifyContent: 'space-between',
      width: width / 1.1,
    },
    imageBox: {
      height: height / 5,
      width: width / 1.1,
      backgroundColor: colors.lightgray,
      borderRadius: Spaces.md,
      marginRight: Spaces.sm,
      marginTop: Spaces.xs,
    },
  });

  return {styles};
};
export default Home;
