import { StyleSheet, View, Image, Text, ScrollView, TouchableOpacity } from "react-native";
import React, { useContext } from "react";
import { ProfileContext } from '../Context/ProfileContext';

const ProfileMain = () => {
  const { selectedSection, setSelectedSection } = useContext(ProfileContext);

  const handleDotsClick = () => {
    setSelectedSection('images');
  };

  const handleProfileClick = () => {
    setSelectedSection('about');
  };

  return (
    <>
      <View style={styles.ProfileMain}>
        <TouchableOpacity
          style={[styles.Tab, selectedSection === 'images' ? styles.selectedTab : styles.unselectedTab]}
          onPress={handleDotsClick}
        >
          <Image
            style={[
              styles.ProfileDots,
              selectedSection === 'images' ? styles.selectedIcon : styles.unselectedIcon
            ]}
            source={require("../assets/images/menu-bullets.png")}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.Tab, selectedSection === 'about' ? styles.selectedTab : styles.unselectedTab]}
          onPress={handleProfileClick}
        >
          <Image
            style={[
              styles.ProfileMenu,
              selectedSection === 'about' ? styles.selectedIcon : styles.unselectedIcon
            ]}
            source={require("../assets/images/menu-profile.png")}
          />
        </TouchableOpacity>
      </View>
      {selectedSection === 'images' && (
        <>
          <View style={styles.ProfileGroupPics1}>
            <Image
              style={styles.Post1}
              source={require("../assets/images/profile-post-1.png")}
            />
            <Image
              style={styles.Post2}
              source={require("../assets/images/profile-post-2.png")}
            />
            <Image
              style={styles.Post3}
              source={require("../assets/images/profile-post-3.png")}
            />
          </View>
          <View style={styles.ProfileGroupPics2}>
            <Image
              style={styles.Post4}
              source={require("../assets/images/profile-post-4.png")}
            />
            <Image
              style={styles.Post5}
              source={require("../assets/images/profile-post-5.png")}
            />
            <Image
              style={styles.Post6}
              source={require("../assets/images/profile-post-6.png")}
            />
          </View>
        </>
      )}
      {selectedSection === 'about' && (
        <ScrollView>
          <View style={styles.AboutPage}>
            <Text style={styles.AboutText}>About</Text>
            <Text style={styles.AboutDescription}>Looking for a new home.</Text>
          </View>
          <View style={styles.AboutPage}>
            <Text style={styles.AboutText}>Compatible with</Text>
            <View>
              <View style={styles.HobbiesDiv}>
                <View style={styles.FoodPreferenceDiv}>
                  <Text style={styles.PrefenceText}>Food Preferences</Text>
                </View>
                <View style={styles.PetsDiv}>
                  <Text style={styles.PrefenceText}>Pets</Text>
                </View>
              </View>
              <View style={styles.FoodDiv}>
                <View style={styles.FoodView}>
                  <Text style={styles.FoodText}>Veg</Text>
                </View>
                <View style={styles.PetView}>
                  <Text style={styles.FoodText}>Don't Mind</Text>
                </View>
              </View>
              <View style={styles.HobbiesDiv}>
                <View style={styles.FoodPreferenceDiv}>
                  <Text style={styles.PrefenceText}>Smoking</Text>
                </View>
                <View style={styles.PetsDiv}>
                  <Text style={styles.PrefenceText}>Drinking</Text>
                </View>
              </View>
              <View style={styles.FoodDiv}>
                <View style={styles.FoodView}>
                  <Text style={styles.FoodText}>Never</Text>
                </View>
                <View style={styles.PetView}>
                  <Text style={styles.FoodText}>Occasionally</Text>
                </View>
              </View>
              <View style={styles.HobbiesDiv}>
                <View style={styles.FoodPreferenceDiv}>
                  <Text style={styles.PrefenceText}>Partying</Text>
                </View>
              </View>
              <View style={styles.FoodDiv}>
                <View style={styles.FoodView}>
                  <Text style={styles.FoodText}>Occasionally</Text>
                </View>
              </View>
            </View>
          </View>
        </ScrollView>
      )}
    </>
  );
};

export default ProfileMain;

const styles = StyleSheet.create({
  ProfileMain: {
    flexDirection: "row",
  },
  Tab: {
    width: "50%",
    alignItems: "center",
    justifyContent: "center",
    borderBottomWidth: 2,
  },
  selectedTab: {
    borderBottomColor: "#FED807",
  },
  unselectedTab: {
    borderBottomColor: "#AAAFB2",
  },
  ProfileDots: {
    marginBottom: 4,
  },
  ProfileMenu: {
    marginBottom: 4,
  },
  selectedIcon: {
    tintColor: "#FED807",
  },
  unselectedIcon: {
    tintColor: "#AAAFB2",
  },
  ProfileGroupPics1: {
    flexDirection: "row",
    gap:1
  },
  ProfileGroupPics2: {
    flexDirection: "row",
    gap:1
  },
  Post1: {
    width: "33%",
  },
  Post2: {
    width: "33%",
  },
  Post3: {
    width: "33%",
  },
  Post4: {
    width: "33%",
  },
  Post5: {
    width: "33%",
  },
  Post6: {
    width: "33%",
  },
  AboutPage: {
    marginHorizontal: 20,
    marginTop: 24,
  },
  AboutText: {
    fontSize: 18,
    fontWeight: "500",
  },
  AboutDescription: {
    marginTop: 14,
    marginHorizontal: 12,
    fontSize: 16,
  },
  HobbiesDiv: {
    marginTop: 14,
    marginHorizontal: 12,
    flexDirection: "row",
  },
  FoodPreferenceDiv: {
    width: "50%",
    fontSize: 14,
    fontWeight: "400",
  },
  PetsDiv: {
    width: "50%",
    fontSize: 14,
    fontWeight: "400",
  },
  FoodDiv: {
    flexDirection: "row",
    marginHorizontal: 20,
    marginTop: 12,
  },
  FoodView: {
    width: "50%",
  },
  PetView: {
    width: "50%",
    marginLeft: 8,
  },
  FoodText: {
    fontSize: 16,
    fontWeight: "600",
  },
  PrefenceText: {
    fontSize: 14,
    fontWeight: "400",
    color: "#313233",
  }
});
