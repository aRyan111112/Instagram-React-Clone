import { Avatar, AvatarGroup, Button, Flex, Text, VStack, useDisclosure } from '@chakra-ui/react'
import React from 'react'
import useAuthStore from '../../store/authStore'
import useUserProfileStore from '../../store/userProfileStore'
import EditProfile from './EditProfile'

function ProfileHeader() {
    const {userProfile} = useUserProfileStore()
    const authUser = useAuthStore((state) => state.user)
    const visitingOwnProfileAndAuth = authUser && authUser.username === userProfile.username
    const visitingAnotherProfileAndAuth = authUser && authUser.username !== userProfile.username
    const { isOpen, onOpen, onClose } = useDisclosure()

    return (
        <Flex>
            <Flex gap={{ base: 4, sm: 10 }} py={10} direction={{ base: "column", sm: "row" }}>

                {/* Avatar prfile pic */}
                <AvatarGroup size={{ base: "xl", md: "2xl" }} justifySelf={"center"} alignSelf={"flex-start"} mx={"auto"}>
                    <Avatar src={userProfile.profilepicURL} alt='profile-pic' />
                </AvatarGroup>

                <VStack alignItems={"start"} gap={2} mx={"auto"} flex={1}>
                    {/* Info */}
                    <Flex gap={4} alignItems={"center"} justifyContent={{ base: "center", sm: "flex-start" }} direction={{ base: "column", sm: "row" }}>
                        <Text fontSize={{ base: "sm", md: "lg" }}>{userProfile.username}</Text>
                        {visitingOwnProfileAndAuth && 
                        <Button bg={"white"} color={"black"} size={{ base: "xs", md: "sm" }} _hover={{ bg: "whiteAlpha.800" }} onClick={onOpen}>
                            Edit Profile
                        </Button>}
                        {visitingAnotherProfileAndAuth && 
                        <Button bg={"blue.500"} color={"white"} size={{ base: "xs", md: "sm" }} _hover={{ bg: "blue.800" }}>
                            Follow
                        </Button>}
                    </Flex>

                    {/* posts followers following */}
                    <Flex gap={3}>
                        <Text fontSize={{ base: "xs", md: "sm" }}>
                            <Text as={"span"} mr={1} fontWeight={"bold"}>{userProfile.posts.length}</Text>Posts
                        </Text>

                        <Text fontSize={{ base: "xs", md: "sm" }}>
                            <Text as={"span"} mr={1} fontWeight={"bold"}>{userProfile.followers.length}</Text>Followers
                        </Text>

                        <Text fontSize={{ base: "xs", md: "sm" }}>
                            <Text as={"span"} mr={1} fontWeight={"bold"}>{userProfile.following.length}</Text>Following
                        </Text>
                    </Flex>

                    {/* User name */}
                    <Text fontSize={"sm"} fontWeight={"bold"}>{userProfile.fullname}</Text>
                    {/* Description */}
                    <Text fontSize={"sm"}>{userProfile.bio}</Text>

                </VStack>
                {isOpen && <EditProfile isOpen={isOpen} onClose={onClose}/>}
            </Flex>
        </Flex>
    )
}

export default ProfileHeader