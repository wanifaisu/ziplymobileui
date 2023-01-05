import React, { useEffect, useState } from "react";
import {
  View,
  FlatList,
  TextInput,
  StyleSheet,
  Keyboard,
  useWindowDimensions,
} from "react-native";
import Message from "./Message";
import IconButton from "../UI/IconButton";

import { data } from "./data";
import { colors } from "../../utils/Colors";
import { Size } from "../../utils/Size";
import { Spaces } from "../../utils/Spacing";

let chats = [];

const ChatContainer = () => {
  const {styles}=useStyle()
  const [msg, setMsg] = useState("");
  const [chatList, setChatList] = useState([]);
  const [onMessage, setOnMessage] = useState(false);

  

  const getAnswer = (q) => {
    for (let i = 0; i < data.length; i++) {
      if (data[i].question.toLowerCase().includes(q.toLowerCase())) {
        chats = [{ msg: data[i].answer, incomingMsg: true }, ...chats];
        setChatList([...chats]);
        
        return;
      }
    }

    chats = [
      { msg: "Didn't recognise your question", incomingMsg: true },
      ...chats,
    ];
    setChatList([...chats]);
    return;
  };

  const onSendMsg = () => {
    if (msg === "") {
      return;
    }
    chats = [{ msg: msg, sentMsg: true }, ...chats];
    setChatList([...chats]);
    setTimeout(() => {
      getAnswer(msg);
    }, 1000);
    setMsg("");
    Keyboard.dismiss()
    setOnMessage(false);
  };

  return (
    <View >
      <FlatList
        style={{ height: onMessage ? "82%" : "90%" }}
        inverted={true}
        keyExtractor={(_, index) => index.toString()}
        data={chatList}
        renderItem={({ item }) => (
          <Message
            incomingMsg={item.incomingMsg}
            msg={item.msg}
            sentMsg={item.sentMsg}
          />
        )}
      />
      <View style={styles.typeMsgContainer} >
        <TextInput
          style={styles.typeMsgBox}
          value={msg}
          placeholder="Message Here ..."
          onChangeText={(val) => setMsg(val)}
          onResponderStart={() => setOnMessage(true)}
        />

        <IconButton
          icon="arrow-up-circle"
          size={Size.lg}
          color={colors.green}
          onIconPress={onSendMsg}

        />
      </View>
    </View>
  );
};

export default ChatContainer;
const useStyle = () => {
  const {height,width} = useWindowDimensions();

  const styles = StyleSheet.create({
    typeMsgContainer: {
      flexDirection: "row",
      alignItems: "center",
      backgroundColor: colors.lightgray,
      borderRadius: Size.md,
      borderWidth: Spaces.xs / 5,
      borderColor: colors.gray,
      justifyContent: "space-between",
      margin: Spaces.sm,
      width:width/1.1
    },
  
    typeMsgBox: {
      padding: Spaces.sm,
      width: width/1.3,
    },
    
  })
  return {styles}
}

