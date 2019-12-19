import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import SignIn from './components/Auth/SignIn';

const RenderAuthRoutes = () => {
    return (
        <Router>
            <Switch>
                <Route
                    path='/login'
                    exact
                    component={props => <SignIn {...props} />}
                />
                <Route
                    path="*"
                    exact
                    component={props => <App {...props} />}
                />
            </Switch>
        </Router>
    )
};

ReactDOM.render(<RenderAuthRoutes />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
