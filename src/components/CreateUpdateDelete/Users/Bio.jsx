//**BIO**
import React, { Component } from "react";
import axios from "axios";
import { Router, Link, navigate } from "@reach/router";
import User from "../Users/User";

var imageSpacing = {
  width: "295px",
  position: "fixed",
  objectFit: "cover",
  margin: "35px 35px",
  height: "400px",
  opacity: "80%",
}

var eyeSee = {
  position: "fixed",
  zIndex: "2",
  margin: "0px 35px",
  width: "300px",
}

var backButton = {
  position: "fixed",
  zIndex: "2",
  // width: "300px",
}

var nameSpacing = {
  marginTop: "320px",
  marginLeft: "20px",
  // marginTop: "50px",
  position: "fixed",
  color: "#CE2E4A",
  fontSize: "70px",
  textTransform: "uppercase",

}

var titleSpacing = {
  marginLeft: "30px",
  paddingTop: "500px",
  // color: "#CE2E4A",
  color: "#1f1f1f",
  textTransform: "uppercase",
  width: "260px",
}

var userSpacing = {
  // marginLeft: "30px",
  fontSize: "20px",
  position: "fixed",
  left: "30px",
  bottom: "320px",
  color: "#CE2E4A",
}

var footer = {
  backgroundColor: "#1f1f1f",
  width: "100vw",
  height: "15px",
  position: "fixed",
  bottom: "0",
}

var logoBottom = {
  position: "fixed",
  bottom: "25px",
  left: "35px",
}

var bgColor = {
  backgroundColor: "#D8D0C9",
  height: "100vh",
  width: "100vw",
  position: "fixed"
}


var buttons = {
  backgroundColor: "#FF5F5F",
  color: "white",
  border: "0px",
  padding: "5px",
  marginLeft: "35px",
  // position: "fixed",
  marginTop: "150px",
};

