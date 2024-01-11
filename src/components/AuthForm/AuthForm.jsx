import { Box, VStack,Image, Input, Button, Flex, Text } from '@chakra-ui/react'
import React, { useState } from 'react'

function AuthForm() {
  const [isLogin, setisLogin] = useState(true)

  return (
    <Box border={"1px"} padding={4}>
      <VStack gap={4}>
        <Image src="/logo.png" h={24}/>
        <Input
        placeholder='Email'
        fontSize={14}
        type='email'
      />
        <Input
        placeholder='Password'
        fontSize={14}
        type='password'
      />

      {!isLogin ? <Input placeholder='Confirm password'type='password' fontSize={14}/> : null}

      <Button w={"full"} colorScheme='blue'>
        {isLogin ? "Log in" : "Sign up"}
      </Button>

      {/* -------OR------- */}

      <Flex w={"full"} justifyContent={"center"} alignItems={"center"} gap={2}>
        <Box h={"2px"} bg={"gray.400"} flex={2}/>
        <Text>OR</Text>
        <Box h={"2px"} bg={"gray.400"} flex={2}/>
      </Flex>

      <Flex gap={2} cursor={"pointer"} my={"12px"}>
        <Image src='/google.png' h={"24px"} alt='google logo' />
        <Text color={"blue.500"}>Login with Google</Text>
      </Flex>
      </VStack>
    </Box> 
  )
}

export default AuthForm