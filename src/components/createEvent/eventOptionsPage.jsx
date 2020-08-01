import React, { Component } from "react";
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn } from "mdbreact";
import GlobalFields from "../../globalFields";

class EventOptionsPage extends Component {
  constructor(props) {
    super(props);
    if (GlobalFields.proMember) {
      this.state.disabled1 = false;
      this.state.label1 = "Allow anyone to vote on any restaurant";
      this.state.disabled2 = false;
      this.state.label2 = "Send calendar invitation";
      this.state.pro = true;
    } else {
      this.state.pro = false;
      this.state.disabled1 = true;
      this.state.label1 = "(PRO) Allow anyone to vote on any restaurant";
      this.state.disabled2 = true;
      this.state.label2 = "(PRO) Send calendar invitation";
    }
  }
  continueClicked() {
    var option1 = "";
    var option2 = "";
    switch (this.state.radio1) {
      case 1:
        option1 = "Pool";
        break;
      case 2:
        option1 = "Any";
        break;
    }
    switch (this.state.radio2) {
      case 1:
        option2 = "InviteOnly";
        break;
      case 2:
        option2 = "Invite+Reminder";
        break;
    }
    this.props.optionsContinue(option1, option2, this.state.cb1Checked);
  }
  state = { radio1: 1, radio2: 1 };
  onClick1 = (nr) => () => {
    this.setState({
      radio1: nr,
    });
  };
  onClick2 = (nr) => () => {
    this.setState({
      radio2: nr,
    });
  };
  checkboxChecked(e) {
    this.setState({ cb1Checked: true });
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
        <div>
          <MDBRow className="mb-4">
            <MDBCol>
              <h1 className="text-center">Event Options</h1>
            </MDBCol>
          </MDBRow>
          <MDBRow className="mb-2">
            <MDBCol>
              <h5>
                <strong>Restaurant Selection</strong>
              </h5>
              <MDBInput
                checked={true}
                label="Select a pool of restaurants"
                type="radio"
                id="radio1"
                onClick={this.onClick1(1)}
                checked={this.state.radio1 === 1 ? true : false}
              />
              <MDBInput
                label={this.state.label1}
                disabled={this.state.disabled1}
                type="radio"
                id="radio2"
                onClick={this.onClick1(2)}
                checked={this.state.radio1 === 2 ? true : false}
              />
            </MDBCol>
          </MDBRow>
          <hr />
          <MDBRow className="mb-3">
            <MDBCol>
              <h5>
                <strong>Invitation</strong>
              </h5>
              <MDBInput
                checked={true}
                label="Send only invite email"
                type="radio"
                id="radio3"
                onClick={this.onClick2(1)}
                checked={this.state.radio2 === 1 ? true : false}
              />
              <MDBInput
                label="Send invite email and reminder"
                type="radio"
                id="radio4"
                onClick={this.onClick2(2)}
                checked={this.state.radio2 === 2 ? true : false}
              />
              <MDBInput
                label={this.state.label2}
                disabled={this.state.disabled2}
                type="checkbox"
                id="radio5"
                onChange={this.checkboxChecked.bind(this)}
                // onClick={this.onClick2(3)}
                // checked={this.state.radio2 === 3 ? true : false}
              />
            </MDBCol>
          </MDBRow>
          <div className="d-flex justify-content-center align-items-center">
            <MDBBtn onClick={this.continueClicked.bind(this)} color="primary">
              Continue
            </MDBBtn>
            {!this.state.pro ? <MDBBtn color="danger">Go PRO</MDBBtn> : null}
          </div>
        </div>
      </MDBContainer>
    );
  }
}

export default EventOptionsPage;
