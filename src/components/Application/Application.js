import React, { useEffect, useState } from 'react';
import Menu from '../Menu/Menu';
import ControlMenu from '../ControlMenu/ControlMenu';
import { SocketContext } from '../../context';
import config from '../../config';
import Switch from '../Switch/Switch';
import HeaderNavigation from '../../layouts';
import Preloader from '../Preloader/Preloader';

const Application = () => {
    const [socket, setSocket] = useState(undefined);

    let connectInterval;

    const check = () => (!socket || socket.readyState === 'WebSocket.CLOSED') && connect();

    const connect = () => {
        const socket = new WebSocket(`${config.socketUrl}/socket`);

        socket.onopen = () => {
            setSocket(socket);
        };

        socket.onerror = err => {
            console.error(`Socket encountered error: ${err.message} Closing socket`);

            socket.close();

            setSocket(null);
        };

        socket.onclose = () => {
            console.log('Disconnected');
            socket.close();

            connectInterval = setTimeout(check, 1000); //call check function after timeout

            setSocket(null);
        }
    };

    useEffect(() => {
        connect();

        return () => clearInterval(connectInterval);
    }, []);

    if (!socket) return (
        <>
            <div className="p-3 mb-2 text-white">Un connected to server by websocket connection</div>
            <Preloader />
        </>
    );

    return (
        <SocketContext.Provider value={{ socket }}>
            <HeaderNavigation>
                <>
                    <Switch />
                    <ControlMenu />
                    <Menu />
                </>
            </HeaderNavigation>
        </SocketContext.Provider>
    );
};

export default Application;