class Bio extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userbio: {
        // username: "",
        // about: "",
        // city: "",
        // country: "",
        // title: "",
      },
      // console.log(this.props.location.state.username),
    };
  }

  navigateBack() {
    window.location.reload(false);
  }

  deletePost = (e) => {
    console.log(this.props.item._id)
    axios.delete(`http://localhost:4000/api/bss_username/${this.props.item._id}`).then(
      (res) => {
        console.log(res);
        if (res.statusText === "OK") {
          alert("Successful Deletion");
        } else {
          alert("Nothing was Deleted")
        }
      }
    );

    // console.log(this.props.item._id)
    // axios.delete(`http://localhost:4000/api/bss_username/${this.props.item.title}`).then(
    //   (res) => {
    //     console.log(res);
    //     if (res.statusText === "OK") {
    //       alert("Successful Deletion");
    //     } else {
    //       alert("Nothing was Deleted")
    //     }
    //   }
    // );
  }

  // componentDidMount() {
  //   axios
  //   .get(`http://localhost:4000/api/bss_username/${this.state.title}`)
  //     .then((res) => {
  //       // console.log(this.state.title);
  //       // console.log(res.data);
  //       this.setState({ userbio: res.data });
  //     });
  // }

  // shipID = (evt) => {
  //   console.log(this.props.location.state.id);
  //   this.setState({ id: this.props.location.state.id });
  // };

  render() {
    // console.table(this.state.userbio);
    // console.log(this.state.username);

    return (
      <div style={bgColor}>
        {/* <User
          title={this.state.userbio.title}
          // about={this.state.userbio.about}
          // city={this.state.userbio.city}
          // country={this.state.userbio.country}
        /> */}
        {/* <h1>post</h1> */}

        <svg style={ eyeSee } width="369" height="332" viewBox="0 0 369 332" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0.702 0.175999H14.387V3.971H5.785V6.156H13.145V9.79H5.785V12.205H14.548V16H0.702V0.175999Z" fill="black" />
          <path d="M354.702 0.175999H368.387V3.971H359.785V6.156H367.145V9.79H359.785V12.205H368.548V16H354.702V0.175999Z" fill="black" />
          <path d="M361.349 314.9C363.373 314.9 365.037 315.314 366.34 316.142C367.643 316.955 368.31 318.166 368.341 319.776V320.052H363.58V319.96C363.58 319.5 363.411 319.117 363.074 318.81C362.737 318.503 362.223 318.35 361.533 318.35C360.858 318.35 360.337 318.45 359.969 318.649C359.616 318.848 359.44 319.094 359.44 319.385C359.44 319.799 359.685 320.106 360.176 320.305C360.667 320.504 361.456 320.711 362.545 320.926C363.818 321.187 364.86 321.463 365.673 321.754C366.501 322.03 367.222 322.49 367.835 323.134C368.448 323.778 368.763 324.652 368.778 325.756C368.778 327.627 368.142 329.014 366.869 329.919C365.612 330.824 363.925 331.276 361.809 331.276C359.34 331.276 357.416 330.862 356.036 330.034C354.671 329.206 353.989 327.742 353.989 325.641H358.796C358.796 326.438 359.003 326.975 359.417 327.251C359.831 327.512 360.475 327.642 361.349 327.642C361.993 327.642 362.522 327.573 362.936 327.435C363.365 327.297 363.58 327.013 363.58 326.584C363.58 326.201 363.342 325.917 362.867 325.733C362.407 325.534 361.648 325.327 360.59 325.112C359.302 324.836 358.236 324.552 357.393 324.261C356.55 323.954 355.814 323.456 355.185 322.766C354.556 322.076 354.242 321.141 354.242 319.96C354.242 318.227 354.909 316.955 356.243 316.142C357.592 315.314 359.294 314.9 361.349 314.9Z" fill="black" />
          <path d="M186.523 16H181.44V9.859L175.161 0.175999H181.003L184.039 5.443H184.131L187.167 0.175999H192.71L186.523 9.859V16Z" fill="black" />
          <path d="M354.702 156.176H368.387V159.971H359.785V162.156H367.145V165.79H359.785V168.205H368.548V172H354.702V156.176Z" fill="black" />
          <path d="M325.152 37.6C325.8 37.6 326.36 37.704 326.832 37.912C327.312 38.112 327.68 38.4 327.936 38.776C328.2 39.152 328.332 39.588 328.332 40.084C328.332 40.548 328.216 40.968 327.984 41.344C327.752 41.72 327.46 42.052 327.108 42.34C326.756 42.628 326.272 42.98 325.656 43.396C325.312 43.62 325.032 43.812 324.816 43.972H328.428V46H321.588V45.424C321.588 45 321.684 44.624 321.876 44.296C322.076 43.96 322.364 43.624 322.74 43.288C323.124 42.952 323.676 42.496 324.396 41.92C324.972 41.464 325.376 41.116 325.608 40.876C325.84 40.636 325.956 40.4 325.956 40.168C325.956 39.92 325.868 39.712 325.692 39.544C325.524 39.376 325.268 39.292 324.924 39.292C324.564 39.292 324.28 39.396 324.072 39.604C323.864 39.812 323.76 40.084 323.76 40.42V40.66H321.624C321.616 40.596 321.612 40.508 321.612 40.396C321.612 39.532 321.912 38.852 322.512 38.356C323.12 37.852 324 37.6 325.152 37.6ZM325.008 50.6C326.296 50.6 327.2 50.968 327.72 51.704C328.248 52.432 328.512 53.488 328.512 54.872C328.512 56.256 328.248 57.316 327.72 58.052C327.2 58.78 326.296 59.144 325.008 59.144C323.712 59.144 322.8 58.78 322.272 58.052C321.752 57.316 321.492 56.256 321.492 54.872C321.492 53.488 321.752 52.432 322.272 51.704C322.8 50.968 323.712 50.6 325.008 50.6ZM325.008 52.22C324.592 52.22 324.296 52.38 324.12 52.7C323.944 53.02 323.856 53.544 323.856 54.272V55.46C323.856 56.196 323.944 56.724 324.12 57.044C324.296 57.364 324.592 57.524 325.008 57.524C325.424 57.524 325.716 57.364 325.884 57.044C326.052 56.724 326.136 56.196 326.136 55.46V54.272C326.136 53.536 326.052 53.012 325.884 52.7C325.716 52.38 325.424 52.22 325.008 52.22ZM325.152 63.6C325.8 63.6 326.36 63.704 326.832 63.912C327.312 64.112 327.68 64.4 327.936 64.776C328.2 65.152 328.332 65.588 328.332 66.084C328.332 66.548 328.216 66.968 327.984 67.344C327.752 67.72 327.46 68.052 327.108 68.34C326.756 68.628 326.272 68.98 325.656 69.396C325.312 69.62 325.032 69.812 324.816 69.972H328.428V72H321.588V71.424C321.588 71 321.684 70.624 321.876 70.296C322.076 69.96 322.364 69.624 322.74 69.288C323.124 68.952 323.676 68.496 324.396 67.92C324.972 67.464 325.376 67.116 325.608 66.876C325.84 66.636 325.956 66.4 325.956 66.168C325.956 65.92 325.868 65.712 325.692 65.544C325.524 65.376 325.268 65.292 324.924 65.292C324.564 65.292 324.28 65.396 324.072 65.604C323.864 65.812 323.76 66.084 323.76 66.42V66.66H321.624C321.616 66.596 321.612 66.508 321.612 66.396C321.612 65.532 321.912 64.852 322.512 64.356C323.12 63.852 324 63.6 325.152 63.6ZM328.488 83.152V85H322.26V83.152H324.216V79.42H322.26V78.028C322.796 77.996 323.396 77.856 324.06 77.608C324.724 77.352 325.304 77.06 325.8 76.732H326.604V83.152H328.488Z" fill="#1F1F1F" />
        </svg>

        <svg style={ backButton } onClick={this.navigateBack} width="128" height="122" viewBox="0 0 128 122" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M64.9237 1L1 63.8877L59.0532 121L66.5289 113.62L21.277 69.1016H127V58.6738H21.277L72.3994 8.37989L64.9237 1Z" stroke="black" />
        </svg>

        <img style={imageSpacing} src={this.props.item.filepath} alt="" />
        <h1 style={nameSpacing}>{this.props.item.name}</h1>
        <h1 style={titleSpacing}>{this.props.item.title}</h1>
        <h1 style={userSpacing}>{this.props.item.username}</h1>


        <button style={buttons}>UPDATE</button>
        <button style={buttons} onClick={this.deletePost}>DELETE</button>


        <svg style={logoBottom} width="168" height="33" viewBox="0 0 168 33" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8.04 3C10.08 3 11.6933 3.51333 12.88 4.54C14.0667 5.55333 14.66 7.00667 14.66 8.9H10.44C10.44 8.1 10.2267 7.46667 9.8 7C9.38667 6.53333 8.79333 6.3 8.02 6.3C7.12667 6.3 6.46667 6.58 6.04 7.14C5.62667 7.7 5.42 8.48 5.42 9.48V10.76C5.42 11.7467 5.62667 12.5267 6.04 13.1C6.46667 13.66 7.11333 13.94 7.98 13.94C8.83333 13.94 9.48 13.72 9.92 13.28C10.36 12.84 10.58 12.22 10.58 11.42H14.66C14.66 13.3 14.08 14.74 12.92 15.74C11.7733 16.74 10.1467 17.24 8.04 17.24C5.69333 17.24 3.91333 16.64 2.7 15.44C1.5 14.24 0.9 12.4667 0.9 10.12C0.9 7.77333 1.5 6 2.7 4.8C3.91333 3.6 5.69333 3 8.04 3ZM23.8864 3C26.2597 3 28.0931 3.60667 29.3864 4.82C30.6797 6.03333 31.3264 7.8 31.3264 10.12C31.3264 12.44 30.6797 14.2067 29.3864 15.42C28.0931 16.6333 26.2597 17.24 23.8864 17.24C21.5131 17.24 19.6797 16.64 18.3864 15.44C17.1064 14.2267 16.4664 12.4533 16.4664 10.12C16.4664 7.78667 17.1064 6.02 18.3864 4.82C19.6797 3.60667 21.5131 3 23.8864 3ZM23.8864 6.3C22.9397 6.3 22.2197 6.58667 21.7264 7.16C21.2331 7.73333 20.9864 8.50667 20.9864 9.48V10.76C20.9864 11.7333 21.2331 12.5067 21.7264 13.08C22.2197 13.6533 22.9397 13.94 23.8864 13.94C24.8331 13.94 25.5531 13.6533 26.0464 13.08C26.5531 12.5067 26.8064 11.7333 26.8064 10.76V9.48C26.8064 8.50667 26.5531 7.73333 26.0464 7.16C25.5531 6.58667 24.8331 6.3 23.8864 6.3ZM45.5266 17V12.04C45.5266 11.4267 45.5466 10.8 45.5866 10.16C45.6399 9.50667 45.6932 8.96 45.7466 8.52C45.7999 8.08 45.8332 7.8 45.8466 7.68H45.7666L43.2266 17H39.7666L37.2066 7.7H37.1266C37.1399 7.82 37.1732 8.1 37.2266 8.54C37.2932 8.96667 37.3532 9.50667 37.4066 10.16C37.4599 10.8 37.4866 11.4267 37.4866 12.04V17H33.4266V3.24H39.6666L41.7466 11.18H41.8266L43.8866 3.24H49.9066V17H45.5266ZM52.5933 3.24H64.4933V6.54H57.0133V8.44H63.4133V11.6H57.0133V13.7H64.6333V17H52.5933V3.24Z" fill="#1F1F1F"/>
<path d="M0.11 25.14H1.11L2.49 29.98C2.53667 30.1333 2.62333 30.4833 2.75 31.03H2.8L3 29.98L4.06 25.14H5.42L6.52 29.98L6.73 31.03H6.78C6.91333 30.4833 7.00333 30.1333 7.05 29.98L8.38 25.14H9.33L7.35 32H6.04L4.96 27.19C4.9 26.91 4.82333 26.5367 4.73 26.07H4.68C4.6 26.5767 4.53333 26.95 4.48 27.19L3.4 32H2.09L0.11 25.14ZM9.55336 25.14H10.5534L11.9334 29.98C11.98 30.1333 12.0667 30.4833 12.1934 31.03H12.2434L12.4434 29.98L13.5034 25.14H14.8634L15.9634 29.98L16.1734 31.03H16.2234C16.3567 30.4833 16.4467 30.1333 16.4934 29.98L17.8234 25.14H18.7734L16.7934 32H15.4834L14.4034 27.19C14.3434 26.91 14.2667 26.5367 14.1734 26.07H14.1234C14.0434 26.5767 13.9767 26.95 13.9234 27.19L12.8434 32H11.5334L9.55336 25.14ZM18.9967 25.14H19.9967L21.3767 29.98C21.4234 30.1333 21.5101 30.4833 21.6367 31.03H21.6867L21.8867 29.98L22.9467 25.14H24.3067L25.4067 29.98L25.6167 31.03H25.6667C25.8001 30.4833 25.8901 30.1333 25.9367 29.98L27.2667 25.14H28.2167L26.2367 32H24.9267L23.8467 27.19C23.7867 26.91 23.7101 26.5367 23.6167 26.07H23.5667C23.4867 26.5767 23.4201 26.95 23.3667 27.19L22.2867 32H20.9767L18.9967 25.14ZM28.3221 30.92H29.3221V32H28.3221V30.92ZM30.9853 25.14H36.2653V25.97H31.9353V28.08H35.8253V28.91H31.9353V31.17H36.3253V32H30.9853V25.14ZM39.7352 29.16L37.0252 25.14H38.1752L40.2152 28.28H40.2652L42.2952 25.14H43.3852L40.6852 29.16V32H39.7352V29.16ZM44.3252 25.14H49.6052V25.97H45.2752V28.08H49.1652V28.91H45.2752V31.17H49.6652V32H44.3252V25.14ZM53.5251 32.12C52.6917 32.12 52.0117 31.9533 51.4851 31.62C50.9584 31.2867 50.6951 30.7667 50.6951 30.06L50.7051 29.86H51.6451C51.6317 29.9533 51.6251 30.0233 51.6251 30.07C51.6251 30.4767 51.7917 30.7867 52.1251 31C52.4651 31.2067 52.9151 31.31 53.4751 31.31C54.1017 31.31 54.5817 31.2133 54.9151 31.02C55.2484 30.82 55.4151 30.5367 55.4151 30.17C55.4151 29.9233 55.3284 29.72 55.1551 29.56C54.9817 29.3933 54.7617 29.2633 54.4951 29.17C54.2351 29.0767 53.8817 28.9733 53.4351 28.86C52.8817 28.72 52.4351 28.5867 52.0951 28.46C51.7551 28.3267 51.4651 28.1333 51.2251 27.88C50.9851 27.62 50.8651 27.28 50.8651 26.86C50.8651 26.26 51.1151 25.8033 51.6151 25.49C52.1151 25.1767 52.7551 25.02 53.5351 25.02C54.3151 25.02 54.9484 25.18 55.4351 25.5C55.9217 25.8133 56.1651 26.2967 56.1651 26.95V27.07H55.2351V26.92C55.2351 26.58 55.0784 26.3133 54.7651 26.12C54.4584 25.9267 54.0584 25.83 53.5651 25.83C53.0384 25.83 52.6151 25.91 52.2951 26.07C51.9817 26.23 51.8251 26.47 51.8251 26.79C51.8251 27.0233 51.9084 27.2133 52.0751 27.36C52.2484 27.5067 52.4584 27.6267 52.7051 27.72C52.9584 27.8067 53.3084 27.9067 53.7551 28.02C54.3084 28.16 54.7584 28.2967 55.1051 28.43C55.4584 28.5633 55.7551 28.76 55.9951 29.02C56.2417 29.2733 56.3651 29.6067 56.3651 30.02C56.3651 30.7533 56.1084 31.2867 55.5951 31.62C55.0884 31.9533 54.3984 32.12 53.5251 32.12ZM57.665 25.14H62.945V25.97H58.615V28.08H62.505V28.91H58.615V31.17H63.005V32H57.665V25.14ZM64.3349 25.14H69.6149V25.97H65.2849V28.08H69.1749V28.91H65.2849V31.17H69.6749V32H64.3349V25.14ZM74.0248 32.12C72.9182 32.12 72.0848 31.8267 71.5248 31.24C70.9648 30.6467 70.6848 29.7567 70.6848 28.57C70.6848 27.3833 70.9648 26.4967 71.5248 25.91C72.0848 25.3167 72.9182 25.02 74.0248 25.02C74.9182 25.02 75.6315 25.2433 76.1648 25.69C76.7048 26.13 76.9748 26.7733 76.9748 27.62H76.0048C76.0048 27.0333 75.8282 26.59 75.4748 26.29C75.1282 25.9833 74.6448 25.83 74.0248 25.83C73.2182 25.83 72.6248 26.0433 72.2448 26.47C71.8648 26.8967 71.6715 27.59 71.6648 28.55V28.57C71.6648 29.5367 71.8548 30.2367 72.2348 30.67C72.6148 31.0967 73.2115 31.31 74.0248 31.31C74.6582 31.31 75.1515 31.16 75.5048 30.86C75.8648 30.56 76.0448 30.12 76.0448 29.54H76.9748C76.9748 30.3933 76.7082 31.0367 76.1748 31.47C75.6415 31.9033 74.9248 32.12 74.0248 32.12ZM78.2216 25.14H79.1716V28.08H82.9116V25.14H83.8616V32H82.9116V28.91H79.1716V32H78.2216V25.14ZM88.4584 32.12C87.3518 32.12 86.5184 31.8267 85.9584 31.24C85.3984 30.6467 85.1184 29.7567 85.1184 28.57C85.1184 27.3833 85.3984 26.4967 85.9584 25.91C86.5184 25.3167 87.3518 25.02 88.4584 25.02C89.3518 25.02 90.0651 25.2433 90.5984 25.69C91.1384 26.13 91.4084 26.7733 91.4084 27.62H90.4384C90.4384 27.0333 90.2618 26.59 89.9084 26.29C89.5618 25.9833 89.0784 25.83 88.4584 25.83C87.6518 25.83 87.0584 26.0433 86.6784 26.47C86.2984 26.8967 86.1051 27.59 86.0984 28.55V28.57C86.0984 29.5367 86.2884 30.2367 86.6684 30.67C87.0484 31.0967 87.6451 31.31 88.4584 31.31C89.0918 31.31 89.5851 31.16 89.9384 30.86C90.2984 30.56 90.4784 30.12 90.4784 29.54H91.4084C91.4084 30.3933 91.1418 31.0367 90.6084 31.47C90.0751 31.9033 89.3584 32.12 88.4584 32.12ZM92.6552 25.14H93.6052V28.08H97.3452V25.14H98.2952V32H97.3452V28.91H93.6052V32H92.6552V25.14ZM99.992 30.92H100.992V32H99.992V30.92ZM105.675 32.12C104.569 32.12 103.735 31.8267 103.175 31.24C102.615 30.6467 102.335 29.7567 102.335 28.57C102.335 27.3833 102.615 26.4967 103.175 25.91C103.735 25.3167 104.569 25.02 105.675 25.02C106.569 25.02 107.282 25.2433 107.815 25.69C108.355 26.13 108.625 26.7733 108.625 27.62H107.655C107.655 27.0333 107.479 26.59 107.125 26.29C106.779 25.9833 106.295 25.83 105.675 25.83C104.869 25.83 104.275 26.0433 103.895 26.47C103.515 26.8967 103.322 27.59 103.315 28.55V28.57C103.315 29.5367 103.505 30.2367 103.885 30.67C104.265 31.0967 104.862 31.31 105.675 31.31C106.309 31.31 106.802 31.16 107.155 30.86C107.515 30.56 107.695 30.12 107.695 29.54H108.625C108.625 30.3933 108.359 31.0367 107.825 31.47C107.292 31.9033 106.575 32.12 105.675 32.12ZM112.972 32.12C111.885 32.12 111.042 31.8233 110.442 31.23C109.849 30.63 109.552 29.7433 109.552 28.57C109.552 27.3967 109.849 26.5133 110.442 25.92C111.042 25.32 111.885 25.02 112.972 25.02C114.065 25.02 114.909 25.32 115.502 25.92C116.102 26.5133 116.402 27.3967 116.402 28.57C116.402 29.7367 116.102 30.62 115.502 31.22C114.909 31.82 114.065 32.12 112.972 32.12ZM112.972 31.31C113.765 31.31 114.372 31.0967 114.792 30.67C115.212 30.2367 115.422 29.55 115.422 28.61V28.57C115.415 27.6167 115.202 26.9233 114.782 26.49C114.362 26.05 113.759 25.83 112.972 25.83C112.192 25.83 111.592 26.05 111.172 26.49C110.752 26.9233 110.539 27.6167 110.532 28.57V28.61C110.532 29.55 110.742 30.2367 111.162 30.67C111.582 31.0967 112.185 31.31 112.972 31.31ZM117.655 25.14H119.065L120.705 29.82C120.799 30.0867 120.902 30.43 121.015 30.85H121.055C121.175 30.3833 121.275 30.04 121.355 29.82L123.005 25.14H124.405V32H123.455V27.47L123.475 26.19H123.405C123.352 26.4633 123.295 26.6833 123.235 26.85L121.375 32H120.585L118.755 26.85C118.702 26.71 118.645 26.49 118.585 26.19H118.525L118.545 27.47V32H117.655V25.14Z" fill="#1F1F1F"/>
<path d="M106.48 3.24H110.9V13.48H117.96V17H106.48V3.24ZM126.328 3C128.701 3 130.534 3.60667 131.828 4.82C133.121 6.03333 133.768 7.8 133.768 10.12C133.768 12.44 133.121 14.2067 131.828 15.42C130.534 16.6333 128.701 17.24 126.328 17.24C123.954 17.24 122.121 16.64 120.828 15.44C119.548 14.2267 118.908 12.4533 118.908 10.12C118.908 7.78667 119.548 6.02 120.828 4.82C122.121 3.60667 123.954 3 126.328 3ZM126.328 6.3C125.381 6.3 124.661 6.58667 124.168 7.16C123.674 7.73333 123.428 8.50667 123.428 9.48V10.76C123.428 11.7333 123.674 12.5067 124.168 13.08C124.661 13.6533 125.381 13.94 126.328 13.94C127.274 13.94 127.994 13.6533 128.488 13.08C128.994 12.5067 129.248 11.7333 129.248 10.76V9.48C129.248 8.50667 128.994 7.73333 128.488 7.16C127.994 6.58667 127.274 6.3 126.328 6.3ZM142.988 3C145.361 3 147.195 3.60667 148.488 4.82C149.781 6.03333 150.428 7.8 150.428 10.12C150.428 12.44 149.781 14.2067 148.488 15.42C147.195 16.6333 145.361 17.24 142.988 17.24C140.615 17.24 138.781 16.64 137.488 15.44C136.208 14.2267 135.568 12.4533 135.568 10.12C135.568 7.78667 136.208 6.02 137.488 4.82C138.781 3.60667 140.615 3 142.988 3ZM142.988 6.3C142.041 6.3 141.321 6.58667 140.828 7.16C140.335 7.73333 140.088 8.50667 140.088 9.48V10.76C140.088 11.7333 140.335 12.5067 140.828 13.08C141.321 13.6533 142.041 13.94 142.988 13.94C143.935 13.94 144.655 13.6533 145.148 13.08C145.655 12.5067 145.908 11.7333 145.908 10.76V9.48C145.908 8.50667 145.655 7.73333 145.148 7.16C144.655 6.58667 143.935 6.3 142.988 6.3ZM162.128 3.24H167.608L162.668 8.9L167.708 17H162.488L159.628 11.96L157.228 13.92V17H152.808V3.24H157.228V9.12L162.128 3.24Z" fill="#1F1F1F"/>
<circle cx="85.5" cy="9.5" r="9.5" fill="#CE2E4A"/>
<path d="M85.4512 4.60321C81.7125 4.63079 78.6398 7.80929 77.5671 9.402C78.6398 10.9947 81.7125 14.1732 85.4512 14.2008C89.1899 14.1732 92.2625 10.9947 93.3352 9.402C92.2625 7.80929 89.1899 4.63079 85.4512 4.60321Z" fill="white"/>
<circle cx="85.5" cy="9.50002" r="3.23196" fill="#FFB0B0"/>
<path d="M88.732 9.50003C88.732 10.1392 88.5424 10.7641 88.1873 11.2956C87.8322 11.8271 87.3274 12.2413 86.7368 12.486C86.1463 12.7306 85.4964 12.7946 84.8695 12.6699C84.2426 12.5452 83.6667 12.2374 83.2147 11.7854C82.7627 11.3334 82.4549 10.7575 82.3302 10.1305C82.2055 9.50361 82.2695 8.85377 82.5141 8.26321C82.7587 7.67264 83.173 7.16788 83.7044 6.81275C84.2359 6.45762 84.8608 6.26807 85.5 6.26807V9.50003H88.732Z" fill="#CE2E4A"/>
<path d="M87.7854 11.7854C88.0855 11.4852 88.3235 11.129 88.486 10.7368C88.6484 10.3447 88.732 9.92445 88.732 9.50003H85.5L87.7854 11.7854Z" fill="#FF5F5F"/>
<circle cx="85.4999" cy="9.49991" r="1.66495" fill="#1F1F1F"/>
<circle cx="84.7164" cy="8.5206" r="0.881443" fill="white"/>
</svg>

<div style={footer}></div>
      </div>
      
    );
  }
}
export default Bio;
