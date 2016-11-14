import { toggleQuestionListType } from "../action/action.js";
import { createStore } from "redux";

var initialState = {
	question_type:0,
	question_list:[],
}

function questionList(state = initialState, action){
	switch (action.type){
		case "TOGGLE_QUESTION_LIST_TYPE":
			return Object.assign({},state,{
				question_type:action.code,
				question_list:[{
					"title":"tcp_tw_reuse 和 tcp_tw_recycle 在原理上有什么区别？",
					"rank_vote":0,
					"rank_answer":0,
					"rank_view":21,
					"new_desc":"3小时前提问",
					"author":"cholerae",
					"tags":["服务器","linux","tcp","网络"],
					"status":0,
				},{
					"title":"为啥从文件流中读取数据到新链表，要求返回头指针head，需要定义多一个临时指针p ?",
					"rank_vote":0,
					"rank_answer":0,
					"rank_view":32,
					"new_desc":"3小时前提问",
					"author":"伊利醇牛奶",
					"tags":["c"],
					"status":0,
				}]
			})
			break;
		default:
			return state;
			break;
	}
}

export let store = createStore(questionList);

