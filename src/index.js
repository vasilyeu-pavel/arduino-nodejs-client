import React from 'react';
import ReactDOM from 'react-dom';

import 'bootstrap/dist/css/bootstrap.min.css';

import Application from './components/Application/Application';
import * as serviceWorker from './serviceWorker';

import './App.css';

const RenderAuthRoutes = () => <Application />;

ReactDOM.render(<RenderAuthRoutes />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
