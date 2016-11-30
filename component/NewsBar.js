import React,{ Component } from "react";

import { Link } from "react-router";

class NewsBar extends Component {
		constructor(){
				super();
		};
		render(){
				return (
						<div style={{borderTop:"2px solid #009A61"}}>
								<div className="wrap" style={{borderBottom:"1px solid #EBEBEB"}}>
										<ul className="newsBar_nav_main">
												<li><Link to="/" style={{color:"#666"}}>问答</Link></li>
												<li><Link to="/" style={{color:"#666"}}>专栏</Link></li>
												<li><Link to="/news" style={{color:"#666"}}>头条</Link></li>
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