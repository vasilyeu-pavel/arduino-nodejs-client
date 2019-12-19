import React, { useContext } from 'react';
import { UserContext } from '../../context';

const Header = () => {
    const { user } = useContext(UserContext);

    return (
        <div
            className="row m-0 p-3"
            style={{
                background: '#3d33cd',
                color: '#ffffff',
                fontWeight: '600',
                fontSize: '1rem',
                lineHeight: 1.5
            }}
        >
            <div className="col ml-1 p-0 pl-3">
                {user.email}
            </div>
            <div
                className=""
                style={{
                    width: '30px',
                    position: 'absolute',
                    zIndex: 1000,
                    right: '20px',
                }}
            >
                <img
                    className="w-100"
                    src={user.picture}
                    style={{ borderRadius: '50%' }}
                />
            </div>
        </div>
    );
}

export default Header;
