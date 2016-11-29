import React,{ Component } from "react";

class NewsBar extends Component {
		constructor(){
				super();
		};
		render(){
				return (
						<div>
								<div className="wrap">
										<ul className="newsBar_nav_main">
												<li><a>问答</a></li>
												<li><a>专栏</a></li>
												<li><a>头条</a></li>
										</ul>
										<ul className="newsBar_nav_list">
												<li><a>前端</a></li>
												<li><a>后端</a></li>
												<li><a>ios</a></li>
												<li><a>Android</a></li>
												<li><a>安全</a></li>
												<li><a>工具</a></li>
												<li><a>程序员</a></li>
												<li><a>行业</a></li>
										</ul>
								</div>
						</div>
				)
		}
}

export default NewsBar;