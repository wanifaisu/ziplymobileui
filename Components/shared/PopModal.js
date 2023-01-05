import { StyleSheet, View } from "react-native";
import React from "react";
import { Size } from "../../utils/Size";
import { Spaces } from "../../utils/Spacing";
import IconButton from "../UI/IconButton";
import { Labels } from "../../utils/Labels";
import { colors } from "../../utils/Colors";
import Modal from "react-native-modal";
const PopModal = ({ modalVisible, closeModalHandler, children }) => {
  return (
    <Modal
      isVisible={modalVisible}
      hasBackdrop={true}
      backdropOpacity={0.5}
      backdropColor="black"
      coverScreen={true}
      animationType="slide"
      style={styles.modal}
      transparent={true}
      onRequestClose={() => closeModalHandler()}
    >
      <View style={styles.modalContainer}>
        <IconButton
          icon={Labels.Close_Icon}
          size={Size.md}
          color={colors.grey}
          onIconPress={closeModalHandler}
          style={styles.closeButton}
        />
        {children}
        <View></View>
      </View>
    </Modal>
  );
};

export default PopModal;

const styles = StyleSheet.create({
  modalContainer: {
    marginTop: "auto",
    paddingVertical: Spaces.lg,
    paddingHorizontal: Spaces.md,
    backgroundColor: "white",
    borderTopLeftRadius: Size.md,
    borderTopRightRadius: Size.md,
    flex: 0.62,
  },
  modal: {
    elevation:Size.xs,
    margin: 0,
  },
  closeButton: {
    left: "90%",
  },
});
