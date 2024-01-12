import { Box, Flex } from "@chakra-ui/react";
import React from "react";
import { useLocation } from "react-router-dom";
import SideBar from "../../components/SideBar/SideBar";

function PageLayout({ children }) {
  const pathName = useLocation();

  return (
    <Flex>
      {/* Side Bar */}
      {pathName.pathname !== "/auth" ? (
        <Box w={{ base: "70px", md: "240px" }}>
          <SideBar />
        </Box>
      ) : null}

      {/* THe Page Content */}
      <Box flex={1} w={{ base: "calc(100% - 70px)", md: "calc(100% - 240px)" }}>
        {children}
      </Box>
    </Flex>
  );
}

export default PageLayout;
