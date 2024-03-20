import { Button, HStack, Heading } from "native-base";

export default function SecureEatsHeader()
{
    return (
        <HStack p = {5} alignItems="center" display="flex" justifyContent="space-between" backgroundColor="#FFA629">
            <Heading size='xl' color = "white">SecureEats</Heading>
            <HStack space={4} >
                <Button variant = "link" size="lg" _text={{color: "white"}}>
                    Orders
                </Button>
                <Button variant = "link" size="lg" _text={{color: "white"}}>
                    Review
                </Button>
                <Button variant = "link" size="lg" _text={{color: "white"}}>
                    Profile
                </Button>
            </HStack>
        </HStack>
    )
}