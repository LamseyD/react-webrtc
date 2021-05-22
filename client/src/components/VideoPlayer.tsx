import { Box, Flex, Text } from '@chakra-ui/react';
import React, { useContext } from 'react';
import { SocketContext } from '../components/SocketContext';

interface VideoPlayerProps {

}

const VideoPlayer: React.FC<VideoPlayerProps> = () => {
    //@ts-ignore
    const { name, callAccepted, videoRef, userVideoRef, callEnded, mediaStream, callInfo } = useContext(SocketContext);
    
    return (
        <Flex justifyContent="space-around" padding={40}>
            {mediaStream && (
                <Box bg="white">
                    <Text> {name || 'Name'} </Text>
                    {
                    //@ts-ignore
                    <video playsInline muted autoPlay ref={videoRef} style={{width: 550, height: 550}} />
                    }
                </Box>
            )}
            {callAccepted && !callEnded && (
                <Box bg="white">
                    <Text> {callInfo?.name || 'Name2'}</Text>
                    {
                    //@ts-ignore    
                    <video playsInline autoPlay ref={userVideoRef} style={{width: 550, height: 550}} />
                    }
                </Box>
            )}
        </Flex>
    );
}

export default VideoPlayer