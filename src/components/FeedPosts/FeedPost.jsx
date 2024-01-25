import React from 'react'
import PostHeader from './PostHeader'
import { Box, Flex, Image } from '@chakra-ui/react'
import PostFooter from './PostFooter'

function FeedPost() {
  return (
   <>
    <PostHeader/>
    <Box>
    <Image src='/img1.png' alt='User Profile'/>
    </Box>
    <PostFooter/>
   </>
  )
}

export default FeedPost