import { Box, VStack,Image, Flex, Text } from '@chakra-ui/react'
import React, { useState } from 'react'
import Signup from './Signup'
import Login from './Login'
import GoogleAuth from './GoogleAuth'

function AuthForm() {
  const [isLogin, setisLogin] = useState(true)

  return (
    <>
     <Box border={"1px solid gray"} padding={4}my={4}>
      <VStack gap={4}>
      <Image src="/logo.png" h={20}/>
        {isLogin ? <Login/> : <Signup/>}
     

      {/* -------OR------- */}

      <Flex w={"full"} justifyContent={"center"} alignItems={"center"} gap={2}>
        <Box h={"2px"} bg={"gray.400"} flex={2}/>
        <Text>OR</Text>
        <Box h={"2px"} bg={"gray.400"} flex={2}/>
      </Flex>

      <GoogleAuth/>
      </VStack>
    </Box> 

    <Box border={"1px solid gray"} padding={5}>
      <Flex gap={2}>
        <Box>
          {isLogin ? "Don't have an account?" : "Already have an account?"}
        </Box>
        <Box onClick={() => setisLogin(!isLogin)} color="blue.500" cursor={"pointer"}>
          {isLogin ? "Sign up" : "Log in"}
        </Box>
      </Flex>
    </Box>
    </>
  )
}

export default AuthForm