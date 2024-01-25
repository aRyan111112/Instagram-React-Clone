import React from 'react'
import { useState } from 'react'
import { CommentLogo, NotificationsLogo, UnlikeLogo } from '../../assets/constants'
import { Box, Flex, Text } from '@chakra-ui/react'

function PostFooter() {
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
    <>
      <Flex gap={3}>
        <Box onClick={handleLike} cursor={'pointer'} fontSize={18}>
          {!liked ? <NotificationsLogo /> : <UnlikeLogo />}
        </Box>
        <Box cursor={'pointer'} fontSize={18}>
          <CommentLogo />
        </Box>
      </Flex>

      <Text> {likes} Likes </Text>
    </>
  )
}

export default PostFooter