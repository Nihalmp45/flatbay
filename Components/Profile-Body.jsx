import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";

const ProfileBody = () => {
  return (
    <View>
      <View style={styles.Body}>
        <TouchableOpacity>
          <Image source={require("../assets/images/profile-edit.png")} />
        </TouchableOpacity>
        <View style={styles.Profile}>
          <Text style={styles.ProfileName}>Jhon Doe</Text>
          <Image source={require("../assets/images/male-image.png")} />
        </View>
        <View style={styles.ProfileDescription}>
          <Text style={styles.ProfileLabel}>25 Years</Text>
          <Text style={styles.DescriptionSeparator}>|</Text>
          <Text style={styles.ProfileLabel}>IT Engineer</Text>
          <Text style={styles.DescriptionSeparator}>|</Text>
          <Image source={require("../assets/images/google-icon.png")} />
          <Text style={styles.ProfileLocation}>Goregoan, Mumbai</Text>
        </View>
      </View>
    </View>
  );
};

export default ProfileBody;

const styles = StyleSheet.create({
  Body: {
    alignItems: "center",
    marginTop: 40,
    marginHorizontal: 36,
    marginBottom: 32,
  },
  Profile: {
    marginTop: 16,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  ProfileName: {
    fontSize: 24,
    fontWeight: "600",
    marginRight: 8,
  },
  ProfileDescription: {
    flexDirection: "row",
    marginTop: 8,
    fontSize:14,
    fontWeight:"400"
  },
  DescriptionSeparator: {
    marginHorizontal: 8,
  },
  ProfileLocation:{
    marginLeft:4,
    fontSize:14,
    fontWeight:"400"
  }
});
