import "babel-polyfill";

import reducers from "../reducers";
import { createStore,applyMiddleware } from "redux";

// 中间件
import thunkMiddleware from "redux-thunk";
import createLogger from "redux-logger";


const loggerMiddleware = createLogger();
const store = createStore(reducers,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
	,applyMiddleware(
		thunkMiddleware,
		// loggerMiddleware 
	)
);


export default store;