import React, { useContext, useEffect, useState } from 'react';
import { SocketContext } from '../../context';

const ControlMenu = () => {
    const { socket } = useContext(SocketContext);
    const [isToggle, setToggle] = useState(null);

    let interval;

    const clearContextMenu = (e) => e.preventDefault();

    useEffect(() => {
        window.addEventListener( 'contextmenu', clearContextMenu);

        if (isToggle) {
            interval = setInterval(() => socket.send(isToggle), 100);
        }
        return () => {
            clearInterval(interval);
            window.removeEventListener('contextmenu', clearContextMenu);
        }
    }, [isToggle]);

    const onMouseDown = (e, message) => {
        e.preventDefault();

        setToggle(message);
    };

    const onMouseUp = (e) => {
        e.preventDefault();
        setToggle(null);

        clearInterval(interval);
    };

    const renderControlButton = (name) => (
        <div
            className="d-flex col-4"
            onTouchStart={(e) => onMouseDown(e, name)}
            onTouchEnd={(e) => onMouseUp(e)}
            onMouseDown={(e) => onMouseDown(e, name)}
            onMouseUp={(e) => onMouseUp(e)}
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
                    {renderControlButton('forward')}
                </div>
                <div className="row justify-content-center w-100">
                    {renderControlButton('left')}
                    <div className="d-flex col-2 m-0 p-0 align-items-center justify-content-center" />
                    {renderControlButton('right')}
                </div>
                <div className="row justify-content-center w-100">
                    {renderControlButton('backward')}
                </div>
            </div>
        </>
    )
};

export default ControlMenu;
