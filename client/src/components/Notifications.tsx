import React, { useContext } from 'react'
import { SocketContext } from './SocketContext';
import { Button, Text, Box } from '@chakra-ui/react';

interface NotificationsProps {

}

const Notifications: React.FC<NotificationsProps> = () => {
    const { answerCall, callInfo, callAccepted } = useContext(SocketContext);
    return (<div>
        <Text textColor="white"> Hello World </Text>
        { callInfo && !callAccepted && (
            <Box padding="24px 40px 40px 40px" bg="#7289da" borderRadius={24} borderWidth={4} borderColor="white">
                <Text textColor="white"> {callInfo.name} is Calling! </Text>
                <Button onClick={answerCall}>
                    Answer
                </Button>
            </Box>

        )}
    </div>);
}

export default Notifications;