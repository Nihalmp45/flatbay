import Header from "../Components/Profile-Header.jsx";
import ProfileBody from "../Components/Profile-Body.jsx";
import ProfileMain from "../Components/Profile-Main.jsx";
import ProfileFooter from "../Components/Profile-footer.jsx";
import { View, ScrollView } from "react-native";
import { ProfileProvider } from "../Context/ProfileContext.js";

export default function RootLayout() {
  return (
    <>
      <ScrollView>
        <View>
          <ProfileProvider>
            <Header />
            <ProfileBody />
            <ProfileMain />
            <ProfileFooter />
          </ProfileProvider>
        </View>
      </ScrollView>
    </>
  );
}
