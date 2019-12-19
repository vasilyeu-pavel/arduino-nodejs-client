import React from 'react';
import config from '../../config';

const Auth = () => {
    const singInTOGoogle = () => window.location.href = `${config.url}/auth`;

    return (
        <div className="row justify-content-center mt-3 align-items-center">
            <div className="col d-flex justify-content-center">
                <button
                    type="button"
                    className="btn btn-secondary"
                    onClick={singInTOGoogle}
                >
                    Sign In with Google
                </button>
            </div>
        </div>
    )
};

export default Auth;
