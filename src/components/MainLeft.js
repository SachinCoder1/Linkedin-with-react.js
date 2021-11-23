import React, { useState } from 'react'
import styled from 'styled-components'
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import PersonAddAlt1Icon from '@mui/icons-material/PersonAddAlt1';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import AddIcon from '@mui/icons-material/Add';
import { connect } from 'react-redux'

function MainLeft(props) {
    const [openBtn, setopenBtn] = useState(false)
    const isOpen = () => {
        if (openBtn) {
            setopenBtn(false)
        } else {
            setopenBtn(true)
        }
    }

    return (
        <LeftCont>

            <Img>
                <ImgCont>
                    {props.user && props.user.photoURL ? <img src={props.user.photoURL} alt="" style={{ width: "60px" }} /> : <CameraAltIcon style={{ fontSize: "60px", color: "rgba(0,0,0,0.5)" }} />}

                </ImgCont>
            </Img>
            <Info>
                <h5>Welcome, {props.user && props.user.displayName ? props.user.displayName : "There"}!</h5>
                <p>Add a photo</p>

            </Info>
            <button onClick={isOpen}>More</button>

            <hr />

            <MoreCont>



                <Button>
                    <Para>

                        <p>Connections</p>
                        <p>Grow your network</p>
                    </Para>
                    <PersonAddAlt1Icon />
                </Button>
                <hr />
                <Button>
                    <Para>

                        <p>Access exclusive tools & insights</p>
                        <p> <span><WorkspacePremiumIcon style={{ color: "rgb(231, 163, 62)" }} /></span> Try premium for free</p>
                    </Para>
                </Button>
                <hr />

                <Button>
                    <Para>

                        <p> <span><BookmarkIcon /></span>My Items</p>
                    </Para>
                </Button>

                <SecondLeft>
                    <Text>
                        <p>Groups</p>
                        <p>Events <span><AddIcon /></span> </p>
                        <p>Followed Hashtags</p>
                    </Text>
                </SecondLeft>
                </MoreCont>

                {
                    openBtn &&
                    <>



                        <Button>
                            <Para>

                                <p>Connections</p>
                                <p>Grow your network</p>
                            </Para>
                            <PersonAddAlt1Icon />
                        </Button>
                        <hr />
                        <Button>
                            <Para>

                                <p>Access exclusive tools & insights</p>
                                <p> <span><WorkspacePremiumIcon style={{ color: "rgb(231, 163, 62)" }} /></span> Try premium for free</p>
                            </Para>
                        </Button>
                        <hr />

                        <Button>
                            <Para>

                                <p> <span><BookmarkIcon /></span>My Items</p>
                            </Para>
                        </Button>

                        <SecondLeft>
                            <Text>
                                <p>Groups</p>
                                <p>Events <span><AddIcon /></span> </p>
                                <p>Followed Hashtags</p>
                            </Text>
                        </SecondLeft>
                    </>
                }



        </LeftCont>

    )
}

const mapStateToProps = (state) => {
    return {
        user: state.userState.user,
    }
}
export default connect(mapStateToProps)(MainLeft)

// const LeftMain = styled.div`

// `

const LeftCont = styled.div`
position:relative;
background-color:white;
border:1px solid rgba(0,0,0,0.2);
border-radius:10px;
max-height:600px;
img{
    border-radius: 50%;
}
 & > hr{
    border-color: rgba(0,0,0,0.1);
}

button{
    display:none;
    text-align:center;
    margin:5px auto;
    padding:7px 20px;
    cursor:pointer;
    transition:all 250ms ease;

    color:black;
    background-color:rgba(0,0,0,0.2);
    border-radius:10px;
    ${'' /* border:1px solid rgba(0,0,0,0.7); */}
    &:hover{
        background-color:rgba(0,0,0,0.4);
    }
    @media (max-width:768px){
        display:block;
    }
}


`

const MoreCont = styled.div`
@media (max-width:768px){
    display:none;
}
`
const Info = styled.div`
h5{
    margin-top:70px;
    text-align:center;
    font-size:18px;
    color:rgba(0,0,0,0.7);
    cursor:pointer;

    :hover{
        text-decoration:underline;
    }

    @media (max-width:768px){
        margin-top:100px;
    }
}
p{
    text-align:center;
    font-size:18px;
    color: #0e76a8;
    cursor:pointer;
    padding:5px 0px;
    
    :hover{
        text-decoration:underline;
    }
}
`
const Img = styled.div`
   width: 100%;
   background-color: rgba(0,0,0,0.4);
   height:10%;
   text-align:center;
   display:flex;
   justify-content:center;
   align-items:center;
   overflow:hidden;

`

const ImgCont = styled.div`
position:absolute;
background-color:white;
border-radius:50%;
padding:10px;
top:30px;
cursor:pointer;

@media (max-width:768px){
        position:absolute;
        top:5px;
background-color:white;
border-radius:50%;
cursor:pointer;
}
`

const Button = styled.div`
 display:flex;
 justify-content:space-between;
 align-items:center;
padding:10px 5px;
background-color:transparent;
transition:all 10ms ease-in-out;
cursor:pointer;
margin:10px 0px;
&:hover{
    background-color:rgba(0,0,0,0.2);
}
`
const Para = styled.div`
p{
    display:flex;
    align-items:center;
    :nth-child(1){
        color:rgba(0,0,0,0.7);
    }
}
`

const SecondLeft = styled.div`
 background-color:white;
 color:#0e76a8;
 margin-top:10px;
 border-top:1px solid rgba(0,0,0,0.3);
 padding:20px 0px;
`
const Text = styled.div`
p{
    padding:1px 5px;
    cursor:pointer;
        text-decoration:none;
font-weight:600;
    :hover{
        text-decoration:underline;
    }

:nth-child(2){
    display:flex;
    justify-content:space-between;
    align-items:center;
}
}
`

