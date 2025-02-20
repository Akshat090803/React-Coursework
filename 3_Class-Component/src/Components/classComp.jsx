import { Component } from "react";


export class ClassComp extends Component {
  
  //this is how we mkae state in class Component
  state={
    count:0,
    toggle:false,
    changeColor:false
  }
  
  //updating State
  handleClick=()=>{
    const {toggle}=this.state
    this.setState({
      toggle: !toggle
    });
  }

  handleCount = () => {
    let { count } = this.state;
    this.setState({
      count: count + 1
    });
  }


// componentDidMount //works for the first time when loaded
//whenever page is relaod or for the first time we visit page it will mark toggle true
componentDidMount(){
  this.setState({
    toggle:!this.state.toggle
  })
}
// componentDidUpdate  //after loading any changes to state this will work
componentDidUpdate(prevProp,prevState){
 if(prevState && prevState.count!=this.state.count && this.state.count>=10){
     this.setState({
      ...this.state,
      changeColor:!this.state.changeColor
     })
 }
}

// componentWillUnmount

 

  render(){

    const {toggle , count,changeColor} =this.state
    return (
      <>
      <div>
        <p style={
          {color:changeColor?"red":"white"}
        }>{`${toggle ?"Hello my name is Akshat. My Roll No is 22/486":""}`}</p>
        <button onClick={this.handleClick} style={{display:"inline-block", margin:"12px"}}>{`${this.state.toggle ? "Hide Text" : "Show Text"}`}</button>
        <button onClick={this.handleCount} >Click</button>
        <p>{`Count : ${count} `}</p>
      </div>
      </>
    )
  }
}