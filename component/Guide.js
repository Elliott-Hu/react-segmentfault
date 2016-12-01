import React,{ Component } from "react";

export default class Guide extends Component {
    constructor(){
    	  super();
    };
    render(){
    	  return (
    	  		<div className="guide_list">
    	  				<h2>发帖指南</h2>
    	  				<ul>
    	  						<li>独立思考、自由探索</li>
    	  						<li>发布的内容和互联网、编程开发、产品设计有关</li>
    	  						<li>标题能准确描述的内容，不要发重复的内容</li>
    	  						<li>客观投票，确保你看过这篇内容</li>
    	  						<li>如果你遇到了具体的编程难题，请到 <a>问答平台</a> 提问</li>
    	  						<li>保持友善，禁止任何形式的广告、SEO 推广</li>
    	  						<li>遵循 <a>用户服务条款</a></li>
    	  				</ul>
    	  		</div>
    	  )
    }
}