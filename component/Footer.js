import React,{Component} from "react";

const DATA_FOOTER_LINK = [
	{
		"title":"网站相关",
		"lnks":["关于我们","服务条款","帮助中心","声望与权限","编辑器语法","每周精选","App 下载","社区服务中心"]
	},{
		"title":"联系合作",
		"lnks":["联系我们","加入我们","合作伙伴","媒体报道","建议反馈"]
	},{
		"title":"常用链接",
		"lnks":["笔记插件: Chrome","笔记插件: Firefox","订阅: 问答/文章","文档镜像","社区访谈","D-DAY 技术沙龙","黑客马拉松 Hackathon","域名搜索注册"]
	},{
		"title":"关注我们",
		"lnks":["Github","Twitter","新浪微博","团队日志","产品技术日志","社区运营日志","市场运营日志"]
	}
];

class Dl extends Component {
	constructor(){
		super()
	};
	render(){
		return (
			<dl className="dl_lnk">
				<dt>{this.props.data.title}</dt>
				{this.props.data.lnks.map((item,i) => (<dd key={i}><a>{item}</a></dd>))}
			</dl>
		)
	}
}

class Footer extends Component {
	constructor(){
		super()
	};
	render(){
		return (
			<footer>
				<div className="wrap">
					<div className="footer_content clearfix">
						{DATA_FOOTER_LINK.map((item,i)=>(<Dl key={i} data={item} />))}
						<dl className="dl_access fr">
							<dt>内容许可</dt>
							<dd>除特别说明外，用户内容均采用 知识共享署名-相同方式共享 3.0 中国大陆许可协议 进行许可</dd>
							<dd>本站由 又拍云 提供 CDN 存储服务</dd>
						</dl>
					</div>
					<div className="copyright">
						<p>Copyright © 2011-2016 SegmentFault. 当前呈现版本 16.11.07</p>
						<p><a>浙ICP备 15005796号-2</a><a>浙公网安备 33010602002000号</a></p>
					</div>
				</div>
			</footer>
		)
	}
}

export default Footer;