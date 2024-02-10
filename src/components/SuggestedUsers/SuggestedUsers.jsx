import { VStack, Text, Flex, Box, Link} from '@chakra-ui/react'
import React from 'react'
import SuggestedHeader from './SuggestedHeader'
import SuggestedUser from './SuggestedUser'
import useGetSuggestedUsers from '../../hooks/useGetSuggestedUsers'

function SuggestedUsers() {
    const {isLoading, suggestedUsers} = useGetSuggestedUsers()

    if(isLoading) return null
    return (
        <VStack py={8} px={6} gap={4}>
            <SuggestedHeader />

           {suggestedUsers.length !== 0 && (
             <Flex justifyContent={"space-between"} w={"full"} alignItems={"center"}>
             <Text fontSize={12} fontWeight={"bold"} color={"gray.500"}>Suggested for you</Text>
             <Text fontSize={12} fontWeight={"bold"} _hover={{ color: "gray.400" }} cursor={"pointer"}
             >See all
             </Text>
         </Flex>
           )}

            {suggestedUsers.map((user) => (
                <SuggestedUser user={user} key={user.id}/>
            ))}

            <Box fontSize={12} color={"gray.500"} mt={5} alignSelf={"start"}>
            &#169; 2023 Built By {" "}
            <Link href="https://github.com/aRyan111112" target='_blank' color='blue.500' fontSize={14}>Aryan Verma</Link>
            </Box>
        </VStack>
    )
}

export default SuggestedUsers