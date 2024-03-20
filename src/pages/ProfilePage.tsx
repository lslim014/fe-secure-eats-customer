import { HStack, VStack, Button , Text, Heading, ScrollView } from "native-base";
import SecureEatsHeader from "../common/SecureEatsHeader";
import SecureEatsfooter from "../common/SecureEatsFooter";
import CustomButton from "../common/CustomButton";
import ViewProfile from "../component/profilePageComponent/ViewProfile";
import EditProfile from "../component/profilePageComponent/EditProfile";

export default function ProfilePage()
{
    return (
        <ScrollView>
            <SecureEatsHeader/>
                <ViewProfile/>
                <EditProfile/>
            <SecureEatsfooter/>
        </ScrollView>
    )
}