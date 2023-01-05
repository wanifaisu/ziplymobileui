import { StyleSheet, Text, TextInput, View ,Pressable, useWindowDimensions} from 'react-native'
import React, { useState } from 'react'
import IconButton from '../UI/IconButton'
import { Labels } from '../../utils/Labels'
import { Size } from '../../utils/Size'
import { colors } from '../../utils/Colors'
import { Spaces } from '../../utils/Spacing'
import { Fonts } from '../../utils/Fonts'

const PasswordInput = ({label,onChangePassword,value}) => {
  const {styles}=useStyle()
  const {fontScale} = useWindowDimensions();

  const [showPassword,setShowPassword]=useState(true)
  return (
    <Pressable style={styles.inputContainer}>
      <Text style={styles.label}>{label}</Text>
      <View style={styles.inputBox}>
        <TextInput style={styles.input} onChangeText={onChangePassword} value={value} secureTextEntry={showPassword}/>
        <IconButton icon={showPassword ? Labels.Password_Icon: Labels.ShowPassword_Icon} size={Size.sm/fontScale} onIconPress={()=>setShowPassword(!showPassword)} color={colors.black}/>
      </View>
    </Pressable>
  )
}

export default PasswordInput
const useStyle = () => {
  const {fontScale} = useWindowDimensions();


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
        borderRadius:Size.xs,
        backgroundColor:colors.lightgray,
        alignItems:"center",
    },
    label:{
        color:colors.grey,
        paddingVertical:Spaces.sm

    },
    input:{
      width:"90%",
      fontSize:Fonts.md/fontScale,
      color:colors.black
    }
   
})
return {styles}
}