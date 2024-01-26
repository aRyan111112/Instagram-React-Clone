import { Avatar, Flex, Text, Link, Box } from '@chakra-ui/react'
import React from 'react'
import { Link as RouterLink} from 'react-router-dom'

function SuggestedHeader() {
  return (
    <Flex justifyContent={"space-between"} width={"full"} alignItems={"center"}>
        <Flex alignItems={"center"} gap={2} cursor={"pointer"}x>
        <Avatar size="sm" name="User" src="/profilepic.png" />
        <Text fontSize={12} fontWeight={"bold"} >
            main_user._
        </Text>
    </Flex>

    <Link as={RouterLink} to="/auth" style={{textDecoration: "none"}}>
        <Box fontSize={12} fontWeight={"bold"} color={"blue.500"} _hover={{color: "white"}}>Logout</Box>
    </Link>
    </Flex>
  )
}

export default SuggestedHeader