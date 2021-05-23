export type CallInfo = {
    isReceivedCall?: boolean,
    from: string,
    name: string,
    signal: string
} | null;

export type SocketContextType = {
    callInfo: CallInfo | null,
    callAccepted: boolean,
    videoRef: React.MutableRefObject<HTMLVideoElement | undefined> | undefined,
    userVideoRef: React.MutableRefObject<HTMLVideoElement | undefined> | undefined,
    mediaStream: MediaStream | undefined,
    name: string,
    setName: any,
    callEnded: boolean,
    user: string,
    callUser: any,
    leaveCall: any,
    answerCall: any
};
