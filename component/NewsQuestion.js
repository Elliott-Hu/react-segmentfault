import React,{ Component } from "react";

export default function NewsQuestion(props){
		return (
				<section className="newsQuestion">
						<div className="fl"></div>
						<div className="newsQuestion_main" style={{
								padding:"15px 64px 15px 75px",
						}}>
								<h3><a>{props.infos.title}</a></h3>
								<p>
										<a>{props.infos.author}</a>
										<span>{props.infos.new_desc}</span>
										<span>发布于</span>
										<a>#前端</a>
										<a className="lnk_src">segmentfault.com</a>
								</p>
						</div>
						<div className="fr"></div>
				</section>
		)
}