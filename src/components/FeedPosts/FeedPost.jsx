import React from 'react'
import PostHeader from './PostHeader'
import { Box, Flex, Image } from '@chakra-ui/react'
import PostFooter from './PostFooter'

function FeedPost({img, username, avatar}) {
  return (
   <Box my={7}>
    <PostHeader username={username} img={img}/>
    <Box my={2} borderRadius={4} overflow={"hidden"}>
    <Image src={img} alt={username}/>
    </Box>
    <PostFooter username={username}/>
   </Box>
  )
}

export default FeedPost