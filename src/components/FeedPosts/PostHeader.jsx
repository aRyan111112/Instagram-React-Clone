import { Flex, Box, Text, Avatar } from '@chakra-ui/react'
import React from 'react'

function PostHeader({username, avatar}) {
  return (
    <>
      <Flex justifyContent={'space-between'} alignItems={"center"} width={"full"} my={2}>
        <Flex gap={2} alignItems={"center"}>
          <Avatar size="sm" name="User-Profile" src={avatar} />
          <Flex fontSize={12} fontWeight={"bold"} gap={2}>
            {username}
            <Box color={"gray.500"}>&#xb7; 1w</Box>
          </Flex>

        </Flex>
        <Box cursor={"pointer"} 
       >
          <Text fontSize={10} color={"blue.500"} fontWeight={"bold"} _hover={{color:"white"}}
          transition={"0.2s ease-in-out"}>Unfollow</Text>
        </Box>
      </Flex>
    </>
  )
}

export default PostHeader