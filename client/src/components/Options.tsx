import { CloseIcon, LinkIcon, PhoneIcon } from '@chakra-ui/icons';
import { Flex, Grid, GridItem } from '@chakra-ui/layout';
import { Box, FormControl, FormLabel, IconButton, Input, InputGroup, InputRightElement } from '@chakra-ui/react';
import React, { useContext } from 'react'
import { useState } from 'react';
import CopyToClipboard from 'react-copy-to-clipboard';
import { SocketContext } from './SocketContext';
interface OptionsProps {

}

const Options: React.FC<OptionsProps> = ({ children }) => {
    const { user, callAccepted, name, setName, callEnded, leaveCall, callUser } = useContext(SocketContext);
    const [idToCall, setIdToCall] = useState('');
    console.log(user);
    return (
        <Flex justifyContent="center" paddingBottom={12}>
            <Grid templateColumns="repeat(3, 1fr)" gap={12}>
                <GridItem padding="24px 40px 40px 40px" bg="#7289da" borderRadius={24} borderWidth={4} borderColor="white">
                    <FormControl>
                        <FormLabel fontSize={24} color="white" textAlign="center">NAME</FormLabel>
                        <InputGroup>
                            <Input focusBorderColor="white" variant="filled" label="Name" value={name} onChange={(e: React.FormEvent<HTMLInputElement>) => setName(e.currentTarget.value)} />
                            <InputRightElement children={
                                <CopyToClipboard text={user}>
                                    <IconButton aria-label="IDLabel" icon={<LinkIcon fontSize="large" />}>
                                        Copy Your ID
                                    </IconButton>
                                </CopyToClipboard>
                            } />
                        </InputGroup>
                    </FormControl>
                </GridItem>
                <GridItem padding="24px 40px 40px 40px" bg="#7289da" borderRadius={24} borderWidth={4} borderColor="white">
                    <FormControl>
                        <FormLabel fontSize={24} textAlign="center" color="white">MAKE A CALL</FormLabel>
                        <InputGroup>
                            <Input focusBorderColor="white" variant="filled" label="IDtocall" value={idToCall} onChange={(e: React.FormEvent<HTMLInputElement>) => setIdToCall(e.currentTarget.value)} />
                            <InputRightElement children=
                                {callAccepted && !callEnded ? (
                                    <IconButton aria-label="HangUpLabel" icon={<CloseIcon fontSize="large" />} onClick={leaveCall}>
                                        Hang Up
                                    </IconButton>
                                ) : (
                                    <IconButton aria-label="CallLabel" icon={<PhoneIcon fontSize="large" />} onClick={() => callUser(idToCall)}>
                                        Call
                                    </IconButton>
                                )}
                            />
                        </InputGroup>
                    </FormControl>
                </GridItem>
                <GridItem>
                    { children}
                </GridItem>
            </Grid>
            <Box>
            </Box>

        </Flex>
    );
}

export default Options;