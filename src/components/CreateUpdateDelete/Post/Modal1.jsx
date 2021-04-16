import React, { Component } from "react";
import CreatePost from "./CreatePost";

class Modal1 extends Component {
  render() {
    return (
        <div style={{ display: this.props.show ? 'flex' : 'none' }} className="Modal">
            <div  className="ModalContent">
            <h1></h1>
                <button onClick={() => this.props.callback()}>CLOSE</button>
                <CreatePost item={this.props.item}/>
            </div>
        </div>
    );
  }
}
export default Modal1;


			