import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import App from './App';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware, compose} from "redux";
import thunk from 'redux-thunk';
import RootReducer from "./reducers/RootReducer";

const store = createStore(RootReducer, compose(applyMiddleware(thunk)));

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, document.getElementById('root'));
