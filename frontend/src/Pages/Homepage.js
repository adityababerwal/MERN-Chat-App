import React from 'react';
import { Container, Box, Text } from '@chakra-ui/react';
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react';
import Login from '../components/Authentication/Login';
import Signup from '../components/Authentication/Signup';
import { useEffect } from "react";
import { useHistory } from "react-router";

const Homepage = () =>{
  const history = useHistory();

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("userInfo"));

    if (user) history.push("/chats");
  }, [history]);

  return (
      <Container maxW='xl' centerContent>
        <Box
          d="flex"
          justifyContent="center"
          p={3}
          bg={'transparent'}
          w="100%"
          m="40px 0 15px 0"
          borderRadius="lg"
        >
          <Text fontSize="3xl" fontFamily="JetBrains Mono" color="white" align="center">Chat Room</Text>
        </Box>

        <Box bg="white" w="100%" p={5} borderRadius="lg">
          <Tabs variant='soft-rounded'>
            <TabList>
              <Tab w="50%">Login</Tab>
              <Tab w="50%">Sign Up</Tab>
            </TabList>

            <TabPanels>

              <TabPanel>
                <Login />
              </TabPanel>

              <TabPanel>
                <Signup />
              </TabPanel>

            </TabPanels>

          </Tabs>
        </Box>

      </Container>
  )
}

export default Homepage
