import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { MediaApi } from '../actions'
import firebase, { Timestamp } from '../firebase'
import styled from 'styled-components'
import ReactPlayer from 'react-player'
import PostIcons from './PostIcons'
import CloseIcon from '@mui/icons-material/Close';
import PersonIcon from '@mui/icons-material/Person';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import PublicIcon from '@mui/icons-material/Public';



function AddPost(props) {
    const [input, setInput] = useState("");
    const [sharePhoto, setsharePhoto] = useState("")
    const [videoUrl, setvideoUrl] = useState("")
    const [switchMedia, setswitchMedia] = useState("")




    const handleChange = (e) => {
        e.preventDefault();

        let image = e.target.files[0]
        if (image === "" || image === undefined) {
            alert(`the image is a ${typeof image}`)
            return;
        }
        setsharePhoto(image);
    }


    // for media

    const postArticle = (e) => {
        e.preventDefault();
        if (e.target !== e.currentTarget) {
            return;
        }




        const payload = {
            image: sharePhoto,
            video: videoUrl,
            user: props.user,
            description: input,
            timestamp: Timestamp,
        };

        props.postArticle(payload);
        reset(e);
    }
    const reset = (e) => {
        // e.preventDefault()
        setInput("")
        setsharePhoto("")
        setvideoUrl("")
        setswitchMedia("")
    }

    console.clear()




    return (
        <>
            {props.showPost === true && (
                <PostCont>
                    <Post>
                        <UpperCont>
                            <h2>Create a post</h2>
                            <CloseIcon style={{ fontSize: "30px", cursor: "pointer" }} onClick={() => props.setShowPost(false)} />
                        </UpperCont>
                        <hr />
                        <MiddleCont>
                            <UpperPost>
                                <User>
                                    {props.user && props.user.photoURL ? <img src={props.user.photoURL} alt="" style={{ width: "50px" }} /> : <PersonIcon style={{ fontSize: "50px" }} />}
                                    {props.user && props.user.displayName ? <span>{props.user.displayName}</span> : <span>Guest</span>}
                                </User>
                                <NamePrivacy>
                                    <h6> <PublicIcon /> Anyone <ArrowDropDownIcon /></h6>
                                </NamePrivacy>
                            </UpperPost>
                        </MiddleCont>
                        <Input>
                            <textarea placeholder='What do you want to talk about?' value={input} onChange={(e) => { setInput(e.target.value) }}></textarea>
                        </Input>

                        <UploadImage>
                            {
                                <>
                                    {switchMedia === "imageMedia" &&
                                        <>
                                            <input type="file" name="image" style={{display:'none'}} id="file" onChange={handleChange} />

                                            {sharePhoto && <img src={URL.createObjectURL(sharePhoto)} />}

                                        </>
                                    }
                                    <>

                                        {switchMedia === "videoMedia" &&
                                            <>
                                                <input type="text" placeholder='Enter or paste video URL here' value={videoUrl} onChange={(e) => setvideoUrl(e.target.value)} />
                                                {videoUrl && <ReactPlayer width={"100%"} url={videoUrl} />}
                                            </>
                                        }
                                    </>
                                </>
                            }
                        </UploadImage>
                        <HashTag>
                            Add hashtag
                        </HashTag>
                        <IconsCont>
                            <PostIcons setswitchMedia={setswitchMedia} />
                        </IconsCont>
                        <PostBtn>
                            <button disabled={!input.length ? true : false} onClick={(event) => {
                                event.preventDefault();
                                postArticle(event)
                                props.setShowPost(false)
                            }}>Post</button>
                        </PostBtn>


                    </Post>

                </PostCont>
            )
            }
        </>
    )
}

const mapStateToProps = (state) => {
    return {
        user: state.userState.user,
        // articles: state.articleState.articles
    }
}
const mapDispatchToProps = (dispatch) => ({
    postArticle: (payload) => dispatch(MediaApi(payload)),
    // getArticles: () => dispatch(getArticlesApi())
})
export default connect(mapStateToProps, mapDispatchToProps)(AddPost)


const PostCont = styled.div`
position:fixed;
top:0;
left:0;
right:0;
bottom:0;
z-index:99999;
background-color:rgba(0,0,0,0.7);
.MuiSvgIcon-root{
:hover{
background-color:rgba(0,0,0,0.1);
}
}


`

const Post = styled.div`
${'' /* transition: all 300ms ease; */}
animation: fadeIn 250ms ease-in;
${'' /* padding:10px; */}
width:40%;
margin: 30px auto;
background-color:white;
height:100%;
max-height:430px;
border-radius:10px;
border:1px solid rgba(0,0,0,0.7);
hr{

border-color:rgba(0,0,0,0.1);
}
@media(max-width:768px){
    width:95%;
}

`

const MiddleCont = styled.div`

`

const UpperCont = styled.div`
${'' /* position:relative; */}
display:flex;
justify-content:space-between;
    padding:15px 15px;
    color:rgba(0,0,0,0.8);

`

const UpperPost = styled.div`
display:flex;
flex-direction:column;
padding:10px;
height:90px;
cursor:pointer;
position:relative;
img{
    border-radius: 50%;
}

span{
    font-weight:600;
    font-size:20px;
    padding:0px 15px;
    text-transform:capitalize;
}

`

const NamePrivacy = styled.div`
border:1px solid rgba(0,0,0,0.3);
width:20%;
border-radius:20px;
position:absolute;
top:55px;
left:90px;

h6{
    padding:0px 20px;
    display:flex;
align-items:center;
justify-content:center;
    color:rgba(0,0,0,0.7);
    :hover{

background-color:rgba(0,0,0,0.1);
}
}

`
const User = styled.div`
display:flex;
align-items:center;
    padding:5px 5px;
    color:rgba(0,0,0,0.8);

`

const Input = styled.div`
padding:10px 20px;
textarea{
    resize:none;
    width:80%;
    outline:none;
    border:none;
    height:130px;
    font-size:15px;
    line-height:20px;
    ::-webkit-scrollbar {
  display: none;
}
}
`

const HashTag = styled.div`
 padding:10px 15px;
 width:150px;
 cursor:pointer;
 color:white;

     color:blue;
     :hover{

background-color:rgba(0,0,0,0.1);
}
`
const IconsCont = styled.div`

`
const PostBtn = styled.div`
button{
    padding:10px 15px;
 background:#0a66c2;
 border:1px solid blue;
 border-radius:10px;
 color:white;
 cursor:pointer;
 transition: all 250ms ease;
 &:hover{
     background-color:transparent;
     color:#0a66c2;
 }



}
 position:absolute;
 right:440px;
 bottom:240px;
 cursor:pointer;
 color:white;
 margin-top:5px;


@media (max-width:768px){
    
    right:50px;
    top:100px;
    position:absolute;

    
}
`
const UploadImage = styled.div`
input{
    padding:10px 10px;
    margin:4px 5px;
    border-radius:10px;
    border:1px solid rgba(0,0,0,0.4);
}

img{ 
    margin:4px 5px;
    padding:5px 5px;
    width:50%;
    height:50%;
    object-fit:cover;
}
iframe{
    margin:4px 5px;
    padding:5px 5px;
    width:50%;
    height:50%;
    object-fit:cover;

}

`