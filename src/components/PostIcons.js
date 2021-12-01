import React, { useState } from 'react'
import styled from 'styled-components'
import CollectionsIcon from '@mui/icons-material/Collections';
import VideoCameraBackRoundedIcon from '@mui/icons-material/VideoCameraBackRounded';
import ArticleRoundedIcon from '@mui/icons-material/ArticleRounded';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import PollIcon from '@mui/icons-material/Poll';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import MessageOutlinedIcon from '@mui/icons-material/MessageOutlined';




function PostIcons(props) {
    console.clear()
    return (
        <Icons>
           <label htmlFor="file">
           <CollectionsIcon onClick={() => props.setswitchMedia("imageMedia")} />
           </label> 
            <VideoCameraBackRoundedIcon onClick={() => props.setswitchMedia("videoMedia")} />
            <ArticleRoundedIcon />
            <BusinessCenterIcon />
            <PollIcon />
            <MoreHorizIcon />

            <Privacy>
                <MessageOutlinedIcon /> <span>Anyone</span>
            </Privacy>


        </Icons>
    )
}

export default PostIcons

const Icons = styled.div`
display:flex;
align-items:center;

.MuiSvgIcon-root{
    font-size: 46px;
    color:rgba(0,0,0,0.7);
    padding:10px 4px;
    cursor:pointer;
    :hover{

    background-color:rgba(0,0,0,0.1);
    }
    :nth-child(6){
        border-right:1px solid rgba(0,0,0,0.3);
    }
}
`

const Privacy = styled.div`
display:flex;
align-items:center;
    color:rgba(0,0,0,0.7);
    padding:5px 4px;
    cursor:pointer;
    :hover{

background-color:rgba(0,0,0,0.1);
}

   
    
`

const PostBtn = styled.div`
 padding:10px 15px;
 cursor:pointer;
 background-color:blue;
 color:white;
 border:1px solid blue;
 border-radius:10px;
 margin-left:80px;
 margin-top:5px;

 &:hover{
     background-color:transparent;
     color:blue;
 }
`
