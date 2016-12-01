import React,{ Component } from "react";
import { connect } from "react-redux";


import NewsQuestion from "../component/NewsQuestion.js";

import { toggleQuestionListType,renderQuestionList,fetchQuestionList } from "../action/action.js";

class NewsQuestionContent extends Component {
		constructor(props){
				super(props)
		};
		// componentDidMount(){
		// 		const { getQuestionList } = this.props;
		// 		getQuestionList(0);
		// };
	  render(){
	  		let questions = this.props.questions.question_list;

	  	  return (
	  	  		<div style={{
	  	  				border:"1px solid #E8E8E8",
	  	  				marginTop:"30px",
	  	  		}}>
	  	  				{ questions.map( (item,key) => (<NewsQuestion key={key} infos={item} />) ) }
	  	  		</div>
	  	  )
	  }
}

function mapStateToProps(state){
	return {
		questions:state.questions,
	}
}

export default connect(mapStateToProps)(NewsQuestionContent);