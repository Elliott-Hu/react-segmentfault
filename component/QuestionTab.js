import React from "react";

// 展示组件
const QuestionTab = React.createClass({
	render:function(){
		return (
			<li className={this.props.active == this.props.value ? "active" : ""}><a value={this.props.value} onClick={this.props.onClick}>{this.props.text}</a></li>
		)
	}
});

export default QuestionTab;