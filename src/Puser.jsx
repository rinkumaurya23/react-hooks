import React, { Component } from 'react'
import './App.css'

export default class Puser extends Component {
   

    render() {
        console.log("P_User re rendering ")
        return (
            <div className='App'>
                <h1>Puser Components {this.props.count}  </h1>
               
              
                
            </div>
        )
    }
}
