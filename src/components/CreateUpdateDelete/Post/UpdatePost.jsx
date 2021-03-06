import React, { Component } from "react";
import Axios from "axios";
export default class UpdateModal extends Component {
  constructor(props) {
    super(props);

    this.state = {
      _id: this.props.item._id,
      username: "",
      title: "",
      name: "",
      email: "",
      type_id: this.props.item.type_id,
      filepath: "",
      comment: "",
      showmodal: false,
      success: false,
    };
  }

  componentDidMount() {

    var createURL = "";
    console.log("spot>>>>>>>>>>", this.state.type_id);
    console.log("spot>>>>>>>>>>", this.state._id)
    console.log("spot>>>>>>>>>>", typeof this.state.type_id);

    if (this.state.type_id === "1") {
      createURL = "buildings";
      console.log("build");
    } else if (this.state.type_id === "2") {
      createURL = "streets";
      console.log("street");
    } else if (this.state.type_id === "3") {
      createURL = "surroundings";
      console.log("surround");
    }
    console.log(`http://localhost:4000/api/${createURL}/${this.state._id}`)
    Axios.get(
      `http://localhost:4000/api/${createURL}/${this.state._id}`
    ).then((res) => {
      console.table(res.data);
      this.setState({
        id: res.data.id,
        username: res.data.username,
        name: res.data.name,
        title: res.data.title,
        email: res.data.email,
        type_id: res.data.type_id,
        filepath: res.data.filepath,
      });
    });
  }

  updatePost = (e) => {
    e.preventDefault();

    console.log("heelp!")

    var updateURL = "";
    console.log("spot>>>>>>>>>>", this.state.type_id);
    console.log("spot>>>>>>>>>>", typeof this.state.type_id);
    console.log("spot>>>>>>>>>>", this.state._id);

    if (this.state.type_id === "1") {
      updateURL = "buildings";
      console.log("build");
    } else if (this.state.type_id === "2") {
      updateURL = "streets";
      console.log("street");
    } else if (this.state.type_id === "3") {
      updateURL = "surroundings";
      console.log("surround");
    }

    console.log(`http://localhost:4000/api/${updateURL}/${this.state._id}`);

    Axios.put(
      `http://localhost:4000/api/${updateURL}/${this.state._id}`,
      this.state
    ).then((res) => {
      console.log(res);
      if (res.statusText === "OK") {
        alert("Success - this needs a pretty modal");
      } else {
        alert("Fail - this needs a pretty modal");
      }
    });
  };

  handleTitle = (e) => {
    this.setState({ title: e.target.value });
    console.log({ title: e.target.value })
  };

  handleUserName = (e) => {
    this.setState({ username: e.target.value });
  };

  handleName = (e) => {
    this.setState({ name: e.target.value });
  };

  handleEmail = (e) => {
    this.setState({ email: e.target.value });
  };

  handleTypeID = (e) => {
    this.setState({ type_id: e.target.value });
  };

  handleFilePath = (e) => {
    this.setState({ filepath: e.target.value });
  };

  onClose = (e) => {
    console.log("123");
    this.setState({ showmodal: false });
  };

  testButton = (e) => {
    console.log(">>>>>>>>>>TEST")
  }


  render() {
    return (
      <div className="form-wrapper update-profile">
        <h1>UPDATE</h1>
        <form className="special" onSubmit={this.updatePost}>

          <label>Title:
          <br />
          <input
            className="input"
            type="text"
            name="title"
            onChange={this.handleTitle}
            defaultValue={this.state.title}
          />
          </label>
          <br />

          <label>Username:
          <br />
          <input
            className="input"
            type="text"
            name="username"
            onChange={this.handleUserName}
            defaultValue={this.state.username}
          />
          </label>

          <br />
          <label>Name:
          <br />
          <input
            className="input"
            type="text"
            name="name"
            onChange={this.handleName}
            defaultValue={this.state.name}
          />
          </label>
          <br />

          <label>Email:
          <br />
          <input
            className="input"
            type="text"
            name="email"
            onChange={this.handleEmail}
            defaultValue={this.state.email}
          />
          </label>
          <br />

          <label>Image Link:
          <br />
          <input
            className="input"
            type="text"
            id="filepath"
            name="filepath"
            onChange={this.handleFilePath}
            defaultValue={this.state.filepath}
          />
          </label>
          <br />

          <label>Category:</label>
          <br />
          <label>Buildings:
          <input
            type="radio"
            id="type_id"
            name="category"
            value="1"
            onChange={this.handleTypeID}
            defaultValue={this.state.typeID}
          />
          </label>
          <br />
          

          <label>Streets:
          <input
            type="radio"
            id="type_id"
            name="category"
            value="2"
            onChange={this.handleTypeID}
            defaultValue={this.state.typeID}
          />
          </label>
          <br />

          <label>Surroundings:
          <input
            type="radio"
            id="type_id"
            name="category"
            value="3"
            onChange={this.handleTypeID}
            defaultValue={this.state.typeID}
          />
          </label>
          <br />
        </form>

        <button className="update form-button" onClick={this.updatePost}>Update Post</button>

{/* Emma's Pop-Up Buttons */}
        {/* <div className="delete-form">
          <div className="delete-box">
            <h3>Are you sure you want to update this post?</h3>
            <button className="cancel-button">Go Back</button>
            <button
              className="delete-button"
              onClick={this.testButton}
            >
              Yes
            </button>
          </div>
        </div> */}
      </div>
    );
  }
}
