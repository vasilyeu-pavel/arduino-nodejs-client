import React, { useState, useContext, useEffect } from 'react';
import ReactSwitch from 'react-switch';

import { SocketContext } from '../../context';
import config from '../../config';

const Switch = () => {
    const { socket } = useContext(SocketContext);
    const [status, setStatus] = useState(false);

    useEffect(() => {
        (async () => {
            const response = await fetch(`${config.url}/ledState`);
            const ledStatus = await response.text();

            setStatus(!!+ledStatus);
        })();
        if (socket) {
            socket.onmessage = ({ data }) => {
                if (+data === 0 || +data === 1) {
                    setStatus(!!+data);
                }
            };
        }
    }, []);

    if (!socket) return null;

    const sendMessage = (checked) => {
        setStatus(checked);

        socket.send(`${+checked}`);
    };

    return (
        <div style={{
            position: 'absolute',
            right: '15px',
            zIndex: 1000,
        }}>
            <ReactSwitch
                checked={status}
                onChange={sendMessage}
            />
        </div>

    );
};

export default Switch;

