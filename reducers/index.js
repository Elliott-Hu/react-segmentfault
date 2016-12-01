import { question_list,question_type,questions } from "./questionList.js";
import { rank_type,ranking_list } from "./rankingList.js";
import { loginModalShow } from "./loginModal.js";
import { combineReducers } from "redux";


import { Router,Route,hashHistory } from "react-router";
import { syncHistoryWithStore,routerReducer } from "react-router-redux";

const reducers = combineReducers({
	loginModalShow,question_type,questions,question_list,rank_type,ranking_list,
	routing:routerReducer,
});

export default reducers;