import React, { Component,createRef} from 'react'
import "./App.css"

export default class Refee extends Component {
    constructor(){
        super();
        this.inputRef=createRef();


    }
    componentDidMount(){
        console.log(this.inputRef.current.value="100")
    }
    getVal(){
        console.log(this.inputRef.current.value)
        this.inputRef.current.style.color="black"
        this.inputRef.current.style.backgroundColor="blue"


    }
    render() {
        return (
            <div className='App'>
                <h1>Ref component</h1>
                <input type='text' ref={this.inputRef}/>
                <button onClick={()=>this.getVal()}>check-Ref</button>
            </div>
        )
    }
}
