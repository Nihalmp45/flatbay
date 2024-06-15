import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";

const ProfileFooter = () => {
  return (
    <View>
      <View style={styles.Footer}>
        <TouchableOpacity>
          <Image source={require("../assets/images/footer-home.png")} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image source={require("../assets/images/footer-like.png")} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image source={require("../assets/images/footer-send.png")} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image source={require("../assets/images/footer-user-profile.png")} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ProfileFooter;

const styles = StyleSheet.create({
  Footer: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    marginTop: 25,
    paddingTop: 10,
    paddingBottom: 10,
    borderColor: "#efe5e5",
    borderWidth: 1,
    borderRadius: 40,
  },
});
