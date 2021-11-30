import React, { useState } from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'
import AddPost from './AddPost'

// importing material ui icons.

import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';
import InsertPhotoIcon from '@mui/icons-material/InsertPhoto';
import VideocamIcon from '@mui/icons-material/Videocam';
import EventIcon from '@mui/icons-material/Event';
import AssignmentIcon from '@mui/icons-material/Assignment';


function Input(props) {
    const [showPost, setShowPost] = useState(false) // to show inputBox
    return ( 
        
        <PostCont>
            <UpperPost>
                {props.user && props.user.photoURL ? <img src={props.user.photoURL} alt="" style={{ width: "50px" }} /> : <PersonAddAltIcon style={{ fontSize: "50px" }} />}
                <InputPost onClick={()=>setShowPost(true)}><p>Start a post</p></InputPost>
            </UpperPost>
            <IconPost>
                <p onClick={()=>setShowPost(true)}><span><InsertPhotoIcon style={{ color: "green" }} /></span>Photo</p>
                <p onClick={()=>setShowPost(true)}><span><VideocamIcon style={{ color: "#0e76a8" }} /></span>Video</p>
                <p onClick={()=>setShowPost(true)}><span><EventIcon style={{ color: "rgb(231, 163, 62)" }} /></span>Event</p>
                <p onClick={()=>setShowPost(true)}><span><AssignmentIcon style={{ color: "pink" }} /></span>Write article</p>
            </IconPost>
            <AddPost showPost={showPost} setShowPost={setShowPost}/>
        </PostCont>
    )
}

const mapStateToProps = (state) => {
    return {
        user: state.userState.user,
    }
}
export default connect(mapStateToProps)(Input)

const PostCont = styled.div`
background-color:white;
padding:10px 0px;
border:1px solid rgba(0,0,0,0.3);
border-radius:10px;

`

const UpperPost = styled.div`
display:flex;
align-items:center;
padding:10px;
cursor:pointer;
img{
    border-radius: 50%;
}

`
const InputPost = styled.div`
 width:100%;
 border: 1px solid rgba(0,0,0,0.4);
 border-radius: 20px;
 padding:15px 10px;
 margin:3px 10px;
 :hover{
 background-color:rgba(0,0,0,0.2);
 }
`

const IconPost = styled.div`
  display:flex;
  align-items:center;
  justify-content:space-evenly;
  p{
  display:flex;
  align-items:center;
  justify-content:center;
   cursor:pointer;
   padding:10px 10px;
   color:rgba(0,0,0,0.7);
   span{
       padding:0px 10px;
   }

   :hover{
       background-color:rgba(0,0,0,0.1);
       color:rgba(0,0,0,0.9);

   }

  }
`