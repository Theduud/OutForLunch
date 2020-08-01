import React, { Component } from "react";
import GlobalFields from "../../globalFields.js";
import {
  MDBIcon,
  MDBContainer,
  MDBDatePicker,
  MDBTimePicker,
  MDBRow,
  MDBCol,
  MDBBtn,
  MDBInput,
  MDBSelect,
} from "mdbreact";
var modifier = 1;
if (GlobalFields.proMember) {
  modifier = 12;
}
const today = new Date();
// const test = today.getFullYear();
// const test2 = today.getMonth();
// const test3 = today.getDate();
const maxDate = new Date(
  today.getFullYear(),
  today.getMonth() + modifier,
  today.getDate()
);
const maxDateStr =
  String(maxDate.getFullYear()) +
  "-" +
  //   getMonth() starts from 0 for some reason
  String(maxDate.getMonth() + 1) +
  "-" +
  String(maxDate.getDate());
const minDateStr =
  String(today.getFullYear()) +
  "-" +
  String(today.getMonth() + 1) +
  "-" +
  String(today.getDate());

class DateSelectionPage extends Component {
  constructor(props) {
    super(props);
    this.dateRef = React.createRef();
    this.timeRef = React.createRef();
    this.everyRef = React.createRef();
  }
  forChanged(e) {
    this.setState({ repeatFor: e.target.value });
  }
  handleContinueButton(event) {
    event.preventDefault();
    const selectedDate = this.dateRef.current.state.selectedDate;
    const dateLong = selectedDate.toDateString();
    const dateShort =
      selectedDate.getMonth() +
      "-" +
      selectedDate.getDate() +
      "-" +
      selectedDate.getFullYear();
    const time = this.timeRef.current.state.value;
    var repeatEvery = "";
    var repeatFor = "";
    if (this.state.repeatContent) {
      repeatEvery = this.everyRef.current.state.selectTextContent;
      repeatFor = this.state.repeatFor ? this.state.repeatFor : "2";
    }

    // Submit the value to the parent component
    this.props.setOccurrenceInfo(
      dateShort,
      time,
      repeatEvery,
      repeatFor,
      dateLong
    );
    this.props.dateContinueClicked();
  }
  continueBtn = (
    <MDBBtn onClick={this.handleContinueButton.bind(this)} color="primary">
      Continue
    </MDBBtn>
  );
  getAm_Pm() {
    const hrs = today.getHours();
    if (hrs >= 12) {
      return "PM";
    } else {
      return "AM";
    }
  }
  state = {
    repeatContent: false,
    selectedFrequency: "Week",
    options1: [
      {
        checked: true,
        text: "every",
        value: "1",
      },
      {
        text: "every other",
        value: "2",
      },
    ],
    options2: [
      {
        text: "Day",
        value: "1",
      },
      {
        checked: true,
        text: "Week",
        value: "2",
      },
      {
        text: "Month",
        value: "3",
      },
      {
        text: "Year",
        value: "4",
      },
    ],
  };
  alterFrequency(frequency) {
    this.setState({ selectedFrequency: frequency });
  }
  checkBoxValueChanged(e) {
    if (e.target.checked) {
      this.setState({
        repeatContent: true,
      });
    } else {
      this.setState({
        repeatContent: false,
      });
    }
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
        className=" d-flex justify-content-center align-content-center my-3"
      >
        <div>
          <MDBRow>
            <MDBCol>
              <div className="mb-1 d-flex justify-content-center align-items-center">
                <h1>When?</h1>
              </div>
            </MDBCol>
          </MDBRow>
          <MDBRow>
            <MDBCol>
              <div className="d-flex justify-content-center align-items-center">
                <MDBDatePicker
                  id="DatePicker"
                  minDate={minDateStr}
                  maxDate={maxDateStr}
                  ref={this.dateRef}
                />
                <div className="ml-3">
                  <MDBIcon icon="calendar" size="2x" className="blue-text" />
                </div>
              </div>
            </MDBCol>
          </MDBRow>
          <MDBRow>
            <MDBCol>
              <div className="d-flex justify-content-center align-items-center">
                <MDBTimePicker
                  hours={Number(today.getHours() % 12)}
                  minutes={Number(today.getMinutes())}
                  id="timePicker"
                  getValue={this.getPickerValue}
                  dayTime="pm"
                  ref={this.timeRef}
                />
                <div className="ml-3">
                  <MDBIcon icon="clock" size="2x" className="blue-text" />
                </div>
              </div>
            </MDBCol>
          </MDBRow>
          <MDBRow center="true" middle>
            <MDBCol>
              <div className="d-flex justify-content-center align-items-center mr-4">
                <MDBInput
                  label="Repeat Occurence"
                  labelClass="text-light"
                  type="checkbox"
                  id="checkbox1"
                  containerClass="color-primary"
                  onChange={this.checkBoxValueChanged.bind(this)}
                  labelClass="text-light"
                  className="text-light"
                />
              </div>
            </MDBCol>
          </MDBRow>
          {this.state.repeatContent ? (
            <MDBRow>
              <MDBCol>
                <div className="align-middle d-flex justify-content-center align-items-center">
                  <div className="text-light">
                    Repeat every&nbsp;&nbsp;&nbsp;
                  </div>
                  <div className="">
                    <MDBSelect
                      className="my-3 text-light"
                      style={{ width: 60 }}
                      options={this.state.options2}
                      selected="Week"
                      getTextContent={this.alterFrequency.bind(this)}
                      ref={this.everyRef}
                    />
                  </div>
                  <div>&nbsp;&nbsp;&nbsp;for&nbsp;</div>
                  <div>
                    <MDBInput
                      style={{ width: 30 }}
                      className="text-center text-light"
                      valueDefault="2"
                      onChange={this.forChanged.bind(this)}
                    />
                  </div>
                  <div>
                    &nbsp;{this.state.selectedFrequency.toLowerCase() + "s."}
                  </div>
                </div>
              </MDBCol>
            </MDBRow>
          ) : null}
          <MDBRow>
            <MDBCol>
              {this.state.repeatContent ? (
                <div className="d-flex justify-content-center align-items-center">
                  {this.continueBtn}
                </div>
              ) : (
                <div className="d-flex justify-content-center align-items-center mt-3">
                  {this.continueBtn}
                </div>
              )}
            </MDBCol>
          </MDBRow>
        </div>
      </MDBContainer>
    );
  }
}

export default DateSelectionPage;
