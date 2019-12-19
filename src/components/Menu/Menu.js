import React, { useContext } from 'react';
import { SocketContext } from '../../context';

const buttons = [
    {
        url: 'Ascend/ascend@3x.png',
        name: 'ascend',
        value: 0,
    },
    {
        url: 'Bend/bendright@3x.png',
        name: 'bendright',
        value: 0,
    },
    {
        url: 'Cross/crossright@3x.png',
        name: 'crossright',
        value: 0,
    },
    {
        url: 'Flap/flapfront@3x.png',
        name: 'flapfront',
        value: 0,
    },
    {
        url: 'Updown/updown@3x.png',
        name: 'updown',
        value: 0,
    },
    {
        url: 'Ultrasound/ultrasound@3x.png',
        name: 'ultrasound',
        value: 0,
    },
    {
        url: 'Tiptoe/tiptoe@3x.png',
        name: 'tiptoe',
        value: 0,
    },
    {
        url: 'Swing/swing@3x.png',
        name: 'swing',
        value: 0,
    },
    {
        url: 'Jitter/jitter@3x.png',
        name: 'jitter',
        value: 0,
    },
    {
        url: 'Moonwalk/moonwalkleft@3x.png',
        name: 'moonwalkleft',
        value: 0,
    },
    {
        url: 'Moonwalk/moonwalkright@3x.png',
        name: 'moonwalkright',
        value: 0,
    },
    {
        url: 'Moves/moves@3x.png',
        name: 'moves',
        value: 0,
    },
    {
        url: 'Shake/shakeleft@3x.png',
        name: 'shakeleft',
        value: 0,
    },
    {
        url: 'Shake/shakeright@3x.png',
        name: 'shakeright',
        value: 0,
    },
    {
        url: 'Help/help@3x.png',
        name: 'help',
        value: 0,
    },
];

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
                        onClick={() => cb(name)}
                        className="d-flex col-2 m-1 p-1"
                        style={{
                            border: '2px solid',
                            borderRadius: '15%',
                        }}
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
        </>
    )
};

export default Menu;
