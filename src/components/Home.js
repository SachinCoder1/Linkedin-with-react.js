import React from 'react'
import styled from 'styled-components'
import MainCenter from './MainCenter'
import MainLeft from './MainLeft'
import MainRight from './MainRight'
import {connect} from 'react-redux'

function Home() {

    return (
        <MainCont>
            <MainLeft />
            <MainCenter />
            <MainRight />
        </MainCont>
    )
}

const mapStateToProps = (state)=>{
    return {
        user: state.userState.user
    }
}
export default connect(mapStateToProps)(Home)

const MainCont = styled.div`
margin-top: 70px;
min-height: 100vh;
background-color: #f3f2ef;
display: grid;
grid-template-columns: 1.2fr 3fr 1.5fr;
color: black;
grid-gap:20px;
padding:10px 110px;
z-index: -1;
@media (max-width:768px){
    display:flex;
    flex-direction:column;
    width:100%;
    padding:10px 1px;
}

`
