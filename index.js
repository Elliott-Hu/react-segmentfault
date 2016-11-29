import React from "react";
import ReactDOM from "react-dom";
import { Router,Route,hashHistory } from "react-router";
import { Provider } from "react-redux";

// page
import Home from "./page/Home.js";
import News from "./page/News.js";

// store
import store from "./store";


const ROOT_DATA = store.getState();


ReactDOM.render(
	<Provider store={store}>
		<Router history={hashHistory}>
			<Route path="/" component={Home} />
			<Route path="/news" component={News} />
		</Router>
	</Provider>,
	document.getElementById("root")
)