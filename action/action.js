
/* redux test code */
function toggleQuestionListType(code){
	return {
		type:"TOGGLE_QUESTION_LIST_TYPE",
		code
	}
}

function renderQuestionList(question_list){
	return {
		type:"RENDER_QUESTION_LIST",
		question_list
	}
}

export { toggleQuestionListType,renderQuestionList }
/* redux test code */