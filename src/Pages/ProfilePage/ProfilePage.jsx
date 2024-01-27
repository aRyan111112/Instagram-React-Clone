import { Container, Flex, Box } from '@chakra-ui/react'
import React from 'react'
import ProfileHeader from '../../components/Profile/ProfileHeader'
import ProfileTabs from '../../components/Profile/ProfileTabs'
import ProfilePosts from '../../components/Profile/ProfilePosts'

function ProfilePage() {
  return (
    <Container maxW={"container.lg"}>
      <ProfileHeader/>
      <Box borderTop={"1px solid"} borderColor={"whiteAlpha.400"}>
      <ProfileTabs/>
      </Box>
      <ProfilePosts/>

    </Container>
  )
}

export default ProfilePage