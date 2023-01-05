import { Keyboard, KeyboardAvoidingView, Pressable, StyleSheet, Text, TextInput, useWindowDimensions, View } from 'react-native'
import React, { useState } from 'react'
import { colors } from '../../utils/Colors'
import { Fonts } from '../../utils/Fonts'
import { Size } from '../../utils/Size'
import { Spaces } from '../../utils/Spacing'

const EditInput = ({editValue,addChangeHandler}) => {
    const [inputData,setInputData]=useState(editValue)
    const {styles}=useStyle()
    const onChangeText=(event)=>{
    setInputData(event)
    }
    
  return (
    <KeyboardAvoidingView enabled>
    <View style={styles.editInputContainer}>
      <TextInput placeholder="enter email" style={styles.editInput} value={inputData} onChangeText={onChangeText} onBlur={Keyboard.dismiss}/>
      <Pressable onPress={()=>addChangeHandler(inputData)}><Text style={styles.action}>Add</Text></Pressable>
    </View>
    </KeyboardAvoidingView>

  )
}

export default EditInput


const useStyle = () => {
    const {height,width,fontScale} = useWindowDimensions();
  
    const styles = StyleSheet.create({
        editInputContainer:{
            flexDirection:"row",
            justifyContent:"space-between",
            alignItems:"center",
            marginTop:Spaces.xs
            
        },
        editInput:{     
            borderColor: colors.gray,
            borderWidth: Size.xs / 10,
            padding: Spaces.xs,
            width:width/1.2,
            borderRadius:Size.xs/2,
            fontSize:Fonts.md/fontScale,
            color:colors.black
            
        },
        action:{
            fontSize: Fonts.xs/fontScale,
            color: colors.green,
        }
    })
    return {styles}
  }
  