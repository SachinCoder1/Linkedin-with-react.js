import React from 'react'
import styled from 'styled-components'

export default function MainRight() {
    return (
        <RightCont>

            <FirstCont>
                <h4>Linkedin News </h4>

                <News>
                    <ul>
                        <li> <h6> <span>• </span> Making mistakes at work can be OK</h6>
                            <p>10h ago • 284 readers</p></li>
                        <li> <h6><span>• </span>Get noticed by recruiters</h6>
                            <p>1d ago • 5,860 readers</p></li>
                        <li> <h6><span>• </span>15 Big Ideas that will shape 2022</h6>
                            <p>14d ago • 63,614 readers</p></li>
                        <li> <h6><span>• </span>Hiring mode on at IT firms</h6>
                            <p>10h ago • 1,764 readers</p></li>
                        <li> <h6><span>• </span>Why HR heads make great CEOs</h6>
                            <p>6d ago • 6,260 readers</p></li>
                    </ul>


                </News>

            </FirstCont>



        </RightCont>
    )
}

const RightCont = styled.div`

`
const FirstCont = styled.div`
background-color:white;
width:100%;
h4{
    padding:4px 10px;
    color:rgba(0,0,0,0.8);
}
border:1px solid rgba(0,0,0,0.2);
border-radius:10px;


`
const News = styled.div`
li{
padding:2px 10px;
    :hover{
        background-color:rgba(0,0,0,0.1);
        cursor: pointer;
        h6{
     color:rgba(0,0,0,0.9);

        }


    }
}
span{
    font-size:25px;
}
 h6{
     font-size:17px;
     font-weight:600;
     color:rgba(0,0,0,0.8);
     padding:5px 1px;
    
 }
 p{
     padding:1px 19px;
     font-size:12px;
     font-weight:400;
     color:rgba(0,0,0,0.6);
 }
`
