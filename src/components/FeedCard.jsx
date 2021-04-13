//**CARD**
//**REACT**
import React, { Component } from "react";
//AXIOS DATA MANAGEMENT
import axios from "axios";
import { Router, Link, navigate } from "@reach/router";
//APP PAGES
import Collection from "./Collection";

// STYLES
var Style1 = {
  backgroundColor: "D8D0C9",
};

var socialStyle = {
  display: "flex",
  // alignContent: "space-between",
  justifyContent: "space-between",
  // marginLeft: "20px",
};

var shareStyle = {
  display: "flex",
  // width: "414px",
  marginRight: "20px",
  marginTop: "5px",
};

var linkStyle = {
  textDecoration: "none",
  color: "#1f1f1f",
  marginTop: "5px",
};

var spacing = {
  marginLeft: "23px",
  marginTop: "5px",
};

class FeedCard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      url: "http://localhost:4000/api/bss",
      fullStack: [],
    };
  }

  componentDidMount() {
    axios.get(this.state.url).then((res) => {
      console.log("app>>>>>>>>");
      console.log(res.data);
      this.setState({ fullStack: res.data.result });
      console.log(res.data.result);
      console.log("app<<<<<<<<");
    });
  }

  shipFilePath = (evt) => {
    console.log("hello filepath");
    console.log(this.props.id, this.props.filepath);
    this.setState({ id: this.props.id, filepath: this.props.filepath });
  };

  render() {
    return (
      <div>
        {this.state.fullStack.map((item, index) => {
          return (
            <div>
              <Collection
                key={index}
                title={item.title}
                name={item.name}
                email={item.email}
                type={item.type_id}
                filepath={item.filepath}
                id={item.id}
              />

              <div style={socialStyle}>
                <div style={socialStyle}>
                  <Link to="/like">
                    <svg
                      style={spacing}
                      width="40"
                      height="25"
                      viewBox="0 0 40 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M24.98 3.5C25.73 3.5 26.41 3.62 27.02 3.86C27.63 4.1 28.11 4.45 28.46 4.91C28.82 5.36 29 5.905 29 6.545C29 7.075 28.895 7.495 28.685 7.805C28.475 8.115 28.16 8.42 27.74 8.72V8.78C28.29 9.09 28.7 9.425 28.97 9.785C29.25 10.135 29.39 10.595 29.39 11.165C29.39 12.135 28.995 12.88 28.205 13.4C27.415 13.92 26.34 14.18 24.98 14.18C23.62 14.18 22.55 13.92 21.77 13.4C21 12.88 20.615 12.135 20.615 11.165C20.615 10.595 20.75 10.135 21.02 9.785C21.29 9.425 21.7 9.09 22.25 8.78V8.72C21.83 8.42 21.515 8.115 21.305 7.805C21.095 7.495 20.99 7.075 20.99 6.545C20.99 5.905 21.165 5.36 21.515 4.91C21.865 4.45 22.34 4.1 22.94 3.86C23.55 3.62 24.23 3.5 24.98 3.5ZM24.98 5.525C24.55 5.525 24.21 5.62 23.96 5.81C23.72 5.99 23.6 6.275 23.6 6.665C23.6 7.045 23.725 7.33 23.975 7.52C24.235 7.7 24.57 7.79 24.98 7.79C25.39 7.79 25.73 7.7 26 7.52C26.27 7.33 26.405 7.045 26.405 6.665C26.405 6.275 26.275 5.99 26.015 5.81C25.755 5.62 25.41 5.525 24.98 5.525ZM24.98 9.695C24.59 9.695 24.26 9.805 23.99 10.025C23.73 10.235 23.6 10.535 23.6 10.925C23.6 11.315 23.725 11.62 23.975 11.84C24.225 12.05 24.56 12.155 24.98 12.155C25.4 12.155 25.74 12.05 26 11.84C26.27 11.62 26.405 11.315 26.405 10.925C26.405 10.535 26.265 10.235 25.985 10.025C25.715 9.805 25.38 9.695 24.98 9.695ZM34.9249 3.5C36.4349 3.5 37.5549 3.915 38.2849 4.745C39.0249 5.565 39.3949 6.845 39.3949 8.585C39.3949 10.555 39.0299 11.98 38.2999 12.86C37.5799 13.74 36.4549 14.18 34.9249 14.18C33.6749 14.18 32.6749 13.88 31.9249 13.28C31.1749 12.67 30.7999 11.81 30.7999 10.7H33.4699V10.805C33.4699 11.195 33.5899 11.52 33.8299 11.78C34.0699 12.03 34.4199 12.155 34.8799 12.155C35.3499 12.155 35.7149 11.995 35.9749 11.675C36.2449 11.345 36.3799 10.905 36.3799 10.355V9.485C36.0899 9.745 35.7449 9.94 35.3449 10.07C34.9449 10.2 34.5649 10.265 34.2049 10.265C33.5149 10.265 32.8899 10.145 32.3299 9.905C31.7799 9.655 31.3449 9.295 31.0249 8.825C30.7049 8.345 30.5449 7.77 30.5449 7.1C30.5449 5.96 30.9349 5.075 31.7149 4.445C32.5049 3.815 33.5749 3.5 34.9249 3.5ZM34.9099 5.525C34.4399 5.525 34.0749 5.655 33.8149 5.915C33.5649 6.165 33.4399 6.525 33.4399 6.995C33.4399 7.465 33.5649 7.83 33.8149 8.09C34.0649 8.34 34.4249 8.465 34.8949 8.465C35.3749 8.465 35.7399 8.345 35.9899 8.105C36.2499 7.855 36.3799 7.495 36.3799 7.025C36.3799 6.555 36.2499 6.19 35.9899 5.93C35.7399 5.66 35.3799 5.525 34.9099 5.525Z"
                        fill="#1F1F1F"
                      />
                      <circle cx="8" cy="8" r="8" fill="#CE2E4A" />
                      <path
                        d="M7.95888 3.87662C4.8105 3.89984 2.22298 6.57647 1.3197 7.9177C2.22298 9.25893 4.8105 11.9356 7.95888 11.9588C11.1073 11.9356 13.6948 9.25893 14.5981 7.9177C13.6948 6.57647 11.1073 3.89984 7.95888 3.87662Z"
                        fill="white"
                      />
                      <circle
                        cx="7.99997"
                        cy="7.99997"
                        r="2.72165"
                        fill="#FFB0B0"
                      />
                      <path
                        d="M10.7216 7.99997C10.7216 8.53826 10.562 9.06446 10.2629 9.51204C9.96388 9.95961 9.53882 10.3085 9.0415 10.5144C8.54418 10.7204 7.99695 10.7743 7.469 10.6693C6.94105 10.5643 6.4561 10.3051 6.07547 9.92447C5.69484 9.54384 5.43563 9.05889 5.33062 8.53094C5.2256 8.00299 5.2795 7.45576 5.48549 6.95844C5.69149 6.46112 6.04033 6.03606 6.4879 5.737C6.93548 5.43794 7.46168 5.27832 7.99997 5.27832V7.99997H10.7216Z"
                        fill="#CE2E4A"
                      />
                      <path
                        d="M9.92447 9.92447C10.1772 9.67174 10.3777 9.37171 10.5144 9.0415C10.6512 8.71129 10.7216 8.35738 10.7216 7.99997H7.99997L9.92447 9.92447Z"
                        fill="#FF5F5F"
                      />
                      <circle
                        cx="8.00008"
                        cy="8.00021"
                        r="1.40206"
                        fill="#1F1F1F"
                      />
                      <circle
                        cx="7.34029"
                        cy="7.17537"
                        r="0.742268"
                        fill="white"
                      />
                    </svg>
                  </Link>
                  <br />
                  <Link to="/comment">
                    <svg
                      style={spacing}
                      width="40"
                      height="25"
                      viewBox="0 0 40 14"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M29.36 9.69V12H21.575V9.69H24.02V5.025H21.575V3.285C22.245 3.245 22.995 3.07 23.825 2.76C24.655 2.44 25.38 2.075 26 1.665H27.005V9.69H29.36ZM35.1949 1.5C36.0049 1.5 36.7049 1.63 37.2949 1.89C37.8949 2.14 38.3549 2.5 38.6749 2.97C39.0049 3.44 39.1699 3.985 39.1699 4.605C39.1699 5.185 39.0249 5.71 38.7349 6.18C38.4449 6.65 38.0799 7.065 37.6399 7.425C37.1999 7.785 36.5949 8.225 35.8249 8.745C35.3949 9.025 35.0449 9.265 34.7749 9.465H39.2899V12H30.7399V11.28C30.7399 10.75 30.8599 10.28 31.0999 9.87C31.3499 9.45 31.7099 9.03 32.1799 8.61C32.6599 8.19 33.3499 7.62 34.2499 6.9C34.9699 6.33 35.4749 5.895 35.7649 5.595C36.0549 5.295 36.1999 5 36.1999 4.71C36.1999 4.4 36.0899 4.14 35.8699 3.93C35.6599 3.72 35.3399 3.615 34.9099 3.615C34.4599 3.615 34.1049 3.745 33.8449 4.005C33.5849 4.265 33.4549 4.605 33.4549 5.025V5.325H30.7849C30.7749 5.245 30.7699 5.135 30.7699 4.995C30.7699 3.915 31.1449 3.065 31.8949 2.445C32.6549 1.815 33.7549 1.5 35.1949 1.5Z"
                        fill="#1F1F1F"
                      />
                      <rect width="16" height="2.26262" fill="#CE2E4A" />
                      <rect
                        y="3.95947"
                        width="10.88"
                        height="2.26262"
                        fill="#FF5F5F"
                      />
                      <rect
                        y="7.91943"
                        width="14.08"
                        height="2.26262"
                        fill="#CE2E4A"
                      />
                      <rect
                        y="11.8789"
                        width="6.26087"
                        height="2.12121"
                        fill="#1F1F1F"
                      />
                    </svg>
                  </Link>
                </div>
                <div style={shareStyle}>
                  <br />
                  <Link style={linkStyle} to="/share">
                    <strong>SHARE</strong>{" "}
                  </Link>
                </div>
              </div>
              <hr />
            </div>
          );
        })}
        {/* <Menu /> */}
      </div>
    );
  }
}
export default FeedCard;
