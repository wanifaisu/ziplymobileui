import { StyleSheet, Text, View } from 'react-native'
import React,{useState} from 'react'

import { Spaces } from '../../utils/Spacing'
import { Fonts } from '../../utils/Fonts'
import { colors } from '../../utils/Colors'
import ListItem from '../shared/ListItem'

const AutopaySettings = ({autoPay}) => {
 const  [isAutoPay,setIsAutoPay]=useState(autoPay)
 const [date, setDate] = useState(new Date());
  const [datePicker, setDatePicker] = useState(false);
  const autoPayHandler=()=>{
    setIsAutoPay(!isAutoPay)
  }
  function showDatePicker() {
    setDatePicker(true);
   
  }
  const hideDatePicker = () => {
    setDatePicker(false);
  };
  function onDateSelected(date) {
    setDate(date);
    setDatePicker(false);
  }
  const getFormattedDate = (date) => {
    return `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`;
  };
  return (
    <View style={styles.mainContainer}>
      <Text style={styles.heading}>Autopay Settings</Text>
      <View>
        <ListItem mainText="Automatic Payments" subText={!isAutoPay? "On":"Off"} controls={!isAutoPay? "Turn Off":"Turn On"} onPressControl={autoPayHandler}/>
        <ListItem  mainText="Next Payment Date" subText={getFormattedDate(date)} date={date} controls="Change date" onPressControl={showDatePicker} datePicker={datePicker} onDateSelected={onDateSelected} hideDatePicker={hideDatePicker} />
        <ListItem  mainText="Payment amount" subText="$60.00" controls=""/>
        <ListItem  mainText="Payment Method" subText="Amex ****7890" controls="update card"/>
      </View>
      <View style={styles.paraContainer}>
        <Text style={styles.text}><Text style={styles.terms}>Terms and conditions </Text> signed on sep 1,2022</Text>
        <Text style={styles.paragraph}>
          AutoPay notes gohere odio volumus per id , at sea vidi labores evertitur, Qui ea equidium perfecto mediocrem, eos.
        </Text>
      </View>
    </View>
  )
}

export default AutopaySettings

const styles = StyleSheet.create({
  mainContainer: {
    paddingVertical: Spaces.xs,
  },
  heading: {
    fontSize:Fonts.md,
    opacity: 0.65,
    paddingVertical: Spaces.md,
  },
  paragraph: {
    fontSize: Fonts.md,
    marginVertical:Spaces.lg,
    color:colors.black
  },
  paraContainer:{
  paddingVertical:Spaces.sm
  },
  text:{
    paddingVertical:Spaces.sm,
   fontSize:Fonts.xs,
   color:colors.black
  },
  terms:{
    color:colors.green
  }
})