import React, { Component } from "react";
import { MDBInput, MDBContainer, MDBRow, MDBCol, MDBBtn } from "mdbreact";

class NamePage extends Component {
  keyPressed(event) {
    if (event.key === "Enter") {
      this.props.continueClicked();
    }
  }
  state = {};
  render() {
    return (
      <MDBContainer
        style={{
          height: "100%",
          width: "100%",
          paddingTop: "17rem",
          zIndex: 10,
        }}
        className="d-flex justify-content-center align-content-center my-3"
      >
        <MDBRow>
          <MDBCol>
            <div className="d-flex align-items-center justify-content-center">
              <h1 className="text-dark">Event Name</h1>
            </div>
            <MDBInput
              className="text-dark"
              label="Event Name"
              group
              type="text"
              onChange={
                this.props.nameValueChanged
                  ? this.props.nameValueChanged.bind(this)
                  : null
              }
              onKeyPress={this.keyPressed.bind(this)}
              autoFocus
            />
            <div className="d-flex align-items-center justify-content-center">
              <MDBBtn onClick={this.props.continueClicked} color="primary">
                Continue
              </MDBBtn>
            </div>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    );
  }
}

export default NamePage;
