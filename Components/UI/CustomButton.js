import { StyleSheet, Text, View ,Pressable,useWindowDimensions} from 'react-native'
import React from 'react'
import { Spaces } from '../../utils/Spacing'
import { colors } from '../../utils/Colors'
import { Fonts, Weights } from '../../utils/Fonts'

const CustomButton = ({children,onPress}) => {
  const {styles}=useStyle()

  return (
    <View style={styles.buttonContainer} >
          <Pressable style={styles.button} onPress={onPress}>
            <Text style={styles.buttonText}>{children}</Text>
          </Pressable>
        </View>
  )
}

export default CustomButton
const useStyle = () => {
  const {height,width,fontScale} = useWindowDimensions();

const styles = StyleSheet.create({
    buttonContainer: {
      width:width/1.1,
      paddingTop: Spaces.lg,
      },
      button: {
        backgroundColor: colors.green,
        borderRadius: Fonts.xxl,
      },
      buttonText: {
        color: colors.white,
        textAlign: "center",
        padding: Spaces.md,
        fontSize: Fonts.md/fontScale,
        fontWeight:Weights.bold
      },
})

return { styles }
}