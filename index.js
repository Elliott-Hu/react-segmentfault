import React from "react";
import ReactDOM from "react-dom";

import { Provider } from "react-redux";

import App from "./container/App.js";

import store from "./store";


const ROOT_DATA = store.getState();


ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById("root")
)
