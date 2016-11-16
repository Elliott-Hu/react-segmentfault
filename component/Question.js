import React from "react";

// 展示组件
const Question = React.createClass({
	render:function(){
		var status = this.props.infos.status,
				color = status == 0 ? "#AD3A37" : ( status == 1 ? "#009A61" : "#808B87");
		return (
			<section className="question clearfix">
				<div className="question_rank fl clearfix">
					<div className=""><p>{this.props.infos.rank_vote}</p><span>投票</span></div>
					<div style={{backgroundColor:color,color:"#fff"}} className="answer"><p>{this.props.infos.rank_answer}</p><span>{ status==2 ? "解决" : "回答"}</span></div>
					<div className=""><p>{this.props.infos.rank_view}</p><span>浏览</span></div>
				</div>
				<div className="question_main">
					<ul>
						<li className="question_author">
							<a>{this.props.infos.author}</a>
							<span>{this.props.infos.new_desc}</span>
						</li>
					</ul>
					<h2 className="question_title"><a>{this.props.infos.title}</a></h2>
					<ul className="question_tags clearfix">
						{this.props.infos.tags.map((tag,key) => (<li key={key}><a>{tag}</a></li>))}
					</ul>
				</div>
			</section>
		)
	}
})

export default Question;