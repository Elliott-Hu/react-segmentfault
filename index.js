import React from "react";
import ReactDOM from "react-dom";
import Header from "./component/Header.js";
import HeaderNav from "./component/HeaderNav.js"
import Container from "./component/Container.js"
import LoginModal from "./component/LoginModal.js"
import Footer from "./component/Footer.js"




var App = React.createClass({
	getInitialState:function(){
		return {
			"loginModalShow":false,
		}
	},
	modalToggle:function(e){
		this.setState({"loginModalShow":!this.state.loginModalShow});
		e.stopPropagation();
		return false;
	},
	bodyOverflow:function(modalShow){
		var overflowY = modalShow ? "hidden" : "scroll";
		var paddingRight = modalShow ? "17px" : "0";
		document.body.style.overflowY = overflowY;
		document.body.style.paddingRight = paddingRight;
	},
	render:function(){
		this.bodyOverflow(this.state.loginModalShow);
		return (
			<div>
				<Header modalToggle={this.modalToggle} />
				<HeaderNav />
				<Container />
				<Footer />
				<LoginModal modalToggle={this.modalToggle} toggle={this.state.loginModalShow} />
			</div>
		)
	}
})

ReactDOM.render(
	<App />,
	document.getElementById("root")
)
