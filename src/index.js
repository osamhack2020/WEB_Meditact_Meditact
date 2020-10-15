import React from 'react';
import ReactDOM from 'react-dom';
import Root from './client/Root';
import 'semantic-ui-css/semantic.min.css'
import { createStore } from 'redux';
import { Provider  } from 'react-redux';
import MeditactReducers from "./reducers"
import { composeWithDevTools } from 'redux-devtools-extension'; // 리덕스 개발자 도구

const store = createStore(MeditactReducers, composeWithDevTools());
const appElement = document.getElementById('root');

ReactDOM.render(
    <Provider store = {store}>
        <Root />
    </Provider>,
    appElement
);