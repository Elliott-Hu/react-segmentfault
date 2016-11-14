import React from "react";
import { toggleQuestionListType } from "../action/action.js";
import { store } from "../reducers/questionList.js";

var DATA_QUESTION_LIST = [{
	"title":"为什么我的sublime安装插件困难重重",
	"rank_vote":2,
	"rank_answer":1,
	"rank_view":15,
	"new_desc":"刚刚回答",
	"author":"orangexc",
	"tags":["javascript","插件","php"],
	"status":1,
},{
	"title":"tcp_tw_reuse 和 tcp_tw_recycle 在原理上有什么区别？",
	"rank_vote":0,
	"rank_answer":0,
	"rank_view":21,
	"new_desc":"3小时前提问",
	"author":"cholerae",
	"tags":["服务器","linux","tcp","网络"],
	"status":0,
},{
	"title":"为啥从文件流中读取数据到新链表，要求返回头指针head，需要定义多一个临时指针p ?",
	"rank_vote":0,
	"rank_answer":0,
	"rank_view":32,
	"new_desc":"3小时前提问",
	"author":"伊利醇牛奶",
	"tags":["c"],
	"status":0,
},{
	"title":"网站中一篇文章访问次数统计的方法",
	"rank_vote":0,
	"rank_answer":2,
	"rank_view":65,
	"new_desc":"3小时前回答",
	"author":"小杰控",
	"tags":["javascript","java"],
	"status":1,
},{
	"title":"是否学习vue轻松，学习vue+webpack很吃力？",
	"rank_vote":0,
	"rank_answer":1,
	"rank_view":60,
	"new_desc":"30分钟前回答",
	"author":"czl",
	"tags":["javascript","webpack","vue.js","vue-router"],
	"status":1,
},{
	"title":"从chrome的控制台如何进入zeronet里的iframe页面执行代码呢？",
	"rank_vote":0,
	"rank_answer":0,
	"rank_view":18,
	"new_desc":"37分钟前提问",
	"author":"sudorate",
	"tags":["chrome开发者工具","chrome","html5","javascript"],
	"status":0,
},{
	"title":"使用@Transactional(readOnly = false)做插入操作报错求大神指导",
	"rank_vote":0,
	"rank_answer":2,
	"rank_view":53,
	"new_desc":"39分钟前回答",
	"author":"弱水三千1234",
	"tags":["java","mysql","maven"],
	"status":1,
},{
	"title":"ios app 开发实现右滑返回上一页和点击栏目条能够返回顶部",
	"rank_vote":0,
	"rank_answer":1,
	"rank_view":24,
	"new_desc":"40分钟前回答",
	"author":"秋刀鱼Bin",
	"tags":["ios"],
	"status":1,
},{
	"title":"在cygwin如何使用絕對路徑去執行node.js app?",
	"rank_vote":0,
	"rank_answer":0,
	"rank_view":14,
	"new_desc":"42 分钟前提问",
	"author":"jasonhsieh",
	"tags":["node.js","cygwin"],
	"status":0,
},{
	"title":"jquery value of select 相加總共?",
	"rank_vote":0,
	"rank_answer":1,
	"rank_view":88,
	"new_desc":"53 分钟前回答",
	"author":"scort",
	"tags":["select","jquery"],
	"status":2,
},{
	"title":"thinkphp 上传两个文件一个文件限制类型，一个不限制，而且两个文件名设置不一样,各位大牛求指教",
	"rank_vote":0,
	"rank_answer":0,
	"rank_view":18,
	"new_desc":"1 小时前提问",
	"author":"深爱不弃",
	"tags":["thinkphp","php"],
	"status":0,
},]

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

const QuestionTab = React.createClass({
	render:function(){
		return (
			<li><a value={this.props.value} onClick={this.props.onClick} style={{"borderBottom": this.props.active == this.props.value ? "3px solid #009A61" : "3px solid transparent"}}>{this.props.text}</a></li>
		)
	}
});

