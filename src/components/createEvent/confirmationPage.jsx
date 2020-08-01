import React, { Component } from "react";
import { MDBContainer, MDBJumbotron, MDBBtn } from "mdbreact";
import EventOptionsPage from "./eventOptionsPage";

class ConfirmationPage extends Component {
  state = {};
  render() {
    return (
      <MDBContainer
        style={{
          paddingTop: "17rem",
          zIndex: 10,
        }}
        // className="d-flex justify-content-center align-content-center my-3"
      >
        <MDBJumbotron>
          <div className="h3 display-4 d-flex justify-content-center">
            {this.props.name ? this.props.name : "New Event"}
          </div>
          <hr className="my-2 text-dark" />
          <div className="d-flex justify-content-center">
            <h4>
              <strong>Invited</strong>
            </h4>
            <ul>
              {this.props.invitees.map((x) =>
                x.name ? (
                  <li className="lead">{x.name}</li>
                ) : (
                  <li className="lead">{x.email}</li>
                )
              )}
            </ul>
          </div>
          <hr className="my-2" />
          <div className="d-flex justify-content-center">
            <h5>{"On " + this.props.date}</h5>
            <h5>{"At " + this.props.time}</h5>
            {this.props.every ? (
              <h5>
                {"Every " +
                  this.props.every +
                  " for " +
                  this.props.for +
                  " " +
                  this.props.every.toLowerCase() +
                  "s."}
              </h5>
            ) : null}
          </div>

          <div className="d-flex flex-column align-items-center justify-content-center">
            <p className="lead mt-3">
              <MDBBtn onClick={this.props.confirmClicked} color="primary">
                Confirm
              </MDBBtn>
            </p>
          </div>
        </MDBJumbotron>
      </MDBContainer>
    );
  }
}

export default ConfirmationPage;
