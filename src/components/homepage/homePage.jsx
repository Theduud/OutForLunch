import React from "react";
import "./MinimalisticIntro.css";
import NavBar from "./navbar";
import SplashScreen from "./splashScreen";
import { MDBAnimation, MDBView, MDBMask } from "mdbreact";
import InvitePage from "../createEvent/invitePage";
import NamePage from "../createEvent/namePage";
import DateSelectionPage from "../createEvent/dateSelectionPage";
import EventOptionsPage from "../createEvent/eventOptionsPage";
import ConfirmationPage from "../createEvent/confirmationPage";
import { createNewEvent } from "../../dbAccess/createEvent";

const style = { position: "absolute", width: "100%", height: "100%" };
var eventDetails = { name: "", invitees: [] };
class HomePage extends React.Component {
  state = {
    splashScreen: (
      <SplashScreen createEventClicked={() => this.createEventClicked()} />
    ),
  };
  setOccurrenceInfo(date, time, repeatEvery, repeatFor, dateLong) {
    this.setState({ dateValue: date });
    this.setState({ dateLong: dateLong });
    this.setState({ timeValue: time });
    this.setState({ repeatEvery: repeatEvery });
    this.setState({ repeatFor: repeatFor });
  }
  nameValueChanged(e) {
    this.setState({ nameValue: e.target.value });
  }
  createEventClicked() {
    this.setState({
      splashScreen: (
        <div>
          <MDBAnimation style={style} type="slideOutLeft">
            <SplashScreen />
          </MDBAnimation>
          <MDBAnimation
            onAnimationEnd={this.animationEnded1.bind(this)}
            style={style}
            type="slideInRight"
          >
            <NamePage
              continueClicked={this.namePageContinueClicked.bind(this)}
              nameValueChanged={this.nameValueChanged.bind(this)}
            />
          </MDBAnimation>
        </div>
      ),
    });
  }
  animationEnded1() {
    this.setState({
      splashScreen: (
        <NamePage
          continueClicked={this.namePageContinueClicked.bind(this)}
          nameValueChanged={this.nameValueChanged.bind(this)}
        />
      ),
    });
  }
  animationEnded2() {
    this.setState({
      splashScreen: (
        <InvitePage continueClicked={this.continueClicked.bind(this)} />
      ),
    });
  }
  animationEnded3() {
    this.setState({
      splashScreen: (
        <DateSelectionPage
          dateContinueClicked={this.dateContinueClicked.bind(this)}
          setOccurrenceInfo={this.setOccurrenceInfo.bind(this)}
        />
      ),
    });
  }
  animationEnded4() {
    this.setState({
      splashScreen: (
        <EventOptionsPage optionsContinue={this.optionsContinue.bind(this)} />
      ),
    });
  }
  animationEnded5() {
    this.setState({
      splashScreen: (
        <ConfirmationPage
          name={this.state.nameValue}
          invitees={this.state.invitees}
          date={this.state.dateLong}
          time={this.state.timeValue}
          every={this.state.repeatEvery}
          for={this.state.repeatFor}
          confirmClicked={this.confirm.bind(this)}
        />
      ),
    });
  }
  confirm() {
    createNewEvent(this.state.nameValue);
  }
  optionsContinue(option1, option2) {
    this.setState({
      restaurantSelection: option1,
      invitation: option2,
      splashScreen: (
        <div>
          <MDBAnimation style={style} type="slideOutLeft">
            <EventOptionsPage />
          </MDBAnimation>
          <MDBAnimation
            onAnimationEnd={this.animationEnded5.bind(this)}
            style={style}
            type="slideInRight"
          >
            <ConfirmationPage
              name={this.state.nameValue}
              invitees={this.state.invitees}
              date={this.state.dateLong}
              time={this.state.timeValue}
              every={this.state.repeatEvery}
              for={this.state.repeatFor}
              confirmClicked={this.confirm}
            />
          </MDBAnimation>
        </div>
      ),
    });
  }
  continueClicked(invitees) {
    this.setState({
      invitees: invitees,
      splashScreen: (
        <div>
          <MDBAnimation style={style} type="slideOutLeft">
            <InvitePage continueClicked={this.continueClicked.bind(this)} />
          </MDBAnimation>
          <MDBAnimation
            onAnimationEnd={this.animationEnded3.bind(this)}
            style={style}
            type="slideInRight"
          >
            <DateSelectionPage
              dateContinueClicked={this.dateContinueClicked.bind(this)}
              setOccurrenceInfo={this.setOccurrenceInfo.bind(this)}
            />
          </MDBAnimation>
        </div>
      ),
    });
  }
  dateContinueClicked() {
    this.setState({
      splashScreen: (
        <div>
          <MDBAnimation style={style} type="slideOutLeft">
            <DateSelectionPage
              dateContinueClicked={this.dateContinueClicked.bind(this)}
              setOccurrenceInfo={this.setOccurrenceInfo.bind(this)}
            />
          </MDBAnimation>
          <MDBAnimation
            onAnimationEnd={this.animationEnded4.bind(this)}
            style={style}
            type="slideInRight"
          >
            <EventOptionsPage />
          </MDBAnimation>
        </div>
      ),
    });
  }
  namePageContinueClicked(sender) {
    eventDetails.name = this.state.nameValue;
    this.setState({
      splashScreen: (
        <div>
          <MDBAnimation style={style} type="slideOutLeft">
            <NamePage />
          </MDBAnimation>
          <MDBAnimation
            onAnimationEnd={this.animationEnded2.bind(this)}
            style={style}
            type="slideInRight"
          >
            <InvitePage />
          </MDBAnimation>
        </div>
      ),
    });
  }
  render() {
    return (
      <div id="minimalistintro">
        <NavBar />
        <MDBView>
          {/* <MDBView src="https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1267&q=80"> */}
          <MDBMask className="" />
          {/* <MDBMask className="bg-dark rgba-black-light" /> */}
          {this.state.splashScreen}
        </MDBView>
      </div>
    );
  }
}

export default HomePage;
