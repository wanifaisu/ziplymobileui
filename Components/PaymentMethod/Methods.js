import { StyleSheet, Text, useWindowDimensions, View } from 'react-native'
import React from 'react'
import { Spaces } from '../../utils/Spacing'
import { Fonts } from '../../utils/Fonts'
import AccordionItem from '../shared/AccordionItem'
import MethodItem from './MethodItem'
import { colors } from '../../utils/Colors'

const Methods = ({addPaymentHandler}) => {
  const {styles}=useStyle()

  return (
    <View style={styles.mainContainer}>
      <Text style={styles.heading}>Payment Methods</Text>
      <MethodItem  subText="Amex***7890"/>
      <MethodItem mainText="Bank of America" subText="Checking***1234"/>
       <AccordionItem onPress={addPaymentHandler}>Add payment method</AccordionItem>
    </View>
  )
}

export default Methods
const useStyle = () => {
  const {fontScale} = useWindowDimensions();

const styles = StyleSheet.create({
    mainContainer: {
        paddingVertical: Spaces.xs,
      },
      heading: {
        fontSize:Fonts.md/fontScale,
        color:colors.grey,
        paddingVertical: Spaces.sm,
      },
})
return {styles}
}