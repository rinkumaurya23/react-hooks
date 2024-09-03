import React, { PureComponent } from 'react'
import './App.css'
import Puser from './Puser';
export default class Pure extends PureComponent {
   constructor(){
    super();
    this.state={
        count:1
    }
   }
    

    render() {
        console.log("Pure Is re Rendering")
    
        return (
            <div className='App'>
                <h1>Pure Components</h1>
                <Puser count={this.state.count}/>
               
                <button onClick={()=>{this.setState({count:1})}}>Button</button>
                
            </div>
        )
    }
}
