import React from "react";
import { connect } from "react-redux";

import Header from "../component/Header.js";
import HeaderNav from "../component/HeaderNav.js"
import Container from "../component/Container.js"
import LoginModal from "../component/LoginModal.js"
import Footer from "../component/Footer.js"


import { toggleLoginModal } from "../action/action.js"


// 容器组件
var App = React.createClass({
	modalToggle:function(e){
		const { loginModalShow,toggleLoginModal } = this.props;

		var visibility = !loginModalShow;
		toggleLoginModal(visibility);
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
		this.bodyOverflow(this.props.loginModalShow);
		return (
			<div>
				<Header modalToggle={this.modalToggle} />
				<HeaderNav />
				<Container store={this.props} />
				<Footer />
				<LoginModal modalToggle={this.modalToggle} toggle={this.props.loginModalShow} />
			</div>
		)
	}
})

function mapStateToProps(state){
	return state;
}

function mapDispatchToProps(dispatch){
	return {
		toggleLoginModal(visibility){
			dispatch(toggleLoginModal(visibility))
		}
	}
}

export default connect(mapStateToProps,mapDispatchToProps)(App);