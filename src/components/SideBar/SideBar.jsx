import { Box, Flex, Link, Tooltip, VStack } from "@chakra-ui/react";
import React from "react";
import { Link as RouterLink } from "react-router-dom";
import { InstagramLogo, InstagramMobileLogo, SearchLogo, NotificationsLogo, CreatePostLogo } from "../../assets/constants";
import { AiFillHome } from "react-icons/ai";
import { Avatar } from "@chakra-ui/react";
import { BiLogOut } from "react-icons/bi";

function SideBar() {
  const sidebarItems = [
    {
      icon: <AiFillHome size={25} />,
      text: "Home",
      link: "/",
    },
    {
      icon: <SearchLogo />,
      text: "Search",
    },
    {
      icon: <NotificationsLogo />,
      text: "Notification",
    },
    {
      icon: <CreatePostLogo />,
      text: "Create",
    },
    {
      icon: <Avatar size="sm" name="User" src="/profilepic.png" />,
      text: "Profile",
      link: "/User",
    },
  ];
  return (
    <Box
      height={"100vh"}
      borderRight={"1px solid"}
      borderColor={"whiteAlpha.300"}
      position={"sticky"}
      top={0}
      left={0}
      py={8}
      px={{ base: 2, md: 4 }}
    >
      <Flex w="full" h={"full"} direction={"column"} gap={10}>
        <Link
          as={RouterLink}
          to={"/"}
          pl={2}
          display={{ base: "none", md: "block" }}
          cursor={"pointer"}
        >
          <InstagramLogo />
        </Link>
        <Link
          as={RouterLink}
          to={"/"}
          display={{ base: "block", md: "none" }}
          cursor={"pointer"}
          p={2}
          borderRadius={6}
          _hover={{ bg: "whiteAlpha.500" }}
          w={10}
        >
          <InstagramMobileLogo />
        </Link>
        <Flex direction={"column"} cursor={"pointer"} gap={3}>
          {sidebarItems.map((item, index) => (
            <Tooltip
              key={index}
              hasArrow
              label={item.text}
              placement="right"
              ml={1}
              openDelay={500}
              display={{ base: "block", md: "none" }}
            >
              <Link
                display={"flex"}
                as={RouterLink}
                to={item.link || null}
                alignItems={"center"}
                gap={4}
                _hover={{ bg: "whiteAlpha.400" }}
                borderRadius={6}
                p={2}
                w={{ base: 10, md: "full" }}
                justifyContent={{ base: "center", md: "flex-start" }}
              >
                {item.icon}
                <Box display={{ base: "none", md: "block" }}>{item.text}</Box>
              </Link>
            </Tooltip>
          ))}
        </Flex>
        <Tooltip
            hasArrow
            label={"Logout"}
            placement="right"
            ml={1}
            openDelay={500}
            display={{ base: "block", md: "none" }}
          >
            <Link
              display={"flex"}
              as={RouterLink}
              to={"/auth"}
              alignItems={"center"}
              gap={4}
              _hover={{ bg: "whiteAlpha.400" }}
              borderRadius={6}
              p={2}
              mt={"auto"}
              w={{ base: 10, md: "full" }}
              justifyContent={{ base: "center", md: "flex-start" }}
            >
              <BiLogOut size={25} />
              <Box display={{ base: "none", md: "block" }}>Logout</Box>
            </Link>
          </Tooltip>
      </Flex>
    </Box>
  );
}

export default SideBar;
