import React, { Component } from "react";
import {
  MDBCol,
  MDBCard,
  MDBCardImage,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBBtn
} from "mdbreact";
class CarouselCol extends Component {
  render() {
    return (
      <MDBCol md="4">
        <MDBCard className="mb-2">
          <MDBCardImage className="img-fluid" src={this.props.imgSrc} />
          <MDBCardBody>
            <MDBCardTitle>{this.props.title}</MDBCardTitle>
            <MDBCardText>{this.props.text}</MDBCardText>
            <MDBBtn color="primary">{this.props.btnText}</MDBBtn>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
    );
  }
}

export default CarouselCol;
