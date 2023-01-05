import { Pressable} from 'react-native'
import React from 'react'
import Ionic from "react-native-vector-icons/Ionicons"
const IconButton = ({icon,size,onIconPress,style,color}) => {
  return (
    <Pressable onPress={onIconPress}>
     <Ionic name={icon} size={size}  style={style} color={color}/>
    </Pressable>
  )
}

export default IconButton

