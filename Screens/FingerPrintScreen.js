import {StyleSheet, Text, View, Alert} from 'react-native';
import React, {useEffect} from 'react';
import TouchID from 'react-native-touch-id';
const FingerPrintScreen = ({navigation}) => {
  const optionalConfigObject = {
    title: 'Biometric Required', // Android
    imageColor: '#e00606', // Android
    imageErrorColor: '#ff0000', // Android
    sensorDescription: 'Touch sensor', // Android
    sensorErrorDescription: 'Failed', // Android
    cancelText: '', // Android
    fallbackLabel: 'Show Passcode', // iOS (if empty, then label is hidden)
    unifiedErrors: false, // use unified error messages (default false)
    passcodeFallback: false, // iOS - allows the device to fall back to using the passcode, if faceid/touch is not available. this does not mean that if touchid/faceid fails the first few times it will revert to passcode, rather that if the former are not enrolled, then it will use the passcode.
  };

  const isDeviceSupported = () => {
    TouchID.isSupported(optionalConfigObject)
      .then(biometryType => {
        if (biometryType) {
          fingerPrintHandler();
        }
      })
      .catch(error => {
        navigation.navigate('LoginScreen');
      });
  };
  const fingerPrintHandler = () => {
    TouchID.authenticate(
      '',
      optionalConfigObject,
    )
      .then(success => {
        navigation.navigate('LoginScreen');
      })
      .catch(error => {
        Alert.alert('Authentication Failed');
      });
  };
  useEffect(() => {
    isDeviceSupported();
  }, []);
  return <View></View>;
};

export default FingerPrintScreen;

const styles = StyleSheet.create({});
