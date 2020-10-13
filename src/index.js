import React from 'react';
import ReactDOM from 'react-dom';
import Root from './client/Root';
import 'semantic-ui-css/semantic.min.css'
import { createStore } from 'redux';
import { Provider  } from 'react-redux';
import MeditactReducers from "./reducers"

const store = createStore(MeditactReducers);
const appElement = document.getElementById('root');

ReactDOM.render(
    <Provider store = {store}>
        <Root />
    </Provider>,
    appElement
);