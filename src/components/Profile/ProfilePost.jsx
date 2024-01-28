import { Avatar, Box, Flex, GridItem, Image, Text, useDisclosure } from '@chakra-ui/react'
import React from 'react'
import { AiFillDelete, AiFillHeart } from "react-icons/ai";
import { FaComment } from "react-icons/fa"
import { Divider } from '@chakra-ui/react'
import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton } from '@chakra-ui/react'

function ProfilePost({ img }) {
  const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <>
      <GridItem
        aspectRatio={1 / 1}
        borderRadius={4}
        overflow={"hidden"}
        border={"1px solid"}
        borderColor={"whiteAlpha.300"}
        cursor={"pointer"}
        position={"relative"}
        onClick={onOpen}
      >
        <Flex
          opacity={0}
          _hover={{ opacity: 1 }}
          position={"absolute"}
          bg={"blackAlpha.600"}
          zIndex={1}
          top={0}
          right={0}
          left={0}
          bottom={0}
          justifyContent={"center"}
          alignItems={"center"}>
          <Flex justifyContent={"center"} alignItems={"center"} gap={30} fontSize={20}>
            <Flex justifyContent={"center"} alignItems={"center"} gap={1} >
              <AiFillHeart size={20} />
              <Text fontWeight={"bold"}>7</Text>
            </Flex>
            <Flex justifyContent={"center"} alignItems={"center"} gap={1}>
              <FaComment size={20} />
              <Text fontWeight={"bold"}>7</Text>
            </Flex>
          </Flex>
        </Flex>
        <Image src={img} w={"100%"} h={"100%"} objectFit={"cover"} />
      </GridItem>

      <Modal isOpen={isOpen} onClose={onClose} isCentered={true} size={{base: "xl", md: "2xl"}}>
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton />
          <ModalBody bg={"black"} pb={5}>

            <Flex w={{base: "none", sm: "70%", md: "full"}} mx={"auto"} gap={4}>
              {/* post image */}
              <Box flex={1}
              borderRadius={4}
              overflow={"hidden"}
              borderColor={"whiteAlpha.300"}>
                <Image src={img} alt='Profile-post' />
              </Box>

              {/* ohter things */}
              <Box>
                <Flex flex={1} flexDirection={"column"} px={7} display={{ base: "none", md: "flex" }}>

                  <Flex alignItems={"center"} justifyContent={"space-between"}>
                    <Flex alignItems={"center"} gap={2}>
                      <Avatar src='/profilepic.png' size={"sm"} name='profile-pic'/>
                      <Text fontSize={12} fontWeight={"bold"}>aryan</Text>
                    </Flex>
                    <Box _hover={{ bg: "whiteAlpha.300", color: "red.600" }} p={1} borderRadius={4} ml={16}>
                      <AiFillDelete size={20} cursor={"pointer"}/>
                    </Box>
                  </Flex>

                  <Divider orientation='horizontal' my={4} bg={"gray.500"}/>

                </Flex>
              </Box>
            </Flex>

          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  )
}

export default ProfilePost