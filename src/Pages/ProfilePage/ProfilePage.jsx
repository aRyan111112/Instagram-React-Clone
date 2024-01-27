import { Container, Flex, Box } from '@chakra-ui/react'
import React from 'react'
import ProfileHeader from '../../components/Profile/ProfileHeader'
import ProfileTabs from '../../components/Profile/ProfileTabs'
import ProfilePosts from '../../components/Profile/ProfilePosts'

function ProfilePage() {
  return (
    <Container maxW={"container.lg"}>
      <Flex py={0} px={4} pl={{base:4, md:10}} w={"full"} mx={"auto"} flexDirection={"column"}>
      <ProfileHeader/>
      </Flex>
      
      <Flex direction={"column"} borderTop={"1px solid"} borderColor={"whiteAlpha.300"} maxW={"full"} mx={"auto"}
      px={{base: 2, sm: 4}}>
      <ProfileTabs/>
      <ProfilePosts/>
      </Flex>
    </Container>
  )
}

export default ProfilePage