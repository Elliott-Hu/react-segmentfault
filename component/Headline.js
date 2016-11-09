import React,{Component} from "react";

const DATA_HEADLINE_LIST = [{
	"title":"可替代团队领袖培养计划",
	"liked":"1",
	"comment":"10"
},{
	"title":"打造百亿级数据处理量的弹性调度容器平台",
	"liked":"2",
	"comment":"9"
},{
	"title":"使用 React Native 构建类似 Tinder 的加载器",
	"liked":"10",
	"comment":"18"
},{
	"title":"弃用微信小程序的自带ide",
	"liked":"5",
	"comment":"2"
},{
	"title":"node 命令行输出颜色的工具 colors-cli",
	"liked":"6",
	"comment":"6"
},];


class News extends Component {
	constructor(props){
		super(props);
	};
	render(){
		return (
			<li>
				<h3><a>{this.props.data.title}</a></h3>
				<p><b>{this.props.data.liked} 赞</b>|<span>{this.props.data.comment} 评论</span></p>
			</li>
		)
	}
}

class Headline extends Component {
	constructor(props){
		super(props);
		this.state = {
			headline_list:DATA_HEADLINE_LIST
		}
	};
	render(){
		return (
			<div className="headLine">
				<div className="headLine_header">最新头条</div>
				<ul className="headLine_content">
					{
						this.state.headline_list.map( (item,i) => (<News key={i} data={item} />)	)
					}
				</ul>
				<div className="headLine_footer"><a>更多头条内容→</a></div>
			</div>
		)
	};
}

export default Headline;