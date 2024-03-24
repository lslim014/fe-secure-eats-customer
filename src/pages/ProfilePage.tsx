import { ScrollView } from "native-base";
import SecureEatsHeader from "../component/common/SecureEatsHeader";
import SecureEatsfooter from "../component/common/SecureEatsFooter";
import ViewProfile from "../component/profilePageComponent/ViewProfile";
import EditProfile from "../component/profilePageComponent/EditProfile";
import { useState } from "react";

export default function ProfilePage() {
  const [editProfile, setEditProfile] = useState(false);
  return (
    <ScrollView>
      {editProfile ? (
        <EditProfile setEditProfile={setEditProfile} />
      ) : (
        <ViewProfile
          editProfile={editProfile}
          setEditProfile={setEditProfile}
        />
      )}
    </ScrollView>
  );
}
