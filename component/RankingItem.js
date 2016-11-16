import React,{Component} from "react";

// 展示组件
// export default class RankingItem extends Component {
// 	constructor(props){
// 		super(props);
// 	};
// 	render(){
// 		return (
// 			<li><img src={this.props.data.avatar}/><a>{this.props.data.name}</a><span>+{this.props.data.score}</span></li>
// 		)
// 	};

// };

export default (props) => ( <li><img src={props.data.avatar}/><a>{props.data.name}</a><span>+{props.data.score}</span></li> )
