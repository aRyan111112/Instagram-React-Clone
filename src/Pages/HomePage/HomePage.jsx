import { Box, Container, Flex} from '@chakra-ui/react'
import React from 'react'
import FeedPosts from '../../components/FeedPosts/FeedPosts'

function HomePage() {
  return (
    <Container maxW={"container.sm"}>
      <Flex gap={20}>
        <Box flex={2} py={12}>
          <FeedPosts />
        </Box>

        <Box display={{base: "none", md: "block"}} maxW={"300px"} mr={20}>
          Suggestions
        </Box>
      </Flex>
    </Container>
  )
}

export default HomePage