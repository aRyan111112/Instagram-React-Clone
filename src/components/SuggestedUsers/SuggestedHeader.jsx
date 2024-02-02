import { Avatar, Flex, Text, Button } from '@chakra-ui/react'
import React from 'react'
import useLogout from '../../hooks/useLogout'
import useAuthStore from '../../store/authStore'
import { Link } from 'react-router-dom'

function SuggestedHeader() {
  const authUser = useAuthStore((state) => state.user)
  const{handleLogout, isLoggingOut, error} = useLogout()
  return (
    <Flex justifyContent={"space-between"} width={"full"} alignItems={"center"}>
        <Flex alignItems={"center"} gap={2} cursor={"pointer"}x>
        <Link to={`${authUser.username}`}>
        <Avatar size="sm" name="User" src={authUser.profilePicURL} />
        </Link>
        <Link to={`${authUser.username}`}>
        <Text fontSize={12} fontWeight={"bold"} >
            {authUser.username}
        </Text>
        </Link>
    </Flex>

        <Button bg={"transparent"} fontSize={12} fontWeight={"bold"} color={"blue.500"} _hover={{color: "white"}} style={{textDecoration: "none"}}
        onClick={handleLogout} cursor={"pointer"}
        isLoading={isLoggingOut}>Logout</Button>
    </Flex>
  )
}

export default SuggestedHeader