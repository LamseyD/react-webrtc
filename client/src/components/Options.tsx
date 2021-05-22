import React from 'react'
interface OptionsProps {

}

const Options: React.FC<OptionsProps> = ({ children }) => {
    //const { user, callAccepted, name, setName, callEnded, leaveCall, callUser } = useContext(SocketContext);
    //const [idToCall, setIdToCall] = useState('');
        return (
            <div>
                Hello Options
                {children}
            </div>
        );
}

export default Options;