import React from "react";

const DATA_TAG_LIST = [
	{text:"头条"},{text:"问答"},{text:"专栏"},{text:"职位"},{text:"活动"},
]

var Tag = React.createClass({
	handleClick:function(){
		console.log(this.props.text);
	},
	render:function(){
		return (
			<li><a onClick={this.handleClick}>{this.props.text}</a></li>
		)
	}
})

var Header = React.createClass({
	render:function(){
		return (
			<header>
				<div className="wrap">
					<div className="fl">
						<div><a></a></div>
						<ul className="header_tag">
							{ DATA_TAG_LIST.map((item,index) => <Tag key={index} text={item["text"]} />) }
						</ul>
					</div>
					<div className="fr">
						<form className="header_search fl">
							<a></a>
							<input placeholder="输入关键字搜索" />
						</form>
						<ul className="fl">
							<li className="header_help fl"><a></a></li>
							<li className="header_login fl"><a onClick={this.props.modalToggle}>注册 · 登录</a></li>
						</ul>
					</div>
				</div>
			</header>
		)
	}
});


export default Header;