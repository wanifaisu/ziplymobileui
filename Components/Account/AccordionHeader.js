import { StyleSheet, Text,Pressable, useWindowDimensions} from 'react-native'
import React from 'react'
import { Fonts } from '../../utils/Fonts'
import { Spaces } from '../../utils/Spacing'
import { colors } from '../../utils/Colors'


const AccordionHeader = ({onHeaderPress,children}) => {
  const {styles}=useStyle()

  return (
    <Pressable style={styles.headerContainer}  onPress={onHeaderPress}>
        <Text style={styles.heading}>{children}</Text>
        
      </Pressable>
  )
}

export default AccordionHeader
const useStyle = () => {
  const {fontScale} = useWindowDimensions();

const styles = StyleSheet.create({
    headerContainer:{
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center"
    },
    heading: {
        fontSize: Fonts.md/fontScale,
        paddingVertical: Spaces.md,
        color:colors.grey
       
      },
})
return {styles}
}