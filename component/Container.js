import React,{Component} from "react";
import QuestionContent from "./QuestionContent.js";
import QuickLogin from "./QuickLogin.js";
import Headline from "./Headline.js";
import RankingList from "./RankingList.js";
import Favorite from "./Favorite.js"


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