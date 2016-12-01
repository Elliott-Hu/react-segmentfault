import React,{ Component } from "react";

// import component
import QuickLogin from "./QuickLogin.js";
import Guide from "./Guide.js";

// import container
import NewsQuestionContent from "../container/NewsQuestionContent.js";


export default class NewsContainer extends Component {
		constructor(){
				super();
		};
		render(){
				return (
						<div>
								<div className="wrap clearfix">
										<div className="container_left fl">
												<NewsQuestionContent />
										</div>
										<div className="container_right fr">
												<QuickLogin />
												<div style={{"height":"140px","margin":"30px 0"}}>正在施工</div>
												<Guide />
										</div>
								</div>
						</div>
				)
		}
}
