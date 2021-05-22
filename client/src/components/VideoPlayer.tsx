import { Box, Grid, Text } from '@chakra-ui/react';
import React, { useContext } from 'react';
import { SocketContext } from '../components/SocketContext';

interface VideoPlayerProps {

}

const VideoPlayer: React.FC<VideoPlayerProps> = () => {
    const { name, callAccepted, videoRef, userVideoRef, callEnded, mediaStream, callInfo } = useContext(SocketContext);
    
    return (
        <Grid>
            {mediaStream && (
                <Box>
                    <Text> {name || 'Name'} </Text>
                    {
                    //@ts-ignore
                    <video playsInline muted autoPlay ref={videoRef} />
                    }
                </Box>
            )}
            {callAccepted && !callEnded && callInfo && (
                <Box>
                    <Text> {callInfo.name || 'Name'}</Text>
                    {
                    //@ts-ignore    
                    <video playsInline autoPlay ref={userVideoRef} />
                    }
                </Box>
            )}
        </Grid>
    );
}

export default VideoPlayer