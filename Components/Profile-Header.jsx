import { Image, StyleSheet, Text, View } from "react-native";
import ToggleSwitch from "toggle-switch-react-native";
import React, { useState } from "react";

const Header = () => {
  const [isOn, setIsOn] = useState(false);

  const handleToggle = (newState) => {
    setIsOn(newState);
  };

  return (
    <View>
      <View style={styles.Header}>
        <Text style={styles.ProfileText}>Profile</Text>
        <View style={styles.HeaderIcons}>
          <View style={styles.ToggleSwitch}>
          <ToggleSwitch 
            isOn={isOn}
            onColor="white"
            offColor="black"
            onToggle={handleToggle}
            thumbOffStyle={styles.thumbStyle}
            thumbOnStyle={styles.thumbStyle}
          />
          </View>
          <Image style={styles.SettingsIcon} source={require("../assets/images/profile-settings.png")} />
        </View>
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  Header: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 40,
    marginHorizontal: 16,
  },
  ProfileText: {
    fontSize: 24,
    fontWeight: "600",
  },
  HeaderIcons: {
    flexDirection: "row",
    alignItems: "center", // Add this line to center the icons vertically
    justifyContent:"center"
  },
  ToggleSwitch:{
    marginRight:20,
    borderColor:"#D9D9D9",
    borderWidth:1,
    borderRadius:20,
  },
  thumbStyle: {
    backgroundColor: "#D9D9D9",
  },
  SettingsIcon:{
    height:32,
    width:32
  },
});

