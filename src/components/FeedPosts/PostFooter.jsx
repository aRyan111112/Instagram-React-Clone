import React from 'react'
import { useState } from 'react'
import { CommentLogo, NotificationsLogo, UnlikeLogo } from '../../assets/constants'
import { Box, Flex, Input, InputGroup, Text, InputRightElement, Button } from '@chakra-ui/react'

function PostFooter({username}) {
  const [liked, setliked] = useState(false)
  const [likes, setlikes] = useState(0)
  const handleLike = () => {
    if (liked) {
      setliked(false)
      setlikes(likes - 1)
    } else {
      setliked(true)
      setlikes(likes + 1)
    }
  }

  return (
    <Box>
      <Flex gap={3} mb={2}>
        <Box onClick={handleLike} cursor={'pointer'} fontSize={18}>
          {!liked ? <NotificationsLogo /> : <UnlikeLogo />}
        </Box>
        <Box cursor={'pointer'} fontSize={18}>
          <CommentLogo />
        </Box>
      </Flex>
      <Text fontSize={"sm"} fontWeight={600}> {likes} Likes </Text>
      <Text fontSize={"sm"} fontWeight={700}>
        {username}{" "}
        <Text as={"span"} fontWeight={400}>Feeling good.</Text>
      </Text>
      <Text fontSize={"sm"} color={"gray"}>View all 0 comments</Text>

      <Flex w={"full"} alignItems={"center"} justifyContent={"space-between"} gap={2}>
        <InputGroup>
        <Input placeholder='Add a comment...' variant={"flushed"} fontSize={14}/>
        <InputRightElement>
        <Button bg={"transparent"}
        fontSize={14}
        color={"blue.500"}
        cursor={"pointer"}
        _hover={{color: "white"}}>
          Post
        </Button>
        </InputRightElement>
        </InputGroup>
      </Flex>
    </Box>
  )
}

export default PostFooter