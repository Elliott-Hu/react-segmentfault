import React from "react";
import { connect } from "react-redux";

import Question from "../component/Question.js";
import QuestionTab from "../component/QuestionTab.js";

import { toggleQuestionListType,renderQuestionList } from "../action/action.js";
// import store from "../store";

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

// 容器组件
const QuestionContent = React.createClass({
	getDefaultProps:function(){
		return {
			"tab_list":["最新的","热门的","未回答的"],
		}
	},
	handleClick:function(event){
		var question_type = parseInt(event.target.getAttribute("value"),10)

		const { getQuestionList } = this.props;
		getQuestionList(question_type);

	},		
	componentDidMount:function(){
		const { getQuestionList,type } = this.props;
		getQuestionList(type);
	},
	render:function(){
		var active = this.props.question_type;
		return (
			<div>
				<ul className="container_left_nav clearfix">
					{this.props.tab_list.map((item,index) => (<QuestionTab active={active} key={index} onClick={this.handleClick} value={index} text={item} />) )}
				</ul>
				<div>
					{this.props.question_list.map((question,key) => (<Question key={key} infos={question} />))}
				</div>
			</div>
		)
	}
})

function mapStateToProps(state){
	return {
		question_type:state.question_type,
		question_list:state.question_list
	}
}

function mapDispatchToProps(dispatch){
	return {
		renderQuestionList(list){
			dispatch(renderQuestionList(list));
		},
		toggleQuestionListType(type){
			console.log(type);
			dispatch(toggleQuestionListType(type));
		},
		getQuestionList(type){
			dispatch(toggleQuestionListType(type));
			setTimeout(function(){
				var list = DATA_QUESTION_LIST;
				dispatch(renderQuestionList(list));
			}.bind(this),100);
		}
	}
}

export default connect(mapStateToProps,mapDispatchToProps)(QuestionContent);