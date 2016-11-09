import React,{Component} from "react";

var DATA_RANKINGLIST = [{
	"avatar":"https://sfault-avatar.b0.upaiyun.com/239/235/2392358811-5805b2d6c1aa2_big64",
	"name":"arno_好久不见",
	"score":"66",
},{
	"avatar":"https://sf-static.b0.upaiyun.com/v-5821a503/global/img/user-64.png",
	"name":"张泽豪",
	"score":"28",
},{
	"avatar":"https://sfault-avatar.b0.upaiyun.com/239/235/2392358811-5805b2d6c1aa2_big64",
	"name":"dollor",
	"score":"26",
},{
	"avatar":"https://sfault-avatar.b0.upaiyun.com/282/874/2828743052-57cd9755e29c2_big64",
	"name":"godtail",
	"score":"26",
},{
	"avatar":"https://sfault-avatar.b0.upaiyun.com/196/903/1969038762-57e1012f7673a_big64",
	"name":"昌维001",
	"score":"26",
},{
	"avatar":"https://sf-static.b0.upaiyun.com/v-5821a503/global/img/user-64.png",
	"name":"天I火",
	"score":"25",
},{
	"avatar":"https://sfault-avatar.b0.upaiyun.com/832/556/832556462-55d7c2a9661e4_big64",
	"name":"leftstick",
	"score":"25",
},{
	"avatar":"https://sfault-avatar.b0.upaiyun.com/120/260/1202606141-1030000000585904_big64",
	"name":"Starch",
	"score":"25",
},{
	"avatar":"https://sfault-avatar.b0.upaiyun.com/218/277/2182778632-5821a9d011ccf_big64",
	"name":"在雨巷",
	"score":"21",
},{
	"avatar":"https://sfault-avatar.b0.upaiyun.com/393/761/3937613787-57aff8316af9d_big64",
	"name":"郭伟匡",
	"score":"21",
},];

class RankingItem extends Component {
	constructor(props){
		super(props);
	};
	render(){
		return (
			<li><img src={this.props.data.avatar}/><a>{this.props.data.name}</a><span>+{this.props.data.score}</span></li>
		)
	}

}

class RankingList extends Component {
	constructor(){
		super();
		this.state = {
			"rank_type":"TODAY",
			"ranking_list":DATA_RANKINGLIST,
		}
	};
	handleClick(event){
		var val = event.target.getAttribute("value");
		console.log(this);
		this.setState({"rank_type":val});

		var list = DATA_RANKINGLIST.reverse()
		this.setState("ranking_list":list);
	};
	render(){
		return (
			<div className="ranking_list">
				<div className="ranking_header clearfix">
					<h2 className="fl">排行榜</h2>
					<div className="ranking_type fr">
						<a className={this.state.rank_type == "TODAY" ? "active" : ""} onClick={this.handleClick.bind(this)} value="TODAY">今天</a>
						· 
						<a className={this.state.rank_type == "WEEK" ? "active" : ""} onClick={this.handleClick.bind(this)} value="WEEK">本周</a>
						·
						<a>更多</a>
					</div>
				</div>
				<ol className="ranking_content">
					{ this.state.ranking_list.map( (item,i) => (<RankingItem key={i} data={item} />) ) }
				</ol>
			</div>
		)
	}
}


export default RankingList;