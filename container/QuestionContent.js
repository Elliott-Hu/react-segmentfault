import React,{ Component } from "react";
import { connect } from "react-redux";

import Question from "../component/Question.js";
import QuestionTab from "../component/QuestionTab.js";

import { toggleQuestionListType,renderQuestionList,fetchQuestionList } from "../action/action.js";
// import store from "../store";



// 容器组件
class QuestionContent extends Component {
	constructor(props){
		super(props);
		this.handleClick = this.handleClick.bind(this);
	};
	handleClick(event){
		var question_type = parseInt(event.target.getAttribute("value"),10)

		const { getQuestionList } = this.props;
		getQuestionList(question_type);

	};	
	componentDidMount(){
		const { getQuestionList } = this.props;
		getQuestionList(0);
	};
	render(){
		var active = this.props.questions.question_type;
		var tab_list = ["最新的","热门的","未回答的"];
		return (
			<div>
				<ul className="container_left_nav clearfix">
					{tab_list.map((item,index) => (<QuestionTab active={active} key={index} onClick={this.handleClick} value={index} text={item} />) )}
				</ul>
				<div>
					{this.props.questions.question_list.map((question,key) => (<Question key={key} infos={question} />))}
				</div>
			</div>
		)
	}
}

function mapStateToProps(state){
	return {
		questions:state.questions,
	}
}

function mapDispatchToProps(dispatch){
	return {
		renderQuestionList(list){
			dispatch(renderQuestionList(list));
		},
		toggleQuestionListType(type){
			dispatch(toggleQuestionListType(type));
		},
		getQuestionList(type){
			dispatch(fetchQuestionList(type));
		}
	}
}

export default connect(mapStateToProps,mapDispatchToProps)(QuestionContent);