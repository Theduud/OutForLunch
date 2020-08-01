import React, { Component } from "react";
import {
  MDBContainer,
  MDBListGroup,
  MDBListGroupItem,
  MDBRow,
  MDBCol
} from "mdbreact";

class InviteeList extends Component {
  state = {
    invitees: this.props.invitees
  };
  getListItems() {
    var returnAry = [];
    this.props.invitees.map(x => {
      if (x.name) {
        returnAry[returnAry.length] = this.getListItem(
          x.email,
          x.name + "  |  " + x.email,
          x.deleting
        );
      } else {
        returnAry[returnAry.length] = this.getListItem(
          x.email,
          x.email,
          x.deleting
        );
      }
    });
    return returnAry;
  }
  setDeleting(text) {
    var alreadyDeleting = false;
    var newArray = this.props.invitees.slice();
    if (newArray.find(x => x.email == text).deleting == true) {
      alreadyDeleting = true;
    }
    newArray.map(x => (x.deleting = false));
    if (!alreadyDeleting) {
      newArray.find(x => x.email == text).deleting = true;
    }

    this.setState({ invitees: newArray });
  }

  getListItem(email, text, deleting) {
    if (deleting) {
      return (
        <MDBRow>
          <MDBCol size="8" className="px-0 mx-0">
            <MDBListGroupItem
              className="px-0 mx-0"
              href="#"
              onClick={() => this.setDeleting(email)}
              hover
              style={{ textAlign: "center" }}
            >
              {text}
            </MDBListGroupItem>
          </MDBCol>
          <MDBCol className="px-0 mx-0" size="4">
            <MDBListGroupItem
              className="px-0 mx-0"
              href="#"
              onClick={() => this.props.deleteItem(email)}
              hover
              style={{ textAlign: "center" }}
              className="bg-danger text-light"
            >
              DELETE
            </MDBListGroupItem>
          </MDBCol>
        </MDBRow>
      );
    } else {
      return (
        <MDBListGroupItem
          href="#"
          onClick={() => this.setDeleting(email)}
          hover
          style={{ textAlign: "center" }}
        >
          {text}
        </MDBListGroupItem>
      );
    }
  }
  render() {
    return (
      <MDBContainer>
        <MDBListGroup style={{ width: "22rem", wordWrap: "break-word" }}>
          {this.getListItems()}
        </MDBListGroup>
      </MDBContainer>
    );
  }
}

export default InviteeList;
