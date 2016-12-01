import React,{ Component } from "react";
import { connect } from "react-redux";


import HeaderNav from "../component/HeaderNav.js"



import NewsBar from "../component/NewsBar.js";
import NewsContainer from "../component/NewsContainer.js";
import Footer from "../component/Footer.js";
import LoginModal from "../component/LoginModal.js"

import NewsHeader from "../container/NewsHeader.js";

import { toggleLoginModal } from "../action/action.js"

class News extends Component {
    constructor(props){
        super(props);
        this.modalToggle = this.modalToggle.bind(this);
        this.bodyOverflow = this.bodyOverflow.bind(this);
    };
    modalToggle(e){
        const { loginModalShow,toggleLoginModal } = this.props;

        var visibility = !loginModalShow;
        toggleLoginModal(visibility);
        e.stopPropagation();
        return false;
    };
    bodyOverflow(modalShow){
        var overflowY = modalShow ? "hidden" : "scroll";
        var paddingRight = modalShow ? "17px" : "0";
        document.body.style.overflowY = overflowY;
        document.body.style.paddingRight = paddingRight;
    };
    render(){
        return (
            <div>
                <NewsBar />
                <NewsHeader modalToggle={this.modalToggle} />
                <NewsContainer store={this.props} />
                <Footer />
                <LoginModal modalToggle={this.modalToggle} toggle={this.props.loginModalShow} />
            </div>
        ) 
    };
}

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

export default connect(mapStateToProps,mapDispatchToProps)(News);