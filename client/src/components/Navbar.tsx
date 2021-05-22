import { Box, Flex, Link, Text } from '@chakra-ui/react';
import React from 'react'

interface NavbarProps {

}

const Navbar: React.FC<NavbarProps> = () => {
    //data is loading
    return (
        <Flex zIndex={5} position="sticky" top={0} bg='#7289da' p={4} align="center">
            <Link href="https://www.lamsey.dev">
                <Text  fontSize={24} color="white">
                    Home
                </Text>
            </Link>
            <Box ml={"auto"}>
                <Text fontSize={24} color="white">
                    Totally Not Zoom
                </Text>
            </Box>
        </Flex>

    );
}

export default Navbar;