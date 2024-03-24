import { Button, HStack, Heading } from "native-base";
import { useNavigate } from "react-router-dom";

export default function SecureEatsHeader() {
  const navigate = useNavigate();
  const currentPath = window.location.pathname;

  const goToProfile = () => {
    navigate("/secure-eats/profile");
  };

  const goToCustomerReview = () => {
    navigate("/secure-eats/customer-review");
  };

  const goToOrder = () => {
    navigate("/secure-eats/order");
  };

  return (
    <HStack
      p={5}
      alignItems="center"
      display="flex"
      justifyContent="space-between"
      backgroundColor="#FFA629"
    >
      <Heading size="xl" color="white">
        SecureEats
      </Heading>
      {currentPath === "/secure-eats/login" ? (
        <></>
      ) : (
        <HStack space={4}>
          <Button
            variant="link"
            size="lg"
            _text={{ color: "white" }}
            onPress={goToOrder}
          >
            Orders
          </Button>
          <Button
            variant="link"
            size="lg"
            _text={{ color: "white" }}
            onPress={goToCustomerReview}
          >
            Review
          </Button>
          <Button
            variant="link"
            size="lg"
            _text={{ color: "white" }}
            onPress={goToProfile}
          >
            Profile
          </Button>
        </HStack>
      )}
    </HStack>
  );
}
