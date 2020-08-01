import React, { Component } from "react";
import { MDBRow, MDBCol, MDBBtn, MDBContainer } from "mdbreact";
import GlobalFields from "../../globalFields";

const textColorClass = "text-light";
class SplashScreen extends Component {
  state = {};
  createEventClicked = () => {
    this.props.createEventClicked();
  };
  render() {
    return (
      <MDBContainer
        className="d-flex justify-content-center align-content-center"
        style={{
          height: "100%",
          width: "100%",
          paddingTop: "17rem",
          zIndex: 10,
        }}
      >
        <MDBRow>
          <MDBCol md="12" className="mb-4 dark-text text-center">
            <h1 className="h1-reponsive dark-text text-uppercase font-weight-bold mb-0 pt-md-5 pt-5 ">
              TITLE
            </h1>
            <hr className="hr-dark my-4" />
            <h5 className="text-uppercase mb-4 dark-text ">
              <strong>subtitle</strong>
            </h5>
            <MDBBtn outline color="black" onClick={this.createEventClicked}>
              Create Event
            </MDBBtn>
            <MDBBtn outline color="black">
              Log In
            </MDBBtn>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    );
  }
}

export default SplashScreen;
