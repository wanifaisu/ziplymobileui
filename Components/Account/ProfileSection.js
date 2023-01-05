import { StyleSheet, Text, View, useWindowDimensions } from "react-native";
import React, { useEffect, useState } from "react";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { Spaces } from "../../utils/Spacing";
import { colors } from "../../utils/Colors";
import { Fonts, Weights } from "../../utils/Fonts";
import { Labels } from "../../utils/Labels";
import AsyncStorage from "@react-native-async-storage/async-storage";

const ProfileSection = () => {
  const { styles } = useStyle();
  const { fontScale } = useWindowDimensions();
  const [loginUser, setLoginUser] = useState({});
  const getData = async () => {
    try {
      const value = await AsyncStorage.getItem("user");
      let user = JSON.parse(value);
      if (user !== null) {
        setLoginUser(user);
      }
    } catch (error) {
      console.log("error occured");
    }
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <>
      <View style={styles.profileContainer}>
        <Text style={styles.name}>{loginUser?.username}</Text>
        <View style={styles.subNameContainer}>
          <FontAwesome
            name={Labels.Certificate_Icon}
            size={Fonts.lg / fontScale}
            color={colors.gray}
          />
          <Text style={styles.description}>Ziply member since Sep 2020</Text>
        </View>
      </View>
    </>
  );
};

export default ProfileSection;
const useStyle = () => {
  const { height, width, fontScale } = useWindowDimensions();

  const styles = StyleSheet.create({
    profileContainer: {
      alignItems: "center",
      paddingVertical: Spaces.sm,
      marginBottom: Spaces.md,
    },

    name: {
      fontSize: Fonts.xlg / fontScale,
      textAlign: "center",
      fontWeight: Weights.bold,
      color:colors.black
    },

    subNameContainer: {
      flexDirection: "row",
      alignItems: "center",
    },
    description: {
      fontSize: Fonts.md / fontScale,
      fontWeight: Weights.bold,
      paddingLeft: Spaces.sm,
      color:colors.black

    },
  });
  return { styles };
};
