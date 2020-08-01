import React, { Component } from "react";
import { MDBBtn, MDBContainer } from "mdbreact";
import GlobalFields from "../globalFields";

const axios = require("axios");
var conStr = "";
if (GlobalFields.testMode) {
  conStr = "http://192.168.1.205/db/createEvent.php";
} else {
  conStr = "../assets/db/createEvent.php";
}
class Test extends Component {
  btnClick() {
    try {
      axios
        .get(conStr + "?name=Test")
        .then(function (response) {
          // handle success
          if (response.status == 200) console.log(response.data);
          else {
            console.log("Couldn't connect");
          }
        })
        .catch(function (error) {
          // handle error
          console.log(error);
        })
        .then(function () {
          // always executed
        });
    } catch (e) {
      console.error(e);
    }
  }

  state = { focused: true };
  render() {
    return (
      <MDBContainer>
        <MDBBtn onClick={this.btnClick.bind(this)}>Test2</MDBBtn>
      </MDBContainer>
    );
  }
}
export default Test;