const QuestionContent = React.createClass({
	getDefaultProps:function(){
		return {
			"tab_list":["最新的","热门的","未回答的"],
		}
	},
	getInitialState:function(){
		/* redux test code */ 
		return store.getState();
		/* redux test code */ 

		/* backups code */
		// return {
		// 	"question_type":0,
		// 	"question_list":[],
		// }
		/* backups code */
	},
	handleClick:function(event){
		var question_type = parseInt(event.target.getAttribute("value"),10)
		/* backups code */
		// this.setState({"question_type":question_type});
		// console.log(this.state.question_list);
		// this.getQuestionList(question_type);
		/* backups code */


		/* redux test code */
		store.dispatch(toggleQuestionListType(question_type));
		this.setState(store.getState());
		console.log(store);
		/* redux test code */



	},		
	getQuestionList:function(type){
		var type = type;
		if(type === 0){
			this.setState({"question_list":[{
					"title":"为什么我的sublime安装插件困难重重",
					"rank_vote":2,
					"rank_answer":1,
					"rank_view":15,
					"new_desc":"刚刚回答",
					"author":"orangexc",
					"tags":["javascript","插件","php"],
					"status":1,
				},{
					"title":"tcp_tw_reuse 和 tcp_tw_recycle 在原理上有什么区别？",
					"rank_vote":0,
					"rank_answer":0,
					"rank_view":21,
					"new_desc":"3小时前提问",
					"author":"cholerae",
					"tags":["服务器","linux","tcp","网络"],
					"status":0,
				},{
					"title":"为啥从文件流中读取数据到新链表，要求返回头指针head，需要定义多一个临时指针p ?",
					"rank_vote":0,
					"rank_answer":0,
					"rank_view":32,
					"new_desc":"3小时前提问",
					"author":"伊利醇牛奶",
					"tags":["c"],
					"status":0,
				},{
					"title":"为什么我的sublime安装插件困难重重",
					"rank_vote":2,
					"rank_answer":1,
					"rank_view":15,
					"new_desc":"刚刚回答",
					"author":"orangexc",
					"tags":["javascript","插件","php"],
					"status":1,
				},{
					"title":"tcp_tw_reuse 和 tcp_tw_recycle 在原理上有什么区别？",
					"rank_vote":0,
					"rank_answer":0,
					"rank_view":21,
					"new_desc":"3小时前提问",
					"author":"cholerae",
					"tags":["服务器","linux","tcp","网络"],
					"status":0,
				},{
					"title":"为啥从文件流中读取数据到新链表，要求返回头指针head，需要定义多一个临时指针p ?",
					"rank_vote":0,
					"rank_answer":0,
					"rank_view":32,
					"new_desc":"3小时前提问",
					"author":"伊利醇牛奶",
					"tags":["c"],
					"status":0,
				},{
					"title":"网站中一篇文章访问次数统计的方法",
					"rank_vote":0,
					"rank_answer":2,
					"rank_view":65,
					"new_desc":"3小时前回答",
					"author":"小杰控",
					"tags":["javascript","java"],
					"status":1,
				},{
					"title":"是否学习vue轻松，学习vue+webpack很吃力？",
					"rank_vote":0,
					"rank_answer":1,
					"rank_view":60,
					"new_desc":"30分钟前回答",
					"author":"czl",
					"tags":["javascript","webpack","vue.js","vue-router"],
					"status":1,
				},{
					"title":"从chrome的控制台如何进入zeronet里的iframe页面执行代码呢？",
					"rank_vote":0,
					"rank_answer":0,
					"rank_view":18,
					"new_desc":"37分钟前提问",
					"author":"sudorate",
					"tags":["chrome开发者工具","chrome","html5","javascript"],
					"status":0,
				},{
					"title":"使用@Transactional(readOnly = false)做插入操作报错求大神指导",
					"rank_vote":0,
					"rank_answer":2,
					"rank_view":53,
					"new_desc":"39分钟前回答",
					"author":"弱水三千1234",
					"tags":["java","mysql","maven"],
					"status":1,
				},{
					"title":"ios app 开发实现右滑返回上一页和点击栏目条能够返回顶部",
					"rank_vote":0,
					"rank_answer":1,
					"rank_view":24,
					"new_desc":"40分钟前回答",
					"author":"秋刀鱼Bin",
					"tags":["ios"],
					"status":1,
				},{
					"title":"在cygwin如何使用絕對路徑去執行node.js app?",
					"rank_vote":0,
					"rank_answer":0,
					"rank_view":14,
					"new_desc":"42 分钟前提问",
					"author":"jasonhsieh",
					"tags":["node.js","cygwin"],
					"status":0,
				},{
					"title":"jquery value of select 相加總共?",
					"rank_vote":0,
					"rank_answer":1,
					"rank_view":88,
					"new_desc":"53 分钟前回答",
					"author":"scort",
					"tags":["select","jquery"],
					"status":2,
				},{
					"title":"thinkphp 上传两个文件一个文件限制类型，一个不限制，而且两个文件名设置不一样,各位大牛求指教",
					"rank_vote":0,
					"rank_answer":0,
					"rank_view":18,
					"new_desc":"1 小时前提问",
					"author":"深爱不弃",
					"tags":["thinkphp","php"],
					"status":0,
				},{
					"title":"ios app 开发实现右滑返回上一页和点击栏目条能够返回顶部",
					"rank_vote":0,
					"rank_answer":1,
					"rank_view":24,
					"new_desc":"40分钟前回答",
					"author":"秋刀鱼Bin",
					"tags":["ios"],
					"status":1,
				},{
					"title":"在cygwin如何使用絕對路徑去執行node.js app?",
					"rank_vote":0,
					"rank_answer":0,
					"rank_view":14,
					"new_desc":"42 分钟前提问",
					"author":"jasonhsieh",
					"tags":["node.js","cygwin"],
					"status":0,
				},{
					"title":"jquery value of select 相加總共?",
					"rank_vote":0,
					"rank_answer":1,
					"rank_view":88,
					"new_desc":"53 分钟前回答",
					"author":"scort",
					"tags":["select","jquery"],
					"status":2,
				},{
					"title":"thinkphp 上传两个文件一个文件限制类型，一个不限制，而且两个文件名设置不一样,各位大牛求指教",
					"rank_vote":0,
					"rank_answer":0,
					"rank_view":18,
					"new_desc":"1 小时前提问",
					"author":"深爱不弃",
					"tags":["thinkphp","php"],
					"status":0,
				},{
					"title":"tcp_tw_reuse 和 tcp_tw_recycle 在原理上有什么区别？",
					"rank_vote":0,
					"rank_answer":0,
					"rank_view":21,
					"new_desc":"3小时前提问",
					"author":"cholerae",
					"tags":["服务器","linux","tcp","网络"],
					"status":0,
				},{
					"title":"为啥从文件流中读取数据到新链表，要求返回头指针head，需要定义多一个临时指针p ?",
					"rank_vote":0,
					"rank_answer":0,
					"rank_view":32,
					"new_desc":"3小时前提问",
					"author":"伊利醇牛奶",
					"tags":["c"],
					"status":0,
				},{
					"title":"为什么我的sublime安装插件困难重重",
					"rank_vote":2,
					"rank_answer":1,
					"rank_view":15,
					"new_desc":"刚刚回答",
					"author":"orangexc",
					"tags":["javascript","插件","php"],
					"status":1,
				},]
			});
		}else if(type === 1){
			this.setState({"question_list":[{
					"title":"为什么我的sublime安装插件困难重重",
					"rank_vote":2,
					"rank_answer":1,
					"rank_view":15,
					"new_desc":"刚刚回答",
					"author":"orangexc",
					"tags":["javascript","插件","php"],
					"status":1,
				},{
					"title":"在cygwin如何使用絕對路徑去執行node.js app?",
					"rank_vote":0,
					"rank_answer":0,
					"rank_view":14,
					"new_desc":"42 分钟前提问",
					"author":"jasonhsieh",
					"tags":["node.js","cygwin"],
					"status":0,
				},{
					"title":"jquery value of select 相加總共?",
					"rank_vote":0,
					"rank_answer":1,
					"rank_view":88,
					"new_desc":"53 分钟前回答",
					"author":"scort",
					"tags":["select","jquery"],
					"status":2,
				},{
					"title":"thinkphp 上传两个文件一个文件限制类型，一个不限制，而且两个文件名设置不一样,各位大牛求指教",
					"rank_vote":0,
					"rank_answer":0,
					"rank_view":18,
					"new_desc":"1 小时前提问",
					"author":"深爱不弃",
					"tags":["thinkphp","php"],
					"status":0,
				},{
					"title":"为什么我的sublime安装插件困难重重",
					"rank_vote":2,
					"rank_answer":1,
					"rank_view":15,
					"new_desc":"刚刚回答",
					"author":"orangexc",
					"tags":["javascript","插件","php"],
					"status":1,
				},{
					"title":"tcp_tw_reuse 和 tcp_tw_recycle 在原理上有什么区别？",
					"rank_vote":0,
					"rank_answer":0,
					"rank_view":21,
					"new_desc":"3小时前提问",
					"author":"cholerae",
					"tags":["服务器","linux","tcp","网络"],
					"status":0,
				},{
					"title":"为啥从文件流中读取数据到新链表，要求返回头指针head，需要定义多一个临时指针p ?",
					"rank_vote":0,
					"rank_answer":0,
					"rank_view":32,
					"new_desc":"3小时前提问",
					"author":"伊利醇牛奶",
					"tags":["c"],
					"status":0,
				},{
					"title":"为什么我的sublime安装插件困难重重",
					"rank_vote":2,
					"rank_answer":1,
					"rank_view":15,
					"new_desc":"刚刚回答",
					"author":"orangexc",
					"tags":["javascript","插件","php"],
					"status":1,
				},{
					"title":"tcp_tw_reuse 和 tcp_tw_recycle 在原理上有什么区别？",
					"rank_vote":0,
					"rank_answer":0,
					"rank_view":21,
					"new_desc":"3小时前提问",
					"author":"cholerae",
					"tags":["服务器","linux","tcp","网络"],
					"status":0,
				},{
					"title":"为啥从文件流中读取数据到新链表，要求返回头指针head，需要定义多一个临时指针p ?",
					"rank_vote":0,
					"rank_answer":0,
					"rank_view":32,
					"new_desc":"3小时前提问",
					"author":"伊利醇牛奶",
					"tags":["c"],
					"status":0,
				},{
					"title":"网站中一篇文章访问次数统计的方法",
					"rank_vote":0,
					"rank_answer":2,
					"rank_view":65,
					"new_desc":"3小时前回答",
					"author":"小杰控",
					"tags":["javascript","java"],
					"status":1,
				},{
					"title":"是否学习vue轻松，学习vue+webpack很吃力？",
					"rank_vote":0,
					"rank_answer":1,
					"rank_view":60,
					"new_desc":"30分钟前回答",
					"author":"czl",
					"tags":["javascript","webpack","vue.js","vue-router"],
					"status":1,
				},{
					"title":"从chrome的控制台如何进入zeronet里的iframe页面执行代码呢？",
					"rank_vote":0,
					"rank_answer":0,
					"rank_view":18,
					"new_desc":"37分钟前提问",
					"author":"sudorate",
					"tags":["chrome开发者工具","chrome","html5","javascript"],
					"status":0,
				},{
					"title":"使用@Transactional(readOnly = false)做插入操作报错求大神指导",
					"rank_vote":0,
					"rank_answer":2,
					"rank_view":53,
					"new_desc":"39分钟前回答",
					"author":"弱水三千1234",
					"tags":["java","mysql","maven"],
					"status":1,
				},{
					"title":"ios app 开发实现右滑返回上一页和点击栏目条能够返回顶部",
					"rank_vote":0,
					"rank_answer":1,
					"rank_view":24,
					"new_desc":"40分钟前回答",
					"author":"秋刀鱼Bin",
					"tags":["ios"],
					"status":1,
				},{
					"title":"在cygwin如何使用絕對路徑去執行node.js app?",
					"rank_vote":0,
					"rank_answer":0,
					"rank_view":14,
					"new_desc":"42 分钟前提问",
					"author":"jasonhsieh",
					"tags":["node.js","cygwin"],
					"status":0,
				},{
					"title":"jquery value of select 相加總共?",
					"rank_vote":0,
					"rank_answer":1,
					"rank_view":88,
					"new_desc":"53 分钟前回答",
					"author":"scort",
					"tags":["select","jquery"],
					"status":2,
				},{
					"title":"thinkphp 上传两个文件一个文件限制类型，一个不限制，而且两个文件名设置不一样,各位大牛求指教",
					"rank_vote":0,
					"rank_answer":0,
					"rank_view":18,
					"new_desc":"1 小时前提问",
					"author":"深爱不弃",
					"tags":["thinkphp","php"],
					"status":0,
				},{
					"title":"ios app 开发实现右滑返回上一页和点击栏目条能够返回顶部",
					"rank_vote":0,
					"rank_answer":1,
					"rank_view":24,
					"new_desc":"40分钟前回答",
					"author":"秋刀鱼Bin",
					"tags":["ios"],
					"status":1,
				},{
					"title":"在cygwin如何使用絕對路徑去執行node.js app?",
					"rank_vote":0,
					"rank_answer":0,
					"rank_view":14,
					"new_desc":"42 分钟前提问",
					"author":"jasonhsieh",
					"tags":["node.js","cygwin"],
					"status":0,
				},{
					"title":"jquery value of select 相加總共?",
					"rank_vote":0,
					"rank_answer":1,
					"rank_view":88,
					"new_desc":"53 分钟前回答",
					"author":"scort",
					"tags":["select","jquery"],
					"status":2,
				},{
					"title":"thinkphp 上传两个文件一个文件限制类型，一个不限制，而且两个文件名设置不一样,各位大牛求指教",
					"rank_vote":0,
					"rank_answer":0,
					"rank_view":18,
					"new_desc":"1 小时前提问",
					"author":"深爱不弃",
					"tags":["thinkphp","php"],
					"status":0,
				},{
					"title":"tcp_tw_reuse 和 tcp_tw_recycle 在原理上有什么区别？",
					"rank_vote":0,
					"rank_answer":0,
					"rank_view":21,
					"new_desc":"3小时前提问",
					"author":"cholerae",
					"tags":["服务器","linux","tcp","网络"],
					"status":0,
				},{
					"title":"为啥从文件流中读取数据到新链表，要求返回头指针head，需要定义多一个临时指针p ?",
					"rank_vote":0,
					"rank_answer":0,
					"rank_view":32,
					"new_desc":"3小时前提问",
					"author":"伊利醇牛奶",
					"tags":["c"],
					"status":0,
				},{
					"title":"为什么我的sublime安装插件困难重重",
					"rank_vote":2,
					"rank_answer":1,
					"rank_view":15,
					"new_desc":"刚刚回答",
					"author":"orangexc",
					"tags":["javascript","插件","php"],
					"status":1,
				},]
			});
		}else if(type === 2){
			this.setState({"question_list":[{
					"title":"为什么我的sublime安装插件困难重重",
					"rank_vote":2,
					"rank_answer":1,
					"rank_view":15,
					"new_desc":"刚刚回答",
					"author":"orangexc",
					"tags":["javascript","插件","php"],
					"status":1,
				},{
					"title":"为啥从文件流中读取数据到新链表，要求返回头指针head，需要定义多一个临时指针p ?",
					"rank_vote":0,
					"rank_answer":0,
					"rank_view":32,
					"new_desc":"3小时前提问",
					"author":"伊利醇牛奶",
					"tags":["c"],
					"status":0,
				},{
					"title":"网站中一篇文章访问次数统计的方法",
					"rank_vote":0,
					"rank_answer":2,
					"rank_view":65,
					"new_desc":"3小时前回答",
					"author":"小杰控",
					"tags":["javascript","java"],
					"status":1,
				},{
					"title":"是否学习vue轻松，学习vue+webpack很吃力？",
					"rank_vote":0,
					"rank_answer":1,
					"rank_view":60,
					"new_desc":"30分钟前回答",
					"author":"czl",
					"tags":["javascript","webpack","vue.js","vue-router"],
					"status":1,
				},{
					"title":"从chrome的控制台如何进入zeronet里的iframe页面执行代码呢？",
					"rank_vote":0,
					"rank_answer":0,
					"rank_view":18,
					"new_desc":"37分钟前提问",
					"author":"sudorate",
					"tags":["chrome开发者工具","chrome","html5","javascript"],
					"status":0,
				},{
					"title":"为什么我的sublime安装插件困难重重",
					"rank_vote":2,
					"rank_answer":1,
					"rank_view":15,
					"new_desc":"刚刚回答",
					"author":"orangexc",
					"tags":["javascript","插件","php"],
					"status":1,
				},{
					"title":"tcp_tw_reuse 和 tcp_tw_recycle 在原理上有什么区别？",
					"rank_vote":0,
					"rank_answer":0,
					"rank_view":21,
					"new_desc":"3小时前提问",
					"author":"cholerae",
					"tags":["服务器","linux","tcp","网络"],
					"status":0,
				},{
					"title":"为啥从文件流中读取数据到新链表，要求返回头指针head，需要定义多一个临时指针p ?",
					"rank_vote":0,
					"rank_answer":0,
					"rank_view":32,
					"new_desc":"3小时前提问",
					"author":"伊利醇牛奶",
					"tags":["c"],
					"status":0,
				},{
					"title":"为什么我的sublime安装插件困难重重",
					"rank_vote":2,
					"rank_answer":1,
					"rank_view":15,
					"new_desc":"刚刚回答",
					"author":"orangexc",
					"tags":["javascript","插件","php"],
					"status":1,
				},{
					"title":"tcp_tw_reuse 和 tcp_tw_recycle 在原理上有什么区别？",
					"rank_vote":0,
					"rank_answer":0,
					"rank_view":21,
					"new_desc":"3小时前提问",
					"author":"cholerae",
					"tags":["服务器","linux","tcp","网络"],
					"status":0,
				},{
					"title":"为啥从文件流中读取数据到新链表，要求返回头指针head，需要定义多一个临时指针p ?",
					"rank_vote":0,
					"rank_answer":0,
					"rank_view":32,
					"new_desc":"3小时前提问",
					"author":"伊利醇牛奶",
					"tags":["c"],
					"status":0,
				},{
					"title":"网站中一篇文章访问次数统计的方法",
					"rank_vote":0,
					"rank_answer":2,
					"rank_view":65,
					"new_desc":"3小时前回答",
					"author":"小杰控",
					"tags":["javascript","java"],
					"status":1,
				},{
					"title":"是否学习vue轻松，学习vue+webpack很吃力？",
					"rank_vote":0,
					"rank_answer":1,
					"rank_view":60,
					"new_desc":"30分钟前回答",
					"author":"czl",
					"tags":["javascript","webpack","vue.js","vue-router"],
					"status":1,
				},{
					"title":"从chrome的控制台如何进入zeronet里的iframe页面执行代码呢？",
					"rank_vote":0,
					"rank_answer":0,
					"rank_view":18,
					"new_desc":"37分钟前提问",
					"author":"sudorate",
					"tags":["chrome开发者工具","chrome","html5","javascript"],
					"status":0,
				},{
					"title":"使用@Transactional(readOnly = false)做插入操作报错求大神指导",
					"rank_vote":0,
					"rank_answer":2,
					"rank_view":53,
					"new_desc":"39分钟前回答",
					"author":"弱水三千1234",
					"tags":["java","mysql","maven"],
					"status":1,
				},{
					"title":"ios app 开发实现右滑返回上一页和点击栏目条能够返回顶部",
					"rank_vote":0,
					"rank_answer":1,
					"rank_view":24,
					"new_desc":"40分钟前回答",
					"author":"秋刀鱼Bin",
					"tags":["ios"],
					"status":1,
				},{
					"title":"在cygwin如何使用絕對路徑去執行node.js app?",
					"rank_vote":0,
					"rank_answer":0,
					"rank_view":14,
					"new_desc":"42 分钟前提问",
					"author":"jasonhsieh",
					"tags":["node.js","cygwin"],
					"status":0,
				},{
					"title":"jquery value of select 相加總共?",
					"rank_vote":0,
					"rank_answer":1,
					"rank_view":88,
					"new_desc":"53 分钟前回答",
					"author":"scort",
					"tags":["select","jquery"],
					"status":2,
				},{
					"title":"thinkphp 上传两个文件一个文件限制类型，一个不限制，而且两个文件名设置不一样,各位大牛求指教",
					"rank_vote":0,
					"rank_answer":0,
					"rank_view":18,
					"new_desc":"1 小时前提问",
					"author":"深爱不弃",
					"tags":["thinkphp","php"],
					"status":0,
				},{
					"title":"为什么我的sublime安装插件困难重重",
					"rank_vote":2,
					"rank_answer":1,
					"rank_view":15,
					"new_desc":"刚刚回答",
					"author":"orangexc",
					"tags":["javascript","插件","php"],
					"status":1,
				},{
					"title":"tcp_tw_reuse 和 tcp_tw_recycle 在原理上有什么区别？",
					"rank_vote":0,
					"rank_answer":0,
					"rank_view":21,
					"new_desc":"3小时前提问",
					"author":"cholerae",
					"tags":["服务器","linux","tcp","网络"],
					"status":0,
				},{
					"title":"为啥从文件流中读取数据到新链表，要求返回头指针head，需要定义多一个临时指针p ?",
					"rank_vote":0,
					"rank_answer":0,
					"rank_view":32,
					"new_desc":"3小时前提问",
					"author":"伊利醇牛奶",
					"tags":["c"],
					"status":0,
				},{
					"title":"网站中一篇文章访问次数统计的方法",
					"rank_vote":0,
					"rank_answer":2,
					"rank_view":65,
					"new_desc":"3小时前回答",
					"author":"小杰控",
					"tags":["javascript","java"],
					"status":1,
				},{
					"title":"是否学习vue轻松，学习vue+webpack很吃力？",
					"rank_vote":0,
					"rank_answer":1,
					"rank_view":60,
					"new_desc":"30分钟前回答",
					"author":"czl",
					"tags":["javascript","webpack","vue.js","vue-router"],
					"status":1,
				},{
					"title":"从chrome的控制台如何进入zeronet里的iframe页面执行代码呢？",
					"rank_vote":0,
					"rank_answer":0,
					"rank_view":18,
					"new_desc":"37分钟前提问",
					"author":"sudorate",
					"tags":["chrome开发者工具","chrome","html5","javascript"],
					"status":0,
				},{
					"title":"使用@Transactional(readOnly = false)做插入操作报错求大神指导",
					"rank_vote":0,
					"rank_answer":2,
					"rank_view":53,
					"new_desc":"39分钟前回答",
					"author":"弱水三千1234",
					"tags":["java","mysql","maven"],
					"status":1,
				}]
			});
		}
	},
	componentDidMount:function(){
		// this.getQuestionList(this.state.question_type);
	},
	render:function(){

		var active = this.state.question_type;
		return (
			<div>
				<ul className="container_left_nav clearfix">
					{this.props.tab_list.map((item,index) => (<QuestionTab active={active} key={index} onClick={this.handleClick} value={index} text={item} />) )}
				</ul>
				<div>
					{this.state.question_list.map((question,key) => (<Question key={key} infos={question} />))}
				</div>
			</div>
		)
	}
})

export default QuestionContent;