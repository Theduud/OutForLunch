import React, { Component } from "react";
import InviteeList from "./inviteeList";
import { MDBContainer, MDBInput, MDBRow, MDBCol, MDBBtn } from "mdbreact";
import GlobalFields from "../../globalFields";

const inviteeAry = [];
class InvitePage extends Component {
  deleteItem(text) {
    var newArray = this.state.invitees.slice();
    newArray.filter((x) => x.email == text);
    const index = newArray.findIndex((x) => x.email == text);
    if (index > -1) {
      newArray.splice(index, 1);
    }
    this.setState({ invitees: newArray });
  }
  emailExists(email) {
    for (var i = 0; i < this.state.invitees.length; i++) {
      if (email.toUpperCase() == this.state.invitees[i].email.toUpperCase()) {
        this.setState({
          message: "Email already in list",
          invalidEmail: "true",
          emailStyle: { color: "red" },
        });
        return true;
      }
    }
    return false;
  }
  keyPressed(event) {
    if (event.key === "Enter") {
      this.addListItem();
    }
  }
  addListItem() {
    this.setState({ emailFocus: "false" });
    if (this.state.invitees.length > 10 && !GlobalFields.proMember) {
      this.setState({ message: "Maximum 10 participants for free users." });
    } else if (
      /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(this.state.emailValue)
    ) {
      if (!this.emailExists(this.state.emailValue)) {
        inviteeAry[inviteeAry.length] = {
          email: this.state.emailValue,
          name: this.state.nameValue,
        };
        this.setState({
          invitees: inviteeAry,
          nameValue: "",
          emailValue: "",
          emailFocus: "true",
          invalidEmail: "false",
          message: "",
        });
      }
    } else {
      this.setState({
        invalidEmail: "true",
        emailStyle: { color: "red" },
        message: "Invalid email",
      });
    }
  }
  handleNameChange(e) {
    this.setState({
      nameValue: e.target.value,
    });
  }

  handleEmailChange(e) {
    this.setState({
      emailValue: e.target.value,
      emailStyle: {},
    });
  }
  state = {
    invitees: [],
    nameValue: "",
    emailValue: "",
    emailFocus: "true",
    emailClassName: "",
    emailStyle: {},
    message: "",
  };
  emailFocused(e) {
    this.setState({ emailClassName: "" });
  }
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
          <MDBCol></MDBCol>
          <MDBCol>
            <div className="d-flex align-items-center justify-content-center">
              <h1 className="text-dark">Who?</h1>
            </div>
            <div className="d-flex align-items-center justify-content-center">
              <h6 className="text-dark">{this.state.message}</h6>
            </div>

            <MDBInput
              className={this.state.emailClassName + " text-dark"}
              ref={(input) => (this.inputRef = input)}
              label="Email Address"
              focus={this.state.emailFocus}
              value={this.state.emailValue}
              onFocus={this.emailFocused.bind(this)}
              onChange={this.handleEmailChange.bind(this)}
              onKeyPress={this.keyPressed.bind(this)}
              style={this.state.emailStyle}
            />
            <MDBInput
              className="text-dark"
              label="Name (Optional)"
              value={this.state.nameValue}
              onChange={this.handleNameChange.bind(this)}
              onKeyPress={this.keyPressed.bind(this)}
            />
            <div className="d-flex align-items-center justify-content-center my-3">
              <MDBBtn
                onClick={this.addListItem.bind(this)}
                color="primary"
                outline
              >
                Add
              </MDBBtn>
              <MDBBtn
                onClick={() => this.props.continueClicked(this.state.invitees)}
                color="primary"
              >
                Continue
              </MDBBtn>
            </div>
            <InviteeList
              invitees={this.state.invitees}
              deleteItem={this.deleteItem.bind(this)}
            />
          </MDBCol>
          <MDBCol></MDBCol>
        </MDBRow>
      </MDBContainer>
    );
  }
}

export default InvitePage;
