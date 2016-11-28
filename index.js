import React from "react";
import ReactDOM from "react-dom";
import { Router,Route,hashHistory } from "react-router";

import { Provider } from "react-redux";

import App from "./container/App.js";

import store from "./store";


const ROOT_DATA = store.getState();

//<Router history={hashHistory}>
//	<Route path="/" component={App}/>
//</Router>
ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById("root")
)
