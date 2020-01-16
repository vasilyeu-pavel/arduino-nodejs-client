import React, { useState, useContext } from 'react';
import { audioButtons } from '../Menu/data';
import { SocketContext } from '../../context';

const VoiceMenu = () => {
    const [isOpen, setOpen] = useState(false);
    const { socket } = useContext(SocketContext);

    const onClick = (name) => {
        window.navigator.vibrate(100);
        socket.send(name);
    };

    const handleOpen = () => setOpen(!isOpen);

    return (
        <>
            <div className="row m-1 w-100" onClick={handleOpen}>
                <div className="col">
                    Voice
                </div>
            </div>
            {isOpen ? (
                <div className="row justify-content-center m-1 py-3 w-100" style={{ border: '2px solid', borderRadius: '5px' }}>
                    {audioButtons.map(({ url, cb = onClick, name, value }, i) => (
                        <div
                            key={i}
                            onClick={() => cb(value)}
                            className="d-flex col-2 m-1 p-1"
                            style={{
                                border: '2px solid',
                                borderRadius: '15%',
                            }}
                        >
                            <img
                                className="w-100"
                                alt={url}
                                src={require(`../../img/Buttons/Sing/${url}`)}
                            />
                        </div>
                    ))}
                </div>
            ) : null}
        </>
    )
};

export default VoiceMenu;
