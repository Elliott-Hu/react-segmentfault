import React,{ Component } from "react";
import { connect } from "react-redux";

import QuestionTab from "../component/QuestionTab.js";

import { fetchQuestionList } from "../action/action.js";

class NewsHeader extends Component {
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
				var tab_list = ["最新的","热门的"];
				return (
						<div style={{
								height:"60px",
								borderBottom:"1px solid #D3D3D3",
								boxShadow:"0 1px 0 1px #E6E6E6"
						}}>
								<div className="wrap">
										<div></div>
										<ul className="newsHeader_tag">
												{tab_list.map((item,index) => (<QuestionTab active={active} key={index} onClick={this.handleClick} value={index} text={item} />) )}
										</ul>
										<ul className="fr">
												<li className="header_login fr"><a onClick={ this.props.modalToggle }>注册 · 登录</a></li>
										</ul>
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
				getQuestionList(type){
						dispatch(fetchQuestionList(type));
				}
		}
}

export default connect(mapStateToProps,mapDispatchToProps)(NewsHeader);