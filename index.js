import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import { Router,Route,hashHistory } from "react-router";
import { syncHistoryWithStore,routerReducer } from "react-router-redux";

// page
import Home from "./page/Home.js";
import News from "./page/News.js";

// store
import store from "./store";


const ROOT_DATA = store.getState();
const history = syncHistoryWithStore(hashHistory, store);

ReactDOM.render(
	<Provider store={store}>
		<Router history={history}>
			<Route path="/" component={Home} />
			<Route path="/news" component={News} />
		</Router>
	</Provider>,
	document.getElementById("root")
)