import React from 'react'
import { Flex, Image, Text } from '@chakra-ui/react'

function GoogleAuth() {
  return (
    <Flex gap={2} cursor={"pointer"} my={"12px"}>
      <Image src='/google.png' h={"24px"} alt='google logo' />
      <Text color={"blue.500"}>Login with Google</Text>
    </Flex>
  )
}

export default GoogleAuth