const TOGGLE_QUESTION_LIST_TYPE = "TOGGLE_QUESTION_LIST_TYPE";
const RENDER_QUESTION_LIST = "RENDER_QUESTION_LIST";
const TOGGLE_RANKING_LIST_TYPE = "TOGGLE_RANKING_LIST_TYPE";
const RENDER_RANKING_LIST = "RENDER_RANKING_LIST";
const TOGGLE_LOGIN_MODAL = "TOGGLE_LOGIN_MODAL";
/* redux test code */
// 问题列表
function toggleQuestionListType(code){
	return {
		type:TOGGLE_QUESTION_LIST_TYPE,
		code
	}
}

function renderQuestionList(question_list){
	return {
		type:RENDER_QUESTION_LIST,
		question_list
	}
}

// 排行榜
function toggleRankingListType(code){
  return {
    type:TOGGLE_RANKING_LIST_TYPE,
    code
  }
}

function renderRankingList(ranking_list){
  return {
    type:RENDER_RANKING_LIST,
    ranking_list
  }
}

// 弹窗是否显示
function toggleLoginModal(visibility){
  return {
    type:TOGGLE_LOGIN_MODAL,
    visibility
  }
}


export { toggleQuestionListType,renderQuestionList }
export { toggleRankingListType,renderRankingList }
export { toggleLoginModal }
/* redux test code */