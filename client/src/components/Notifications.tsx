import React, { useContext } from 'react'
import { SocketContext } from './SocketContext';
import { Button, Text, Box } from '@chakra-ui/react';

interface NotificationsProps {

}

const Notifications: React.FC<NotificationsProps> = () => {
    const { answerCall, callInfo, callAccepted } = useContext(SocketContext);
    return (<div>
        { callInfo?.isReceivedCall && !callAccepted && (
            <Box>
                <Text> {callInfo.name} is Calling! </Text>
                <Button onClick={answerCall}>
                    Answer
                </Button>
            </Box>

        )}
    </div>);
}

export default Notifications;