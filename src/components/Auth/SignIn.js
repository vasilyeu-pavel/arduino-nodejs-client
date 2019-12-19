import React, { useEffect } from 'react';

const SignIn = ({ history, location }) => {
    useEffect(() => {
        const urlParams = new URLSearchParams(location.search);
        const access_token = urlParams.get('access_token');

        localStorage.setItem('access_token', access_token);

        if (access_token) {
           history.push('/');
        }
    }, []);

    return null;
};

export default SignIn;
