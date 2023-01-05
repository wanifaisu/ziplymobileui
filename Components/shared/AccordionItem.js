import { Pressable, StyleSheet, Text, useWindowDimensions } from 'react-native'
import React from 'react'
import { Labels } from '../../utils/Labels'
import { Fonts } from '../../utils/Fonts'
import { colors } from '../../utils/Colors'
import { Spaces } from '../../utils/Spacing'
import AntDesign from "react-native-vector-icons/AntDesign";
import { Size } from '../../utils/Size'

const AccordionItem = ({children,onPress}) => {
  const {styles}=useStyle()
  const {fontScale} = useWindowDimensions();


  return (
    <Pressable style={styles.accordionContainer} onPress={onPress}>
          <Text style={styles.accordionName}>{children}</Text>
          <AntDesign
            name={Labels.Right_Icon}
            size={Fonts.xl/fontScale}
            color={colors.grey}
            style={styles.icon}
          />
        </Pressable>
  )
}

export default AccordionItem
const useStyle = () => {
  const {fontScale} = useWindowDimensions();

const styles = StyleSheet.create({
    accordionContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingVertical: Spaces.sm,
        borderBottomWidth:Size.xs/10,
        borderBottomColor: colors.gray,
      },
      accordionName: {
        fontSize: Fonts.md/fontScale,
        color:colors.black

      },
})
return {styles}
}