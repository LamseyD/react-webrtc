import { Box, Flex, Link, Text } from '@chakra-ui/react';
import React from 'react'

interface NavbarProps {

}

const Navbar: React.FC<NavbarProps> = () => {
    //data is loading
    return (
        <Flex flexShrink={0} zIndex={5} position="sticky" bg='#7289da' p={4} align="center" flexDirection="column">
            <Box mt={10}>
                <Text fontSize={40} color="white" overflowWrap="normal">
                    Lam's Personal Room
                </Text>
                <Text color="white" textAlign="center"> A quick Video chat app. </Text>
            </Box>

            <Box mt={10}>
                <Text fontSize={24} color="white">
                    Technology Used
                </Text>
                <Text paddingTop={4} textAlign="center" color="white">
                    React.JS - ChakraUI
                    <br/>
                    TypeScript
                    <br/>
                    Socket.IO
                </Text>
            </Box>
            <Box mt="auto" mb={10}>           
            <Link href="https://www.lamsey.dev">
                <Box>
                    <Text fontSize={24} color="white">
                        Back to Lamsey
                    </Text>
                </Box>
            </Link> 
            </Box>
        </Flex>

    );
}

export default Navbar;