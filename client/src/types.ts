export type CallInfo = {
    isReceivedCall?: boolean,
    from: string,
    name: string,
    signal: string
} | null;

export type SocketContextType = {
    callInfo: CallInfo | null,
    callAccepted: boolean,
    videoRef: VideoRef,
    userVideoRef: VideoRef,
    mediaStream: MediaStream | undefined,
    name: string,
    setName: any,
    callEnded: boolean,
    user: string,
    callUser: any,
    leaveCall: any,
    answerCall: any
};

export type VideoRef = HTMLVideoElement | null;