import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom'

// import App from './App';
import Dashboard from './views/Dashboard'
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import configureStore from './store';

ReactDOM.render(
    <Provider store = {configureStore()}>
        {/* <App /> */}
        <BrowserRouter>
            <Switch>
            <Route exact path="/" render={() => <Dashboard/>} />
            <Route path="/orders" render={() => <div>orders</div>} />
            <Route path="/customers" render={() => <div>customers</div>} />
            <Route path="/reports" render={() => <div>reports</div>} />
            <Route render={() => <Dashboard/>}/>
            </Switch>
        </BrowserRouter>
    </Provider>
, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
