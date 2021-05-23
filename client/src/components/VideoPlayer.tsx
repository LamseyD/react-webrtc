import { Box, Flex, Text } from '@chakra-ui/react';
import React, { useContext } from 'react';
import { SocketContext } from '../components/SocketContext';

interface VideoPlayerProps {

}

const VideoPlayer: React.FC<VideoPlayerProps> = () => {
    //@ts-ignore
    const { name, callAccepted, videoRef, userVideoRef, callEnded, mediaStream, callInfo } = useContext(SocketContext);

    console.log(videoRef);
    return (
        <Flex justifyContent="space-around" padding={40}>
            {mediaStream && (
                <Box>
                    {
                        //@ts-ignore
                        <video playsInline muted autoPlay ref={videoRef} style={{ minWidth: 500 }} />
                    }
                    <Text textColor="white" textAlign="center"> {name || 'You'} </Text>
                </Box>
            )}
            {callAccepted && !callEnded && (
                <Box>
                    {
                        //@ts-ignore    
                        <video playsInline autoPlay ref={userVideoRef} style={{ minWidth: 500 }} />
                    }
                    <Text textColor="white" textAlign="center"> {callInfo?.name || 'User'}</Text>
                </Box>
            )}
        </Flex>
    );
}

export default VideoPlayer