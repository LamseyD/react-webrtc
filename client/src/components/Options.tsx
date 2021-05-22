import React, { useContext, useState } from 'react'
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { SocketContext } from './SocketContext';
interface OptionsProps {

}

const Options: React.FC<OptionsProps> = ({ children }) => {
    const { user, callAccepted, name, setName, callEnded, leaveCall, callUser } = useContext(SocketContext);
    const [idToCall, setIdToCall] = useState('');
        return (
            <div>
                Hello Options
                <CopyToClipboard text={user}>

                </CopyToClipboard>
                {children}
            </div>
        );
}

export default Options;