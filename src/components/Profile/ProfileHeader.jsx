import { Avatar, AvatarGroup, Button, Flex, Text, VStack } from '@chakra-ui/react'
import React from 'react'

function ProfileHeader() {
    return (
        <Flex>
            <Flex gap={{ base: 4, sm: 10 }} py={10} direction={{ base: "column", sm: "row" }}>

                {/* Avatar prfile pic */}
                <AvatarGroup size={{ base: "xl", md: "2xl" }} justifySelf={"center"} alignSelf={"flex-start"} mx={"auto"}>
                    <Avatar src='/profilepic.png' name='main_user' />
                </AvatarGroup>

                <VStack alignItems={"start"} gap={2} mx={"auto"} flex={1}>
                    {/* Info */}
                    <Flex gap={4} alignItems={"center"} justifyContent={{ base: "center", sm: "flex-start" }} direction={{ base: "column", sm: "row" }}>
                        <Text fontSize={{ base: "sm", md: "lg" }}>main_user._</Text>
                        <Button bg={"white"} color={"black"} size={{ base: "xs", md: "sm" }} _hover={{ bg: "whiteAlpha.800" }}>Edit Profile</Button>
                    </Flex>

                    {/* posts followers following */}
                    <Flex gap={3}>
                        <Text fontSize={{ base: "xs", md: "sm" }}>
                            <Text as={"span"} mr={1} fontWeight={"bold"}>4</Text>Posts
                        </Text>

                        <Text fontSize={{ base: "xs", md: "sm" }}>
                            <Text as={"span"} mr={1} fontWeight={"bold"}>100</Text>Followers
                        </Text>

                        <Text fontSize={{ base: "xs", md: "sm" }}>
                            <Text as={"span"} mr={1} fontWeight={"bold"}>114</Text>Following
                        </Text>
                    </Flex>

                    {/* User name */}
                    <Text fontSize={"sm"} fontWeight={"bold"}>Aryan Verma</Text>
                    {/* Description */}
                    <Text fontSize={"sm"}>Aspiring to be a software developer, currently learning React.JS</Text>

                </VStack>
            </Flex>
        </Flex>
    )
}

export default ProfileHeader