import React,{Component} from "react";

class QuickLogin extends Component {
	constructor(props){
		super(props);
	};
	render(){
		return (
			<div className="quick_login">
				<p>SegmentFault 是一个专注于解决编程问题，提高开发技能的社区。</p>
				<ul className="quick_btn_list">
					<li><a className="quick_btn_google"><span></span>使用 Google 登录</a></li>
					<li><a className="quick_btn_sina"><span></span>使用微博登录</a></li>
					<li><a className="quick_btn_wechat"><span></span>使用微信登录</a></li>
				</ul>
				<div className="quick_boardcast">
					<a>SF 开发者大会杭州站，优惠售票进行中，长三角开发者伙伴看过来!</a>
				</div>
			</div>
		)
	}
}

export default QuickLogin;