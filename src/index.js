import React from "react";
import ReactDOM from "react-dom";
import { Provider } from 'react-redux';


import App from "./App.js";
import storeFactory from './createStore';
import 'normalize.css';

const initialState = {
};

const Store = storeFactory(initialState);

const FinalApp = () =>(
    <Provider store={Store}>
        <App />
    </Provider>
)



ReactDOM.render(<FinalApp />, document.getElementById("root"));
