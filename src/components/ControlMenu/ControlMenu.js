import React, { useContext, useEffect, useState } from 'react';
import { SocketContext } from '../../context';

const ControlMenu = () => {
    const { socket } = useContext(SocketContext);
    const [isToggle, setToggle] = useState(0);

    let interval;

    const clearContextMenu = (e) => e.preventDefault();

    useEffect(() => {
        window.addEventListener( 'contextmenu', clearContextMenu);

        // if (isToggle) {
        //     interval = setInterval(() => socket.send(isToggle), 1000);
        // }
        return () => {
            clearInterval(interval);
            window.removeEventListener('contextmenu', clearContextMenu);
        }
    }, [isToggle]);

    const onMouseDown = (e, message) => {
        e.preventDefault();
        socket.send('00');
        setToggle(message);
    };

    const onMouseUp = (e) => {
        e.preventDefault();
        setToggle(null);
        socket.send('00');
        clearInterval(interval);
    };

    const onClick = (e, value) => {
        e.preventDefault();
        window.navigator.vibrate(100);
        socket.send(value)
    };

    const renderControlButton = (name, value) => (
        <div
            className="d-flex col-4"
            // onTouchStart={(e) => onMouseDown(e, value)}
            // onTouchEnd={(e) => onMouseUp(e)}
            // onMouseDown={(e) => onMouseDown(e, value)}
            // onMouseUp={(e) => onMouseUp(e)}
            onClick={(e) => onClick(e, value)}
        >
            <img
                className="w-100"
                src={require(`../../img/Controls/${isToggle === name ? 'grey/' : ''}${name}@3x.png`)}
            />
        </div>
    );

    return (
        <>
            <div className="row m-1 w-100">
                <div className="col">
                    Control Menu
                </div>
            </div>
            <div className="row m-1 w-100 justify-content-center" style={{ touchAction: 'none' }}>
                <div className="row justify-content-center w-100">
                    {renderControlButton('forward', '01')}
                </div>
                <div className="row justify-content-center w-100">
                    {renderControlButton('left', '03')}
                    <div className="d-flex col-2 m-0 p-0 align-items-center justify-content-center">
                        <div
                            className="d-flex col-4 w-100 h-100 align-items-center justify-content-center"
                            // onTouchStart={(e) => onMouseDown(e, '00')}
                            // onTouchEnd={(e) => onMouseUp(e)}
                            // onMouseDown={(e) => onMouseDown(e, '00')}
                            // onMouseUp={(e) => onMouseUp(e)}
                            onClick={(e) => onClick(e, '00')}
                        >
                            <img
                                className="d-flex"
                                style={{ minWidth: '100px' }}
                                src={require(`../../img/Controls/stop@3x.png`)}
                            />
                        </div>
                    </div>
                    {renderControlButton('right', '04')}
                </div>
                <div className="row justify-content-center w-100">
                    {renderControlButton('backward', '02')}
                </div>
            </div>
        </>
    )
};

export default ControlMenu;
