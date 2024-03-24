import { HStack, VStack, Text, Heading } from "native-base";
import CustomButton from "../common/CustomButton";
import { useNavigate } from "react-router-dom";

interface Props {
  editProfile: Boolean;
  setEditProfile: any;
}

export default function ViewProfile({ editProfile, setEditProfile }: Props) {
  const navigate = useNavigate();
  const goToCustomerReview = () => {
    navigate("/secure-eats/customer-review");
  };
  return (
    <VStack backgroundColor="#FFFAF3">
      <VStack m="10">
        <HStack
          pb={5}
          pr={5}
          space={4}
          alignItems="center"
          display="flex"
          justifyContent="space-between"
        >
          <Heading size="lg">Profile</Heading>
          <CustomButton
            backgroundColor="#F24822"
            onPress={() => {
              goToCustomerReview();
            }}
            buttonTitle={"My Reviews"}
          />
        </HStack>
        <HStack
          space={4}
          p={5}
          alignItems="flex-start"
          display="flex"
          justifyContent="space-between"
          backgroundColor="#FFFFFF"
        >
          <VStack>
            <Text>Username: Janice Teo</Text>
            <br />
            <Text>Email: janice@gmail.com</Text>
            <br />
            <Text>Contact No: 90099889</Text>
            <br />
            <Text>Address: Home</Text>
            <br />
          </VStack>
          <CustomButton
            backgroundColor="#0D99FF"
            onPress={() => {
              setEditProfile(true);
            }}
            buttonTitle={"Edit"}
          />
        </HStack>
      </VStack>
    </VStack>
  );
}
