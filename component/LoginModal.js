import React from "react";

const handleChangeForm = {
	handleChange:function(name,event){
		var newObj = {};
		newObj[name] = event.target.value;
		this.setState(newObj);
	},
	handleCheckboxChange:function(name,event){
		var newObj = {};
		newObj[name] = event.target.checked;
		this.setState(newObj);
	},
	handleSubmit:function(event){
		event.preventDefault();
		console.log(this.state);
	}
}

const SignUpForm = React.createClass({
	mixins:[handleChangeForm],
	getInitialState:function(){
		return {
			"name":"",
			"mail":"",
			"password":"",
		}
	},
	render:function(){
		return (
			<form onSubmit={this.handleSubmit} action="/sign_up" method="POST" className="login_signUp fl clearfix">
				<h3>创建新帐号</h3>
				<label htmlFor="signUp_name">用户名</label>
				<input onChange={this.handleChange.bind(this,"name")} value={this.state.name} id="signUp_name" name="name" placeholder="字母、数字等，用户名唯一" type="input"/>
				<label htmlFor="signUp_mail">Email</label>
				<input onChange={this.handleChange.bind(this,"mail")} value={this.state.mail} id="signUp_mail" name="mail" placeholder="hello@segmentfault.com" type="input"/>
				<label htmlFor="signUp_password">密码</label>
				<input onChange={this.handleChange.bind(this,"password")} value={this.state.password} id="signUp_password" name="password" placeholder="不少于6位" type="password" />
				<div>
					<span className="terms_span">同意并接受<a className="terms_href">《服务条款》</a></span>
					<button className="submit_btn fr" type="submit">注册</button>
				</div>
			</form>
		)
	}
});

const SignInForm = React.createClass({
	mixins:[handleChangeForm],
	getInitialState:function(){
		return {
			"name":"",
			"password":"",
			"remember":false
		}
	},
	componentWillReceiveProps:function(nextProps){
		if(nextProps.toggle){
			this.refs.user_name.focus();
		}
	},
	render:function(){
		return (
			<form onSubmit={this.handleSubmit} action="/sign_in" method="POST" className="login_signIn fr clearfix">
				<h3>用户登录</h3>
				<label htmlFor="login_user">Email</label>
				<input onChange={this.handleChange.bind(this,"name")} value={this.state.name} id="login_user" name="user" ref="user_name" placeholder="hello@segmentfault.com" type="input"/>
				<label htmlFor="login_password">密码</label>
				<input onChange={this.handleChange.bind(this,"password")} value={this.state.password} id="login_password" name="password" placeholder="密码" type="password" />
				<div className="logIn_box">
					<input id="remember" name="remember" className="fl" type="checkbox" checked={this.state.checked} onChange={this.handleCheckboxChange.bind(this,"remember")} />
					<label htmlFor="remember" className="fl">记住登录状态</label>
					<button className="submit_btn fr" type="submit">登录</button>
				</div>
			</form>
		)
	}
});


const LoginModal = React.createClass({
	render:function(){
		return (
			<div style={{"display":this.props.toggle ? "block" : "none"}} className="modal">
				<div className="modal_login">
					<div className="login_header"><h2>登录</h2></div>
					<div className="login_content clearfix">
						<SignUpForm />
						<SignInForm toggle={this.props.toggle} />
					</div>
					<div className="login_footer">
						<a>找回密码</a>
					</div>
				</div>
				<div onClick={this.props.modalToggle} className="modal_shadow"></div>
			</div>
		)
	},
})

export default LoginModal;