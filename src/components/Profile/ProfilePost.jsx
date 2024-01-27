import { Avatar, Flex, GridItem, Image, Text, useDisclosure } from '@chakra-ui/react'
import React from 'react'
import { AiFillHeart } from "react-icons/ai";
import { FaComment } from "react-icons/fa"
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

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton />
          <ModalBody bg={"black"}>

            <Flex>
              <Flex flex={1.5}><Image src={img} alt='Profile-post' /></Flex>

              {/* ohter things */}
              <Flex flex={1}>
                <Avatar src='/profilepic.png' size={"sm"} />
                <Text fontSize={12} fontWeight={"bold"}>aryan</Text>
              </Flex>
            </Flex>

          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  )
}

export default ProfilePost