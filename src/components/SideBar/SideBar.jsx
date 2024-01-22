import { Box, Flex, Link } from '@chakra-ui/react'
import React from 'react'
import { Link as RouterLink } from 'react-router-dom'
import { InstagramLogo, InstagramMobileLogo } from '../../assets/constants'

function SideBar() {
  return (
    <Box 
    height={"100vh"}
    borderRight={"1px solid"}
    borderColor={"whiteAlpha.300"}
    position={"sticky"}
    top={0}
    left={0}
    py={8}
    px={{base:2, md:4}}>

      <Flex w={"full"} h={"full"} direction={'column'} gap={10}>
        <Link as={RouterLink} to={"/"} pl={2} display={{base: "none", md: "block"}} cursor={"pointer"}><InstagramLogo/>
        </Link>
        <Link as={RouterLink} to={"/"} display={{base: "block", md: "none"}} cursor={"pointer"} p={2} borderRadius={6} _hover={{bg: "whiteAlpha.500"}} w={10}>
          <InstagramMobileLogo/>
        </Link>
      </Flex>

    </Box>  
  )
}

export default SideBar