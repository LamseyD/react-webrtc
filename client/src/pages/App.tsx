import React from 'react';
import { ChakraProvider, Flex } from "@chakra-ui/react"
import Navbar from '../components/Navbar';
import VideoPlayer from '../components/VideoPlayer';
import Options from '../components/Options';
import Notifications from '../components/Notifications';


const App: React.FC = () => {
  return (
    <ChakraProvider>
      <Flex bg="#1c1c1e" flexDirection="column" height="100vh">
        <Navbar />
        <Flex flexDirection="column">
          <VideoPlayer />
          <Options>
            <Notifications />
          </Options>
        </Flex>
      </Flex>
    </ChakraProvider>
  );
}

export default App;
