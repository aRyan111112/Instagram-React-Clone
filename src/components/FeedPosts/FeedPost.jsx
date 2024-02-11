import React from 'react'
import PostHeader from './PostHeader'
import { Box, Flex, Image } from '@chakra-ui/react'
import PostFooter from './PostFooter'
import useGetUserProfileById from '../../hooks/useGetUserProfileById'

function FeedPost({post}) {
  const {userProfile} = useGetUserProfileById(post.createdBy)
  return (
   <Box my={7}>
    <PostHeader post={post} creatorProfile={userProfile}/>
    <Box my={2} borderRadius={4} overflow={"hidden"}>
    <Image src={post.imageURL} alt="Feed post image"/>
    </Box>
    <PostFooter post={post} creatorProfile={userProfile}/>
   </Box>
  )
}

export default FeedPost