import { HStack, VStack, Text, Heading, Input } from "native-base";
import CustomButton from "../../common/CustomButton";

export default function EditProfile(
    {setEditProfile}
    :{setEditProfile:any})
{
    return (
        <VStack backgroundColor="#FFFAF3">
            <VStack m="10">
                <Heading pb={5} size='lg'>Profile</Heading>
                <VStack p={5}  backgroundColor="#FFFFFF">
                    <HStack space={10}>
                        <VStack>
                            <Text>Username: </Text>
                            <br/>
                            <Text>Email: </Text>
                            <br/>
                            <Text py={1}>Contact No: </Text>
                            <br/>
                            <Text py={1}>Address: </Text>
                            <br/>
                        </VStack>
                        <VStack>
                            <Text>Janice Teo</Text>
                            <br/>
                            <Text>janice@gmail.com</Text>
                            <br/>
                            <Input placeholder="Input Contact" w="100%" />
                            <br/>
                            <Input placeholder="Input Address" w="100%" />
                            <br/>
                        </VStack>
                    </HStack>
                    
                    <HStack space={5}>
                        <CustomButton backgroundColor='#14AE5C' onPress={() => { } } buttonTitle={"Save"} />
                        <CustomButton backgroundColor='#F24822' onPress={() => {setEditProfile(false) } } buttonTitle={"Cancel"} />
                    </HStack>
                </VStack>
            </VStack>
        </VStack>
    )
}