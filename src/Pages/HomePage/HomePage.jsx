import { Box, Container, Flex} from '@chakra-ui/react'
import React from 'react'
import FeedPosts from '../../components/FeedPosts/FeedPosts'
import SuggestedUsers from '../../components/SuggestedUsers/SuggestedUsers'

function HomePage() {
  return (
    <Container maxW={"container.md"}>
      <Flex gap={20}>
        <Box flex={4} py={12}>
          <FeedPosts />
        </Box>

        <Box display={{base: "none", md: "block"}} maxW={"300px"} flex={3}>
          <SuggestedUsers/>
        </Box>
      </Flex>
    </Container>
  )
}

export default HomePage