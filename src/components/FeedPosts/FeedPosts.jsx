import { Box, Image } from '@chakra-ui/react'
import React from 'react'
import FeedPost from './FeedPost'

function FeedPosts() {
  return (
   <>
   <FeedPost img='/img1.png' username='main_user1._' avatar='/img1.png'/>
   <FeedPost img='/img2.png' username='main_user2._' avatar='/img2.png'/>
   <FeedPost img='/img3.png' username='main_user3._' avatar='/img3.png'/>
   <FeedPost img='/img4.png' username='main_user4._' avatar='/img4.png'/>
   </>

  )
}

export default FeedPosts