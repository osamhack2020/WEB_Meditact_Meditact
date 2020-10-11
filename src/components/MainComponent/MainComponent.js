import { createMedia } from '@artsy/fresnel'
import PropTypes from 'prop-types'
import React, { Component } from 'react'
import Notice from "../NoticeComponent/Notice";
import HeaderTemplate from "../Template/Header"


const { MediaContextProvider} = createMedia({
  breakpoints: {
    mobile: 0,
    tablet: 768,
    computer: 1024,
  },
})
const state = {
  banerInformation:{
    title:"군생활을 안전하게 보내자!",
    subTitle:"간편하고 신속한 예약서비스",
    isMain:true,
  }
}
const ResponsiveContainer = ({ children }) => (
  <MediaContextProvider>
    <HeaderTemplate
      banerInformation={state.banerInformation}
    >
      {children}
    </HeaderTemplate>
  </MediaContextProvider>
)

ResponsiveContainer.propTypes = {
  children: PropTypes.node,
}

const MainComponent = () => (
  <ResponsiveContainer>
    <Notice/>
    {/* mri & xray component */}
  </ResponsiveContainer>
)

export default MainComponent