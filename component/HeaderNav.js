import React from "react";

// 展示组件
var HeaderNav = React.createClass({
	render:function(){
		return (
			<div className="header_nav">
				<div className="wrap">				
					<ul className="header_nav_main">
						<li><a>home</a></li>
						<li><a>feed</a></li>
					</ul>
					<ul className="header_nav_tags">
						<li><a>javascript</a></li>
						<li><a>php</a></li>
						<li><a>python</a></li>
						<li><a>java</a></li>
						<li><a>mysql</a></li>
						<li><a>ios</a></li>
						<li><a>android</a></li>
						<li><a>node.js</a></li>
						<li><a>html5</a></li>
						<li><a>linux</a></li>
						<li><a>c++</a></li>
						<li><a>css3</a></li>
						<li><a>git</a></li>
						<li><a>golang</a></li>
						<li><a>ruby</a></li>
						<li><a>vim</a></li>
						<li><a>docker</a></li>
					</ul>
					<a className="header_nav_more"><div><i></i><i></i><i></i></div></a>
				</div>
			</div>
		)
	}
})

export default HeaderNav;