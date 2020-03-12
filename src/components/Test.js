import React from 'react';

class Test extends React.Component {
    
      state = {
           data: 
           [
              {
                 "id":1,
                 "name":"Button1",
              },
              {
                 "id":2,
                 "name":"Button2",
              },
              {
                 "id":3,
                 "name":"Button3",
              }
           ]
        }
     
     
     render() {
        return (
           <div>
              <Header/>
                    {/* {this.state.data.map((button, i) => 
                    <Button data = {button} />)} */}
           {/* {this.state.data.map((button, i) => <button>{button.name}</button>)} */}
           
          
           
           </div>
        );
     }
  }
  class Header extends React.Component {
     render() {
        return (
           <div>
              <h1>Header</h1>
           </div>
        );
     }
  }
  class Button extends React.Component {
     render() {
        return (
              <button>{this.props.data.name}</button>
        );
     }
  }
export default Test;