import React from 'react'
import styled from 'styled-components'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import SearchIcon from '@mui/icons-material/Search';
import HomeIcon from '@mui/icons-material/Home';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import WorkIcon from '@mui/icons-material/Work';
import MapsUgcIcon from '@mui/icons-material/MapsUgc';
import NotificationsIcon from '@mui/icons-material/Notifications';
import PersonIcon from '@mui/icons-material/Person';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import WidgetsIcon from '@mui/icons-material/Widgets';
import { connect } from 'react-redux'
import { signOutApi } from '../actions'

function Navbar(props) {
    return (
        <NavbarCont>
            <LeftCont>
                <LinkedInIcon style={{ fontSize: "40px", color: "#0e76a8" }} />
                <Search>

                    <span><SearchIcon /></span>  <input type="text" placeholder='Search' />
                </Search>
            </LeftCont>

            <MenuCont>
                <MainIcons>
                    <HomeIcon style={{ fontSize: "30px" }} />
                    <span>Home</span>
                </MainIcons>
                <MainIcons>
                    <PeopleAltIcon style={{ fontSize: "30px" }} />
                    <span>My Network</span>
                </MainIcons>
                <MainIcons>
                    <WorkIcon style={{ fontSize: "30px" }} />
                    <span>Jobs</span>
                </MainIcons>
                <MainIcons>
                    <MapsUgcIcon style={{ fontSize: "30px" }} />
                    <span>Messages</span>
                </MainIcons>
                <MainIcons>
                    <NotificationsIcon style={{ fontSize: "30px" }} />
                    <span>Notifications</span>
                </MainIcons>
                <MainIcons>
                    {props.user && props.user.photoURL ? <img src={props.user.photoURL} style={{ width: "30px" }} alt="" /> : <PersonIcon style={{ fontSize: "30px" }} />}
                    <span> Me <ArrowDropDownIcon /></span>
                    <h6 onClick={() => props.signOut()}>Signout</h6>
                </MainIcons>
                <MainIcons>
                    <WidgetsIcon style={{ fontSize: "30px" }} />
                    <span> Work <ArrowDropDownIcon /></span>
                </MainIcons>
            </MenuCont>
        </NavbarCont>
    )
}

const mapStateToProps = (state) => {
    return {
        user: state.userState.user,
    }
}

const mapDispatchToProps = (dispatch) => {
    return ({
        signOut: () => dispatch(signOutApi())
    })
}

export default connect(mapStateToProps, mapDispatchToProps)(Navbar)

// Navbar Container


const NavbarCont = styled.div`
z-index:1;
background-color: white;
position: fixed;
top:0;
left: 0;
right: 0;
padding: 1px 10px;
display:flex;
justify-content: space-around;
overflow: hidden;
@media (max-width:768px){

span{
    display:none;

}
.MuiSvgIcon-root{
    font-size:10px;
}

}
`

// Left 


const LeftCont = styled.div`
display: flex;
align-items: center;

`
const Search = styled.div`
display: flex;
align-items: center;
position: relative;
input{
    width: 20vw;
    padding: 10px 30px;
    border: none;
    outline: none;
    background-color: #F3F6FB;
}
span{
    position: absolute;
    left: 5px;
    font-size: 5px;
}

@media (max-width:768px){
    display:none;
    
}
`

// Main


const MenuCont = styled.div`
display: flex;
`
const MainIcons = styled.div`
display: flex;
align-items: center;
justify-content: center;
flex-direction:column;
padding: 5px 15px;
cursor: pointer;
span{
    padding: 1px 0px;
}
color: rgba(0,0,0,0.6);
:nth-child(1){
    color: rgba(0,0,0,0.9);

}
:nth-child(7){
    
    span{
    display: flex;
        align-items: center;
        ${'' /* position: relative; */}
       
    }
}
:nth-child(6){
    img{
        border-radius: 50%;
    }
    span{
        display: flex;
        align-items: center;
        position: relative;
     

      ${'' /* height:40px; */}
    }
  h6{
      visibility: hidden;
     text-decoration: none;
     position: absolute;
     bottom: 0px;
     font-size:20px;
  }
    :hover{ 
        h6{
     visibility: visible;

        }

    }

}
&:hover{
    color: rgba(0,0,0,0.9);
}

`

