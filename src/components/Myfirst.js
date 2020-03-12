import React from "react";
import Button from "./Button"

class Myfirst extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//        header: "Header from state...",
//        content: "Content from state..."
//     }
//  }
  render() {
    const items = this.createdynamicelement(5);
    return (
      <div>
        <ul>{items}</ul>
      </div>
    );
  }

  createdynamicelement(n) {
    let items = [];
    for (let i = 0; i < n; i++) {
      items.push(
        <li key={i}>
          <Button key={i} name = {i} />
        </li>
      );
    }
    return items;
  }
}
// class Button extends React.Component {
//     state = {  }
//     render() { 
//         return ( <button>Button-{this.props.name}</button> );
//     }
// }
export default Myfirst;



