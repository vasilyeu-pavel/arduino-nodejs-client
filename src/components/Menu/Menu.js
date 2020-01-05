import React, { useContext } from 'react';
import { SocketContext } from '../../context';
import { buttons, audioButtons } from './data';

const Menu = () => {
    const { socket } = useContext(SocketContext);
    const onClick = (name) => socket.send(name);

    return (
        <>
            <div className="row m-1 w-100">
                <div className="col">
                    Menu
                </div>
            </div>
            <div
                className="row justify-content-center m-1 py-3 w-100"
                style={{
                    border: '2px solid',
                    borderRadius: '5px'
                }}
            >
                {buttons.map(({ url, cb = onClick, name, value }, i) => (
                    <div
                        key={i}
                        onClick={() => cb(value)}
                        className="d-flex col-2 m-1 p-1"
                        style={{ border: '2px solid', borderRadius: '15%' }}
                    >
                        <img
                            className="w-100"
                            alt={url}
                            src={require(`../../img/Buttons/${url}`)}
                        />
                    </div>
                ))
                }
            </div>
            <div className="row m-1 w-100">
                <div className="col">
                    Voice
                </div>
            </div>
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
                ))
                }
            </div>
        </>
    )
};

export default Menu;
