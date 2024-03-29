import { Box, Center, Container, Flex, Image, VStack } from "@chakra-ui/react";
import React from "react";
import AuthForm from "../../components/AuthForm/AuthForm";

function AuthPage() {
  return (
    <Flex minH={"100vh"} justifyContent={"center"} alignItems={"center"} px={4}>
      <Container maxW={"container.md"} padding={0}>
        <Flex justifyContent={"center"} alignItems={"center"}>
          {/* // Left Side // */}
          <Box display={{base: "none", md: "block" }}>
            <Image src="/auth.png" alt="Phone img" h={500} />
          </Box>
          {/* // Right Side // */}
          <VStack align={"stretch"} overflowX={"hidden"}>
            <AuthForm />
            <Box textAlign={"center"}>Get the app</Box> 
            <Flex gap={4} justifyContent={"center"}>
              <Image src="/playstore.png" h={10} />
              <Image src="/microsoft.png" h={10} />
            </Flex>
          </VStack>
        </Flex>
      </Container>
    </Flex>
  );
}

export default AuthPage;
