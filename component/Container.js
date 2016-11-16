import React,{Component} from "react";

// import component
import QuickLogin from "./QuickLogin.js";
import Headline from "./Headline.js";
import Favorite from "./Favorite.js"

// import container
import QuestionContent from "../container/QuestionContent.js";
import RankingList from "../container/RankingList.js";
// 展示组件
const Container = React.createClass({
	render:function(){
		return (
			<div>
				<div className="wrap clearfix">
					<div className="container_left fl">
						<QuestionContent type={this.props.store.question_type} item={this.props.store.question_list} />
					</div>
					<div className="container_right fr">
						<QuickLogin />
						<div style={{"height":"140px","margin":"30px 0"}}>正在施工</div>
						<Headline />
						<RankingList type={this.props.store.rank_type} item={this.props.store.ranking_list} />
						<Favorite />
					</div>
				</div>
			</div>
		)
	}
})

export default Container;