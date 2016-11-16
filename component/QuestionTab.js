import React from "react";

// 展示组件
const QuestionTab = React.createClass({
	render:function(){
		return (
			<li><a value={this.props.value} onClick={this.props.onClick} style={{"borderBottom": this.props.active == this.props.value ? "3px solid #009A61" : "3px solid transparent"}}>{this.props.text}</a></li>
		)
	}
});

export default QuestionTab;