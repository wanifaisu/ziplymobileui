import React, {useState} from 'react';
import {Modal, Text, Pressable, View} from 'react-native';

const SuccessPaymentModel = ({modalVisible, setModalVisible}) => {
  return (
    <View>
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}>
        <View>
          <Text style={{backgroundColor: 'green', color: 'white'}}>
            Success
          </Text>
          <Text>Your Payment is Received Successfully</Text>
        </View>
      </Modal>
    </View>
  );
};

export default SuccessPaymentModel;
