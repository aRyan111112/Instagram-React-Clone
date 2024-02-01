import { Box, Flex, Spinner } from "@chakra-ui/react";
import React from "react";
import { useLocation } from "react-router-dom";
import SideBar from "../../components/SideBar/SideBar";
import { useAuthState } from 'react-firebase-hooks/auth'
import { auth } from "../../firebase/firebase";
import Navbar from "../../components/Navbar/Navbar"

function PageLayout({ children }) {

  const {pathname} = useLocation();
  const [user, loading, error] = useAuthState(auth)
  const canRenderSidebar = pathname !== "/auth" && user
  const canRenderNavbar = !user && pathname !== "/auth" && !loading

  // if the user is not logged in and also not authenticated then we are going to show the loading spinner
  const checkingUserISAuth = !user && loading
  if(checkingUserISAuth) return <PageLayoutSpinner/>

  return (
    <Flex flexDirection={canRenderNavbar ? "column" : "row"}>
      {/* Side Bar */}
      {canRenderSidebar ? (
        <Box w={{ base: "70px", md: "240px" }}>
          <SideBar />
        </Box>
      ) : null}

      {canRenderNavbar ? <Navbar/> : null}

      {/* THe Page Content */}
      <Box flex={1} w={{ base: "calc(100% - 70px)", md: "calc(100% - 240px)" }} mx={"auto"}>
        {children}
      </Box>
    </Flex>
  );
}

export default PageLayout;

const PageLayoutSpinner = () => {
	return (
		<Flex flexDir='column' h='100vh' alignItems='center' justifyContent='center'>
			<Spinner size='xl' />
		</Flex>
	);
};
