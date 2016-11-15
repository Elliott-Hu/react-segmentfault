import { question_list,question_type } from "./questionList.js";
import { rank_type,ranking_list } from "./rankingList.js";
import { loginModalShow } from "./loginModal.js";
import { combineReducers } from "redux";

const reducers = combineReducers({loginModalShow,question_type,question_list,rank_type,ranking_list});

export default reducers;