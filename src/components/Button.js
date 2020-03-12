import React from "react";
class Button extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      header: "Header State",
      content: "Content from state..."
    };
  }
  
  render() {
    return <div><button  onClick={this.handleChangestate}>Button-{this.props.name+this.state.header}</button><Divelement divclass={this.props.name}></Divelement></div>;
  }
 handleChangestate=(e)=>{
     console.log(this.props.name);
    alert(e.target.class);
     this.setState({
        header:'State Changed'
    })
 }

 componentWillMount(){
    //  this.setState({
    //      header:'State Changed'
    //  }
    //  )
 }

}
let buttonStyle = {
    color: "wheat",
    background: "green",
    padding: "20px",
    align:"center",
    width:" 200px",
    margin: "20px 0 20px",
    'font-weight': 'bold',
    display: "none"
  };
class Divelement extends React.Component {
   
       render() { 
           return (<div className={this.props.divclass} style={buttonStyle}>Testing Div</div> );
       }
   }
export default Button;



