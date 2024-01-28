import { Avatar, Flex, Text } from '@chakra-ui/react'
import React from 'react'

function Comment({ createdAt, username, profilepic, text }) {
    return (
        <>
            <Flex gap={4}>
                <Avatar src={profilepic} size={"sm"} />
                <Flex direction={"column"}>
                    <Flex gap={2}>
                        <Text fontSize={12} fontWeight={"bold"}>
                            {username}
                        </Text>
                        <Text fontSize={12}>
                            {text}
                        </Text>
                    </Flex>
                    <Text fontSize={12} color={"gray.500"}>
                        {createdAt}
                    </Text>
                </Flex>
            </Flex>
        </>
    )
}

export default Comment