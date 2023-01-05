import { StyleSheet, Text, TextInput, View ,Pressable} from 'react-native'
import React from 'react'
import { Size } from '../../utils/Size'
import { colors } from '../../utils/Colors'
import { Spaces } from '../../utils/Spacing'

const CustomInput = ({label,onChange,value}) => {
  return (
    <Pressable style={styles.inputContainer}>
      <Text style={styles.label}>{label}</Text>
      <View style={styles.inputBox}>
        <TextInput style={styles.input} onChangeText={onChange} value={value} />
      </View>
    </Pressable>
  )
}

export default CustomInput

const styles = StyleSheet.create({
    inputContainer:{
        paddingVertical:Spaces.xs
    },
    inputBox:{
        flexDirection:"row",
        justifyContent:"space-between",
        paddingHorizontal:Spaces.md,
        borderColor:colors.gray,
        borderWidth:Size.xs/10,
        // paddingVertical:Spaces.sm,
        borderRadius:Size.xs,
        backgroundColor:colors.lightgray,
        alignItems:"center",
    },
    label:{
        color:colors.grey,
        paddingVertical:Spaces.sm

    },
    input:{
      width:"95%"
    }
   
})