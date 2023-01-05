import { StyleSheet, Text, useWindowDimensions, View } from 'react-native'
import React from 'react'
import { Badge } from 'react-native-paper'
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { Labels } from '../utils/Labels';
import { Fonts, Weights } from '../utils/Fonts';
import { colors } from '../utils/Colors';
import { Spaces } from '../utils/Spacing';


const NotificationBadgeIcon = ({onPressNotifications,color}) => {
  const {styles}=useStyle()

    const {fontScale} = useWindowDimensions();
  return (
  <View style={styles.container}>
    <Badge size={10} style={styles.badge}></Badge>
    <FontAwesome
              name={Labels.Notification_Icon}
              size={Fonts.xlg/fontScale}
              color={color}
              style={styles.icon}
              onPress={onPressNotifications}
            />
  </View>
  )
}

export default NotificationBadgeIcon

const useStyle = () => {
    const {height,width} = useWindowDimensions();
  
const styles = StyleSheet.create({
    container:{
        paddingRight:Spaces.sm,
        paddingBottom:Spaces.xs
        
    },
    icon: {
       zIndex:-1,
      },
    badge:{
        top:height/80,
        right:width/180,
        backgroundColor:colors.red
    }
})
return {styles}
}
