import React,{ Component } from "react";

const DATA_FAVORITE_ITEMS = [{
		"title":"编程语言",
		"count":81,
		"star":73
	},{
		"title":"2015 优秀文章 - iOS",
		"count":69,
		"star":74
	},{
		"title":"js数据结构和算法",
		"count":8,
		"star":28
	},{
		"title":"Hard Core - 硬核程序员",
		"count":35,
		"star":62
	},{
		"title":"安全指南",
		"count":15,
		"star":57
	}]

class FavoriteItem extends Component {
	constructor(){
		super();
	};
	render(){
		return (
			<li>
				<img src=""/>
				<div>
					<h3><a>{this.props.data.title}</a></h3>
					<p>
						<span>{this.props.data.count}个条目</span>
						<span className="split_line">|</span>
						<span>{this.props.data.star}人关注</span>
					</p>
				</div>
			</li>

		)
	}
}

class Favorite extends Component {
	constructor(){
		super();
	};
	render(){
		return (
			<div>
				<div className="favorite_header clearfix"><h2 className="fl">热门收藏夹</h2><a>换一组</a></div>
				<ul className="favorite_content">
					{ DATA_FAVORITE_ITEMS.map( (item,i) => (<FavoriteItem key={i} data={item} />) ) }
				</ul>
			</div>
		)
	};
}

export default Favorite;