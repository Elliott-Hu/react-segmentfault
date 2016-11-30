import React,{ Component } from "react";

export default class NewsHeader extends Component {
		constructor(){
				super();
		};
		render(){
				return (
						<div style={{
								height:"60px",
								borderBottom:"1px solid #D3D3D3",
								boxShadow:"0 1px 0 1px #E6E6E6"
						}}>
								<div className="wrap">
										<div></div>
										<ul className="newsHeader_tag">
												<li className="active"><a>热门的</a></li>
												<li><a>最新的</a></li>
										</ul>
										<ul className="fr">
												<li className="header_login fr"><a onClick={ this.props.modalToggle }>注册 · 登录</a></li>
										</ul>
								</div>
						</div>
				)
		}
}