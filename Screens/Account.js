import {
  ScrollView,
  StyleSheet,
  View,
  Image,
  Text,
  Pressable,
  useWindowDimensions,
  PermissionsAndroid,
  Alert,
} from 'react-native';

import React, {useEffect, useState} from 'react';
import {colors} from '../utils/Colors';
import {Spaces} from '../utils/Spacing';
import {profileData} from "../Components/Account/profileData"
import {Size} from '../utils/Size';
import CustomButton from '../Components/UI/CustomButton';
import ProfileSection from '../Components/Account/ProfileSection';
import OnProfile from '../Components/Account/OnProfile';
import OnBillPreferences from '../Components/Account/OnBillPreferences';
import OnPlansAndServices from "../Components/Account/OnPlansAndServices"
import OnSettings from '../Components/Account/OnSettings';
import AsyncStorage from '@react-native-async-storage/async-storage';
import PopModal from '../Components/shared/PopModal';
import PasswordChange from '../Components/Account/PasswordChange';
// import ImagePicker from 'react-native-image-picker';
// import {launchImageLibrary} from 'react-native-image-picker'
import ImagePicker from 'react-native-image-crop-picker';

const Account = ({navigation}) => {
  const {styles} = useStyle();
  const [changePhoto, setChangePhoto] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [image, setImage] = useState(null);
  const [editProfile, setEditProfile] = useState({
    isEmail: false,
    isPhone: false,
    isPassword: false,
  });

  const [editBilling, setEditBilling] = useState({
    isAddress: false,
    isAutoPay: false,
    isPaperless: false,
  });
  
  const [profileDetails, setProfileDetails] = useState(profileData);
  const requestPermissions=async()=>{
    try {
      const granted= await PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.CAMERA,{
        title:"Ziply Mobile App request permission",
        message:"Ziply Mobile App needs Access to your gallery"+ "So you can upload Awesome Images",
        buttonNeutral:"Ask Me Later",
        buttonNegative:"Cancel",
        buttonPositive:"OK"
      })
      // pickImage()
      if(granted===PermissionsAndroid.RESULTS.GRANTED){
        editProfileImage()

      }else{
        Alert.alert("User denied permission")
      }
    } catch (error) {
      console.log(error)
    }
  }
  // const pickImage= () => {
  //   let options = {
  //     title: 'Select Image',
  //     customButtons: [
  //       { name: 'customOptionKey', title: 'Choose Photo from Custom Option' },
  //     ],
  //     storageOptions: {
  //       skipBackup: true,
  //       path: 'images',
  //     },
  //   };
  //   launchImageLibrary(options, (response) => {
  //     console.log('Response = ', response);

  //     if (response.didCancel) {
  //       console.log('User cancelled image picker');
  //     } else if (response.error) {
  //       console.log('ImagePicker Error: ', response.error);
  //     } else if (response.customButton) {
  //       console.log('User tapped custom button: ', response.customButton);
  //       alert(response.customButton);
  //     } else {
  //      let img=response.assets[0]
  //       setImage({
  //         filePath: img,
  //         fileData: img.fileName,
  //         fileUri: img.uri
  //       });
  //     }
  //   });
  // }
  
  const getUserData = async () => {
    try {
      const value = await AsyncStorage.getItem("user");
      let user = JSON.parse(value);
      if (user !== null) {

        setProfileDetails({...profileDetails,userName:user.username,password:user.password,confirmPassword:user.password})
      }
    } catch (error) {
      console.log("error occured");
    }
  };

    useEffect(()=>{
  getUserData()
    },[])
  const signOutHandler = () => {
    navigation.navigate('LoginScreen');
  };

  const changePhotoHandler = () => {
    setChangePhoto(!changePhoto);
  };
  const openPasswordHandler = () => {
    setModalVisible(true);
  };
  const closePasswordHandler = () => {
    setModalVisible(false);
  };
  const savePasswordHandler = passwordData => {
    setProfileDetails({
      ...profileDetails,
      password: passwordData?.password,
      confirmPassword: passwordData?.confirmPassword,
    });
    closePasswordHandler();
  };
  const editProfileImage=()=>{
    ImagePicker.openPicker({
      width: 300,
      height: 400,
      cropping: true
    }).then(image => {
      console.log(image);
    });
  }
  const takePhoto=()=>{
    ImagePicker.openCamera({
      width: 300,
      height: 400,
      cropping: true,
    }).then(image => {
      console.log(image);
    });
  }
  return (
    <>
      <ScrollView
        styles={styles.accountContainer}
        showsVerticalScrollIndicator={false}>
        <View style={styles.photoContainer}></View>
        <Pressable
          style={styles.profileSections} onPress={changePhotoHandler}
        >
          <Image
            source={image?  { uri: image.fileUri }:require("../assets/profile.jpg")}
            style={styles.profilePhoto}
          />
        </Pressable>
        <View style={styles.profileDetails}>
          {changePhoto && (
            <Pressable onPress={requestPermissions} >
              <Text style={styles.photoChange}>change Photo</Text>
            </Pressable>
          )}
          <ProfileSection />
          <OnProfile
           profileDetails={profileDetails}
            editProfile={editProfile}
            setProfileDetails={setProfileDetails}
            setEditProfile={setEditProfile}
            openPasswordHandler={openPasswordHandler}
          />
          <OnBillPreferences 
           profileDetails={profileDetails}
           setProfileDetails={setProfileDetails}
           setEditBilling={setEditBilling}
           editBilling={editBilling}
           />
          <OnPlansAndServices />
          <OnSettings />
          <View style={styles.buttonContainer}>
            <CustomButton onPress={signOutHandler}>Sign Out</CustomButton>
          </View>
        </View>
      </ScrollView>
      {modalVisible && (
        <PopModal
          modalVisible={modalVisible}
          closeModalHandler={closePasswordHandler}
        >
          <PasswordChange savePasswordHandler={savePasswordHandler} password={profileDetails?.password} confirmPassword={profileDetails?.confirmPassword}/>
        </PopModal>
      )}
    </>
  );
};

export default Account;

const useStyle = () => {
  const {height, width} = useWindowDimensions();

  const styles = StyleSheet.create({
    accountContainer: {
      padding: Spaces.md,
      height: height,
      width: width,
    },
    photoChange: {
      color: colors.green,
      textAlign: 'center',
      justifyContent: 'center',
      flexDirection: 'row',
      alignItems: 'center',
      paddingTop: Spaces.sm,
    },
    photoContainer: {
      backgroundColor: colors.green,
      paddingVertical: Spaces.xl,
      height: height / 6,
    },
    profileSections: {
      top: '1%',
      position: 'absolute',
      alignSelf: 'center',
      paddingVertical: Spaces.md,
    },
    profilePhoto: {
      height: height / 5,
      width: width / 2.5,
      borderRadius: Size.cxl,
      borderWidth: Size.xs / 1.5,
      borderColor: colors.white,
      elevation: Size.xs / 2,
    },
    buttonContainer: {
      alignItems: 'center',
      marginTop: Spaces.xxxl,
      bottom: height / 20,
    },
    profileDetails: {
      paddingTop: Spaces.xxl,
    },
  });
  return {styles};
};
