import { StyleSheet,useWindowDimensions, View } from 'react-native'
import React from 'react'
import ChatContainer from '../Components/Support/ChatContainer'

const ChatSupportScreen = () => {
  const {styles}=useStyle()

  return (
    <View style={styles.ChatContainer}>
     <ChatContainer/>
    </View>
  )
}

export default ChatSupportScreen


const useStyle = () => {
  const {height,width} = useWindowDimensions();

  const styles = StyleSheet.create({
    ChatContainer:{
      flexDirection:"row",
      justifyContent:"center",
      width:width,

    }
  })
  return {styles}
}

