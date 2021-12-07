import React from 'react'
import styled from 'styled-components'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GoogleIcon from '@mui/icons-material/Google';
import { connect } from 'react-redux'
import { signInFunc } from '../actions'
import { useNavigate } from 'react-router-dom';

function Login(props) {
    
    let navigate = useNavigate()
    return (
        <LoginCont>
            {props.user && navigate('/home')}
            <Nav>
                <LeftNav>
                    <span>Linked</span>
                    <LinkedInIcon style={{ fontSize: "30px" }} />
                </LeftNav>
                <RightNav>
                    <p>Join Now</p>
                    <p>Sign In</p>
                </RightNav>
            </Nav>
            <Main>
                <LeftCont>
                    <h2>Welcome to your professional community</h2>
                    <p onClick={() => { props.signIn() }}> <span><GoogleIcon /></span> Sign In With Google</p>
                </LeftCont>
                <img src="/images/loginImage.svg" alt="" />
            </Main>
        </LoginCont>
    )
}

const mapStateToProps = (state) => {
    return {
        user: state.userState.user
    }
}
const mapDispatchToProps = (dispatch) => ({
    signIn: () => dispatch(signInFunc())
})

export default connect(mapStateToProps, mapDispatchToProps)(Login)

const LoginCont = styled.div`
 
`
const Nav = styled.div`
display: flex;
background-color: #F3F6FB;
justify-content: space-between;
padding: 10px 20px; 
`
const LeftNav = styled.div`
color: #0e76a8;
${'' /* width: 60px; */}
display: flex;
align-items: center;
font-size:30px;
cursor: pointer;
span{
    margin-right: -2px;
    font-size: 20px;
}
@media (max-width: 768px) {
    ${'' /* flex-direction: column; */}
    span{

    margin-right: 0px;
    }
  }
`
const RightNav = styled.div`
display: flex;
padding: 5px 5px;
p {
transition: all 250ms ease-in-out;
padding: 10px 25px;
margin: 0px 2px;
cursor: pointer;
:nth-child(1){
    background-color: transparent;
    color: rgba(0,0,0,0.7);
    &:hover{
    color: rgba(0,0,0,9);
    background-color: rgba(0,0,0,0.1)
    

    } 
    @media (max-width: 768px) {
    {
        :nth-child(1){padding: 10px 2px;}
    }
  }
}
    font-weight: 600;
  :nth-child(2){

border: 1px solid #0e76a8;
border-radius: 20px;
color: #0e76a8;
&:hover{
background-color: #0e76f9;
border: 1px solid #0e76f9;
color: white;

}

    }
}

`
const Main = styled.div`
display: flex;
justify-content: center;
align-items: center;
padding: 10px 30px;


h2{
color: #0e76a8;
    font-size: 50px;
    img{
        width: 70%;
        height: 70%;
        object-fit: cover;
    }
}



@media (max-width: 768px) {
    flex-direction:column;

    h2{
        font-size:30px;

    }
    img{
        width:100%;
        height:100%;
    }
    

}

`
const LeftCont = styled.div`

@media (max-width: 768px) {
p{

width: 100%;
}
}

p{
font-size: 23px;
text-align: center;
font-weight: 400;
border: 1px solid black;
border-radius: 50px;
background-color: #F3F6FF;
padding: 10px 20px;
cursor: pointer;
margin: 20px 1px;
display: flex;
align-items: center;
justify-content: center;
transition: all 250ms ease-in-out;

span{
    padding: 0px 5px;
}

&:hover{
    background-color: #0e76a8;
    color: white;
    border: 1px solid white;
}
}
`