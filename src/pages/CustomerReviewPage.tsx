import { Heading, ScrollView, VStack, Text } from "native-base";
import SecureEatsHeader from "../component/common/SecureEatsHeader";
import SecureEatsfooter from "../component/common/SecureEatsFooter";

export default function CustomerReviewPage() {
  return (
    <ScrollView>
      <VStack backgroundColor="#FFFAF3">
        <VStack m="10">
          <Heading pb={5} pr={5} size="lg">
            My Review
          </Heading>
          <VStack
            space={4}
            p={6}
            alignItems="flex-start"
            display="flex"
            justifyContent="space-between"
            backgroundColor="#FFFFFF"
            borderRadius={10}
          >
            <VStack backgroundColor="lightgrey" p={6} borderRadius={10}>
              <Heading>Order No: #6672</Heading>
              <Text>Restaurant Name</Text>
              <Text>10/7/2024</Text>
              <Text>4 out of 5</Text>
              <br />
              <Text>
                Review text description blah blah blah Review text description
                blah blah blah Review text description blah blah blah Review
                text description blah blah blah Review text description blah
                blah blah Review text description blah blah blah Review text
                description blah blah blah Review text description blah blah
                blah Review text description
              </Text>
            </VStack>
          </VStack>
        </VStack>
      </VStack>
    </ScrollView>
  );
}
