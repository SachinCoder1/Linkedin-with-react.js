import React, { useState } from 'react'
import styled from 'styled-components'
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
// import AddCommentRoundedIcon from '@mui/icons-material/AddCommentRounded';
import AddCommentOutlinedIcon from '@mui/icons-material/AddCommentOutlined';
import ReplyIcon from '@mui/icons-material/Reply';
import IosShareIcon from '@mui/icons-material/IosShare';

export default function Greet() {
    const [isLiked, setisLiked] = useState(false)
    return (
        <GreetCont>
            <IconCont onClick={() => { isLiked ? setisLiked(false) : setisLiked(true) }}>
                {isLiked ? <ThumbUpIcon /> : <ThumbUpOutlinedIcon />}<p>Like</p>
            </IconCont>
            <IconCont>
                <AddCommentOutlinedIcon /><p>Comment</p>
            </IconCont>
            <IconCont>
                <ReplyIcon /><p>Share</p>
            </IconCont>
            <IconCont>
                <IosShareIcon /><p>Send</p>
            </IconCont>
        </GreetCont>
    )
}

const GreetCont = styled.div`
display:flex;
justify-content:space-evenly;
align-items:center;
`
const IconCont = styled.div`
 display:flex;
 justify-content:center;
 padding:10px 20px;
 align-items:center;
 cursor:pointer;
 color: rgba(0,0,0,0.7);
 :hover{
     background-color:rgba(0,0,0,0.1);
 }
 p{
     padding:0px 7px;
 }
`
