import React from 'react'
import './App.css'
import {useEffect,useState} from "react"

function User(props) {


useEffect(() => {
  console.log("This is Data Effect component" +props.data)
},[props.data]);

useEffect(() => {
    console.log("This is Count Effect component" +props.count)
  },[props.count]);   
  return (
    <div className='App'>
         <h1>User Component !!!</h1>
        <h2>count Props :{props.count}</h2>
        <h3>data Props : {props.data}</h3>

      
    </div>
  )
}

export default User;


