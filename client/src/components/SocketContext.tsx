import React, { createContext, useState, useRef, useEffect } from 'react'
import { io } from 'socket.io-client';
import Peer from 'simple-peer';
import { SocketContextType, CallInfo } from '../types';

const SocketContext = createContext<SocketContextType>({
    callInfo: null,
    callAccepted: false,
    videoRef: undefined,
    userVideoRef: undefined,
    mediaStream: undefined,
    name: '',
    setName: () => {},
    callEnded: false,
    user: '',
    callUser: () => {},
    leaveCall: () => {},
    answerCall: () => {}
});

const socket = io('http://localhost:4000');

const SocketProvider: React.FC = ({ children }: any) => {
    const [mediaStream, setMediaStream] = useState<MediaStream | undefined>(undefined);
    const [user, setUser] = useState<string>('');
    const [callInfo, setCallInfo] = useState<CallInfo>(null);
    const [callAccepted, setCallAccepted] = useState<boolean>(false)
    const [callEnded, setCallEnded] = useState<boolean>(false);
    const [name, setName] = useState<string>('');
    const videoRef = useRef<HTMLVideoElement>();
    const userVideoRef = useRef<HTMLVideoElement>();
    const connectionRef = useRef<any>();

    useEffect(() => {
        async function enableStream() {
            try {
                const stream = await navigator.mediaDevices.getUserMedia({
                    video: true,
                    audio: true
                });
                setMediaStream(stream);
                if (videoRef && videoRef.current) {
                    videoRef.current.srcObject = stream;
                }
                socket.on('ME', (id) => setUser(id));
                socket.on('CALL_USER', ({ from, name: callerName, signal }) => {
                    setCallInfo({ isReceivedCall: true, from, name: callerName, signal })
                })
            } catch (err) {
                console.log("error: Failing to request media devices. \n", err)
            }
        }
        if (!mediaStream)
            enableStream();
        
        //! Possible clean up function
        //  return function cleanup() {
        //      mediaStream!.getTracks().forEach(track => {
        //          track.stop();
        //      });
        //  }
    });

    const answerCall = () => {
        setCallAccepted(true);

        const peer = new Peer({ initiator: false, trickle: false, stream: mediaStream });
        peer.on('signal', (data: any) => {
            socket.emit('ANSWER_CALL', { signal: data, to: callInfo?.from });
        })

        peer.on('stream', (currentStream: any) => {
            if (userVideoRef && userVideoRef.current) {
                userVideoRef.current.srcObject = currentStream;
            }
        })

        peer.signal(callInfo!.signal);

        connectionRef.current = peer;
    }

    const callUser = (id: string) => {
        const peer = new Peer({ initiator: false, trickle: false, stream: mediaStream });

        peer.on('signal', (data: any) => {
            console.log("SIGNAL");
            socket.emit('CALL_USER', { userToCall: id, signalData: data, from: user, name });
        })

        peer.on('stream', (currentStream: any) => {
            if (userVideoRef && userVideoRef.current) {
                userVideoRef.current.srcObject = currentStream;
            }
        })

        socket.on('CALL_ACCEPTED', (signal) => {
            setCallAccepted(true);
            peer.signal(signal);
        })

        connectionRef.current = peer
    }

    const leaveCall = () => {
        setCallEnded(true);
        connectionRef!.current!.destroy();
        window.location.reload();
    }

    return (
        <SocketContext.Provider value={{
            callInfo,
            callAccepted,
            videoRef: videoRef,
            userVideoRef: userVideoRef,
            mediaStream,
            name,
            setName,
            callEnded,
            user,
            callUser,
            leaveCall,
            answerCall
        }}>
            {children}
        </SocketContext.Provider>
    )
}

export { SocketProvider, SocketContext }