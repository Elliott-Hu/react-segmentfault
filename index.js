import React from "react";
import ReactDOM from "react-dom";
import Header from "./component/Header.js";
import HeaderNav from "./component/HeaderNav.js"
import Container from "./component/Container.js"
import LoginModal from "./component/LoginModal.js"
import Footer from "./component/Footer.js"


import store from "./store";
import { toggleLoginModal } from "./action/action.js"

const ROOT_DATA = store.getState();




var App = React.createClass({
	getInitialState:function(){
		return {
			"loginModalShow":this.props.store.loginModalShow,
		}
	},
	modalToggle:function(e){
		var visibility = !this.state.loginModalShow;
		store.dispatch(toggleLoginModal(visibility));
		this.setState({"loginModalShow":store.getState().loginModalShow});
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
				<Container store={this.props.store} />
				<Footer />
				<LoginModal modalToggle={this.modalToggle} toggle={this.state.loginModalShow} />
			</div>
		)
	}
})

ReactDOM.render(
	<App store={ROOT_DATA} />,
	document.getElementById("root")
)
