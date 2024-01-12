import { Box, VStack,Image, Input, Button, Flex, Text } from '@chakra-ui/react'
import { color } from 'framer-motion'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function AuthForm() {
  const [isLogin, setisLogin] = useState(true)
  const navigate = useNavigate()
  const [inputs, setinputs] = useState({
    email: "",
    password: "",
    confirmPassword : "",
  })

  const handleAuth = () => {
    if (!inputs.email || ! inputs.password) {
      alert("Please fill the details")
      return;
    }
    navigate("/");

  }

  return (
    <>
     <Box border={"1px solid gray"} padding={4}>
      <VStack gap={4}>
        <Image src="/logo.png" h={24}/>
        <Input
        placeholder='Email'
        value={inputs.email}
        onChange={(e) => setinputs({...inputs,email:e.target.value})}
        fontSize={14}
        type='email'
      />
        <Input
        placeholder='Password'
        fontSize={14}
        onChange={(e) => setinputs({...inputs,password:e.target.value})}
        value={inputs.password}
        type='password'
      />

      {!isLogin ? <Input placeholder='Confirm password'type='password' fontSize={14} value={inputs.confirmPassword} onChange={(e) => setinputs({...inputs,confirmPassword:e.target.value})}/> : null}

      <Button w={"full"} colorScheme='blue' onClick={handleAuth}>
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