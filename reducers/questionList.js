// import { toggleQuestionListType,renderList } from "../action/action.js";
// import { createStore,combineReducers } from "redux";

var initialState = {
	question_type:0,
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
	}],
}

function question_list(state = initialState.question_list,action){

	switch (action.type){
		case "RENDER_QUESTION_LIST":
			return action.question_list;
			break;
		default:
			return state;
			break;
	}
}

function question_type(state = initialState.question_type, action){
	switch (action.type){
		case "TOGGLE_QUESTION_LIST_TYPE":
			return action.code;
			break;
		default:
			return state;
			break;
	}
}

function questions(state = {
	isFetching: false,
	question_type: 0,
	question_list : [],
},action){
	switch (action.type) {
		case "REQUEST_QUESTION_LIST":
			return Object.assign({},state,{
				isFetching:true
			})
			break;
		case "RECEIVE_QUESTION_LIST":
			return Object.assign({},state,{
				isFetching:false,
				question_type:action.code,
				question_list:action.question_list,
			})
			break;
		default:
			return state;
			break;
	}
}

export { question_list,question_type,questions }

// const questionContent = combineReducers({question_type,question_list})



