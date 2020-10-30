import PropTypes from 'prop-types'
import { createMedia } from '@artsy/fresnel'
import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import * as Scroll from "react-scroll"
import {
  Button,
  Container,
  Grid,
  Header,
  Icon,
  Menu,
  Segment,
  Visibility,
} from 'semantic-ui-react'
import mainBaner from "../../images/BanerTest/1.png";

const {Media } = createMedia({
  breakpoints: {
    mobile: 0,
    tablet: 768,
    computer: 1024,
  },
})

class HeaderTemplate extends Component {
  constructor(props){
    super(props)
    this.state = {
      banerInformation:{
        title:"",
        subTitle:"",
      },
      currentFocusCategory:0,
      fixed:false,
      scroll:Scroll.animateScroll,
    };
    setInterval(()=>{
      if(document.scrollingElement.scrollTop <= 200){
        this.setState({
          currentFocusCategory:0,
        })
      }
    },500)
    
  }
  hideFixedMenu = () => this.setState({ fixed: false })
  showFixedMenu = () => this.setState({ fixed: true })
  movePage = (currentPage)=>{
    this.setState({
      currentFocusCategory:currentPage,
    })
    if(currentPage === 1){
      this.state.scroll.scrollTo(200)
      console.log(111);
    }
  }
  render() {
    const { children, mobile } = this.props
    const { fixed } = this.state
    const banerImage = this.props.banerInformation.banerImage;
    console.log(banerImage+"+++++++++++++++++++++++");
    
    //페이지 전체 렌더링
    return (
      <Media greaterThan='mobile'>
        <Visibility
          once={false}
          onBottomPassed={this.showFixedMenu}
          onBottomPassedReverse={this.hideFixedMenu}
        >
          <Segment
            textAlign='center'
            style={{ minHeight: 700, padding: '1em 0em'}}
            vertical
          >
            <img src={banerImage || mainBaner} style={{position:"absolute", width:"100%", height:"100%", top:"0", left:"0", zIndex:"-99"}}/>
            <Menu
              fixed={fixed ? 'top' : null}
              inverted={!fixed}
              secondary={!fixed}
              size='large'
            >
              <Container>
                <Link 
                to="/" 
                style={null}> 
                  <Menu.Item as='a' style={{fontSize:"1.3em"}} active={this.state.currentFocusCategory === 0 ? true : false} onClick={()=>this.movePage(0)}>Home</Menu.Item>
                </Link>
                <Link
                to="/information"
                style={null}
                >
                  <Menu.Item as='a' style={{fontSize:"1.3em"}} active={this.state.currentFocusCategory === 2 ? true : false} onClick={()=>this.movePage(2)}>Information</Menu.Item>

                </Link>
                <Menu.Item as='a' style={{fontSize:"1.3em"}} active={this.state.currentFocusCategory === 1 ? true : false} onClick={()=>this.movePage(1)}>Notification</Menu.Item>
                
                <Link 
                to="/reservation" 
                style={null}> 
                  <Menu.Item as='a' style={{fontSize:"1.3em"}} active={this.state.currentFocusCategory === 3 ? true : false} onClick={()=>this.movePage(3)}>
                  Reservation
                  </Menu.Item>
                </Link>
                <Menu.Item position='right'>
                  
                    <Link to={this.props.isLogin ? "/mypage" : "/login"} style={null}>
                        <Button as='a' inverted={!fixed}>
                            {this.props.isLogin ? "My conuslt" : "Login"}
                        </Button>
                    </Link>
                  {this.props.isLogin ? 
                  <></> 
                  : 
                    <Link to="/signup" style={null}>
                      <Button as='a' inverted={!fixed} primary={fixed} style={{ marginLeft: '0.5em' }}>
                        Sign Up
                      </Button>
                    </Link>

                  }

                </Menu.Item>
              </Container>
            </Menu>
            <Container text>
              <Header
                as='h1'
                content={this.props.banerInformation.title}
                inverted
                style={{
                  fontSize: mobile ? '2em' : '4em',
                  fontWeight: 'normal',
                  marginBottom: 0,
                  marginTop: mobile ? '1.5em' : '3em',
                }}
              />
              <Header
                as='h2'
                content={this.props.banerInformation.subTitle}
                inverted
                style={{
                  fontSize: mobile ? '1.5em' : '1.7em',
                  fontWeight: 'normal',
                  marginTop: mobile ? '0.5em' : '1.5em',
                }}
              />
              {this.props.banerInformation.isMain ? 
                <Grid verticalAlign="center" padded="3em">
                  <Link to="/reservation" style={null}>
                    <Button size='huge' content='Red' style={{ backgroundColor:"#F13962", color:"#FCF0F0"}}>
                      진료예약
                      <Icon name='right arrow' />
                    </Button>
                  </Link>
                  <Link to="/mypage" style={null}>
                    <Button size='huge' content='Red' style={{ backgroundColor:"#F13962", color:"#FCF0F0"}}>
                      건강상담
                      <Icon name='right arrow' />
                    </Button>
                  </Link>
                </Grid>
                :
              <></>
              }
                
                

            </Container>
          </Segment>
        </Visibility>
        
        {children}
      </Media>
    )
  }
}

HeaderTemplate.propTypes = {
  children: PropTypes.node,
}

const mapStateToProps = (state) => {
  return {
      selectedDoctorIndex: state.doctor.selectedDoctorIndex,
      isLogin: state.user.isLogin
  };
}
HeaderTemplate = connect(mapStateToProps)(HeaderTemplate);

  
export default HeaderTemplate;
