import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { UserContext } from './context';
import Application from './components/Application/Application';

import { isVisiblePage } from './helpers/isVisiblePage';
import { isTokenLive } from './helpers/isTokenLive';

import './App.css';
import Auth from './components/Auth/Auth';
import Preloader from './components/Preloader/Preloader';

isVisiblePage();

const App = () => {
    const [user, setUser] = useState();

    const setUserCb = (userInfo) => setUser(userInfo);
    const cbIsTokenDied = () => setUser(null);

    useEffect(() => {
        isTokenLive(setUserCb, cbIsTokenDied);
    }, []);

    if (user === undefined) return <Preloader/>;

    if (user === null) return <Auth />;

    return (
        <UserContext.Provider value={{ user }}>
            <Application />
        </UserContext.Provider>
    );
};

export default App;
