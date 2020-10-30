import { createMedia } from '@artsy/fresnel'
import PropTypes from 'prop-types'
import React, { Component } from 'react'
import Notice from "../NoticeComponent/Notice";
import HeaderTemplate from "../Template/Header"
import { connect } from 'react-redux';


const { MediaContextProvider} = createMedia({
  breakpoints: {
    mobile: 0,
    tablet: 768,
    computer: 1024,
  },
})
const state = {
  banerInformation:{
    title:"의료체계의 혁신 메디텍트",
    subTitle:"간편하고 신속한 의료 지원 서비스",
    isMain:true,
  }
}
class ResponsiveContainer extends Component{
  render(){
    console.log(this.props.isLogin)
    return(
      <MediaContextProvider>
        <HeaderTemplate
          banerInformation={state.banerInformation}
          isLogin={this.props.isLogin}
        >
          {this.props.children}
        </HeaderTemplate>
      </MediaContextProvider>
  
    )
  }
  
}



class MainComponent extends Component  {
  render(){
    console.log(this.props.isLogin + "++++++++++++++++++++")
    return (
      <ResponsiveContainer isLogin={this.props.isLogin}>
        <Notice />
        {/* mri & xray component */}
      </ResponsiveContainer>
    )
  }
}

let mapStateToProps = (state) => {
  return {
      isLogin: state.user.isLogin
  };
}

MainComponent = connect(mapStateToProps)(MainComponent);


export default MainComponent