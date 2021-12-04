import React, {useEffect} from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from "./components/Home";
import Login from "./components/Login";
import Navbar from "./components/Navbar";
import {getUserAuth} from './actions'
import {connect} from 'react-redux'


function App(props) {
  useEffect(() => {
    props.getUserAuth()
    console.clear()
  }, [])
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route exact path="/home" element={<><Navbar /><Home /></>} />
      </Routes>
    </BrowserRouter>
  ); 
}

const mapStateToProps = (state)=>{
return {}
}
const mapDispatchToProps = (dispatch)=>({
getUserAuth: ()=>dispatch(getUserAuth())
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
