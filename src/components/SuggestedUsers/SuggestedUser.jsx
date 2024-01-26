import { Avatar, Flex, VStack, Text, Box, Button } from '@chakra-ui/react'
import React from 'react'
import { useState } from 'react'

function SuggestedUser({name, followers, avatar}) {
  const [isFollowed, setisFollowed] = useState(false)

  return (
    <>
    <Flex justifyContent={'space-between'} w={"full"}>
      <Flex alignItems={"center"} gap={2}>
        <Avatar src={avatar} name={name} size={"sm"}/>
        <VStack spacing={0} alignItems={"flex-start"}>
          <Box fontSize={12} fontWeight={"bold"}>{name}</Box>
          <Box fontSize={11} color={"gray.400"}>{followers} Followers</Box>
        </VStack>
      </Flex>

      <Button bg={"transparent"} 
      fontSize={13} 
      p={0}
      fontWeight={'medium'} 
      color={"blue.400"}
      onClick={() => setisFollowed(!isFollowed)}
      _hover={{color: "white"}}
      overflow={"hidden"}
      >
        {isFollowed ? "Unfollow" : "Follow"}
      </Button>
    </Flex>
    </>
  )
}

export default SuggestedUser