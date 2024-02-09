import { Box, Button, Flex, FormControl, FormLabel, Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay, Tooltip } from "@chakra-ui/react";
import { SearchLogo } from "../../assets/constants";
import { useDisclosure } from "@chakra-ui/react";

const Search = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();

	return (
		<>
			<Tooltip
				hasArrow
				label={"Search"}
				placement='right'
				ml={1}
				openDelay={500}
				display={{ base: "block", md: "none" }}
			>
				<Flex
					alignItems={"center"}
					gap={4}
					_hover={{ bg: "whiteAlpha.400" }}
					borderRadius={6}
					p={2}
					w={{ base: 10, md: "full" }}
					justifyContent={{ base: "center", md: "flex-start" }}
                    onClick={onOpen}
				>
					<SearchLogo />
					<Box display={{ base: "none", md: "block" }}>Search</Box>
				</Flex>
			</Tooltip>

            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent bg={"black"} border={"1px solid gray"} maxW={"400px"}>
                    <ModalHeader>Search</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody pb={6}>
                        <form>
                            <FormControl>
                                <FormLabel>Username</FormLabel>
                                <input placeholder="Username"/>
                            </FormControl>
                            <Flex w={"full"} justifyContent={"flex-end"}>
                                <Button type="submit" ml={"auto"} size={"small"} my={4}>
                                    Search
                                </Button>
                            </Flex>
                        </form>
                    </ModalBody>
                </ModalContent>
            </Modal>
		</>
	);
};

export default Search;