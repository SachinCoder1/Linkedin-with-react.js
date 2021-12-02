import React from 'react'
import styled from 'styled-components'
import Greet from './Greet'
import AppleIcon from '@mui/icons-material/Apple';
import PublicIcon from '@mui/icons-material/Public';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import PanToolIcon from '@mui/icons-material/PanTool';
import ReactPlayer from 'react-player'



export default function Posts(props) {
    return (
        <PostCont>
            <UpperCont>

                <UpperPart>
                    <AppleIcon style={{ fontSize: "50px", marginTop: "10px" }} />
                    <Para>
                        <h6>{props.title}</h6>
                        <p>15,301,792 followers</p>
                        <p>{props.date} • <span><PublicIcon style={{ fontSize: "20px" }} /></span> </p>
                    </Para>
                </UpperPart>
                <MoreHorizIcon />
            </UpperCont>
            <Description>
                <p>{props.description}
                </p>
            </Description>

            <Img>
                {props.imageSrc ? <img src={props.imageSrc} alt="" /> : <ReactPlayer width={"100%"} url={props.video} className="react-player" /> }
            </Img>

            <LikesComment>
                <Likes>
                    <ThumbUpIcon style={{ color: "#0e76a8", fontSize: "13px" }} />
                    <PanToolIcon style={{ color: "green", fontSize: "13px" }} />
                    <span>101</span>
                </Likes>
                <Comments>
                    <p>{props.comment}</p>
                </Comments>
            </LikesComment>
            <hr />
            <GreetCont>
                <Greet />
            </GreetCont>
        </PostCont>
    )
}


const PostCont = styled.div`
background-color:white;
margin:10px 5px;
border:1px solid rgba(0,0,0,0.3);
border-radius:10px;
`
const UpperCont = styled.div`
display:flex;
justify-content:space-between;
padding:2px 10px;
`

const UpperPart = styled.div`
 display:flex;
`
const Para = styled.div`
h6{
font-size:19px;
padding:7px;
color:rgba(0,0,0,0.9);
}
p{
    color: rgba(0,0,0,0.7);
    display:flex;
    align-items:center;
    font-size:11px;
    ${'' /* padding:1px; */}
padding:0px 7px;
}
`
const Description = styled.div`
padding:1px 15px;
 p{
     color:rgba(0,0,0,0.8);
 }
`
const Img = styled.div`
img{ 
    margin:4px 0px;
    width:100%;
    height:100%;
    object-fit:cover;
}
& > div{

    margin:4px 0px;
    object-fit:cover;
    overflow-y:hidden;
}
iframe{
    width:100%;
    height:98%;

}

`
const LikesComment = styled.div`
display:flex;
justify-content:space-between;
position:relative;
padding:3px;
`
const Likes = styled.div`
& .MuiSvgIcon-root{
    cursor:pointer;
    :nth-child(2){
        transform: rotate(-45deg);
    }
    
    
}
span{
        cursor:pointer;
        margin-left:3px;
        color:rgba(0,0,0,0.7);
        :hover{
            color:#0e76a8;
            text-decoration:underline;
        }
    }

`
const Comments = styled.div`
color:rgba(0,0,0,0.7);
cursor:pointer;
padding:1px 10px;
:hover{
    color:#0e76a8;
    text-decoration:underline;
}
`

const GreetCont = styled.div`

`
// const IconCont = styled.div`

// `


