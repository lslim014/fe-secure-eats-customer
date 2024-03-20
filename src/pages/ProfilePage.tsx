import { ScrollView } from "native-base";
import SecureEatsHeader from "../common/SecureEatsHeader";
import SecureEatsfooter from "../common/SecureEatsFooter";
import ViewProfile from "../component/profilePageComponent/ViewProfile";
import EditProfile from "../component/profilePageComponent/EditProfile";
import { useState } from "react";

export default function ProfilePage()
{
    const [editProfile, setEditProfile] = useState(false);
    return (
        <ScrollView>
            <SecureEatsHeader/>
                {editProfile?
                <EditProfile
                    setEditProfile = {setEditProfile}
                /> 
                :<ViewProfile
                    editProfile = {editProfile}
                    setEditProfile = {setEditProfile}
                />}
            <SecureEatsfooter/>
        </ScrollView>
    )
}