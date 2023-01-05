import { StyleSheet, Text, useWindowDimensions, View} from "react-native";
import React from "react";
import MaterialIcon from "react-native-vector-icons/MaterialIcons";
import Ionicons from "react-native-vector-icons/Ionicons";
import { Fonts, Weights } from "../../utils/Fonts";
import { Labels } from "../../utils/Labels";
import { colors } from "../../utils/Colors";
import { Spaces } from "../../utils/Spacing";

const NetworkStatus = () => {
  const { styles } = useStyle();
const { fontScale } = useWindowDimensions();

  return (
    <>
      <View style={styles.row}>
        <MaterialIcon
          name={Labels.Router_Icon}
          size={Fonts.lg/fontScale}
          color={colors.white}
          style={[styles.routerIcon, styles.icons]}
        />
        <View>
          <Text style={[styles.firstText, styles.text]}>Network Status</Text>
          <Text style={styles.secondText}>Excellent</Text>
          <Text style={[styles.thirdText, styles.text]}>TroubleShoot</Text>
        </View>
      </View>
      <View style={styles.row}>
        <Ionicons
          name={Labels.Rocket_Icon}
          size={Fonts.lg/fontScale}
          color={colors.grey}
          style={[styles.rocketIcon, styles.icons]}
        />
        <View>
          <Text style={[styles.firstText, styles.text]}>Last Speed Test</Text>
          <Text style={styles.secondText}>
            850<Text style={styles.text}>Mbps</Text>
          </Text>
          <Text style={[styles.thirdText, styles.text]}>Test Again</Text>
        </View>
      </View>
    </>
  );
};

export default NetworkStatus;
const useStyle = () => {

const { height, width, fontScale } = useWindowDimensions();

const styles = StyleSheet.create({
  icons: {
    borderRadius: 5 *Spaces.sm,
    marginRight: Spaces.sm,
    padding: Spaces.sm,
    height: width/10,
  },
  routerIcon: {
    backgroundColor: colors.green,
  },
  rocketIcon: {
    backgroundColor: colors.gray,
  },
  row: {
    flexDirection: "row",
    justifyContent:"center",
  },
  text: {
    fontSize: Fonts.sm/fontScale,
  },
  firstText: {
    color: colors.grey,
  },
  secondText: {
    fontSize: Fonts.xl/fontScale,
    fontWeight: Weights.bold,
    color:colors.black

  },
  thirdText: {
    color: colors.green,
  },
})

return { styles }
}
