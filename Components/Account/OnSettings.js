import { StyleSheet, View } from "react-native";
import React, { useState } from "react";
import { Spaces } from "../../utils/Spacing";
import AccordionItem from "../shared/AccordionItem";
import AccordionHeader from "./AccordionHeader";
import SingleAccordion from "../shared/SingleAccordion";
import { Labels } from "../../utils/Labels";

const OnSettings = () => {
  const [onSettings, setOnSettings] = useState(false);
  const openSettingsHandler = () => {
    setOnSettings(true);
  };
  const closeSettingsHandler = () => {
    setOnSettings(false);
  };
  return (
    <View style={styles.mainContainer}>
      {!onSettings ? (
        <SingleAccordion
          iconName={Labels.Settings_Icon}
          listName={"Settings"}
          onButtonPress={openSettingsHandler}
        />
      ) : (
        <>
          <AccordionHeader onHeaderPress={closeSettingsHandler}>
            Settings
          </AccordionHeader>
          <View style={styles.lists}>
            <AccordionItem>Notifications</AccordionItem>
            <AccordionItem>Marketing Communications</AccordionItem>
            <AccordionItem>Face ID</AccordionItem>
          </View>
        </>
      )}
    </View>
  );
};

export default OnSettings;

const styles = StyleSheet.create({
  mainContainer: {
    paddingHorizontal: Spaces.md,
  },
  lists: {
    marginBottom: Spaces.xl,
  },
});
