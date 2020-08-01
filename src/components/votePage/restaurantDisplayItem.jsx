import React, { Component } from "react";
import {
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCardTitle,
  MDBCardText,
  MDBRow,
  MDBCol,
  MDBIcon,
  MDBBtn,
} from "mdbreact";
import Rating from "./rating";

class RestaurantDisplayItem extends Component {
  getPriceRanking() {
    var result = [];
    for (var i = 0; i < this.props.priceRanking; i++) {
      result[i] = <MDBIcon className="pt-1 pl-1" icon="dollar-sign" />;
    }
    return <div>{result}</div>;
  }
  state = {};
  showEventPage() {}
  render() {
    return (
      <MDBRow style={{ width: 400 }}>
        <MDBCol>
          <MDBCard>
            <div onClick={this.props.handleShowClick}>
              <MDBCardImage
                top
                src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20%28131%29.jpg"
                overlay="white-slight"
                hover
                waves
              />
            </div>
            <MDBCardBody>
              <MDBRow center middle>
                <div>
                  <MDBCol>
                    <a onClick={this.props.handleShowClick}>
                      <MDBCardTitle className="">
                        {this.props.name}
                      </MDBCardTitle>
                    </a>
                  </MDBCol>
                </div>
              </MDBRow>
              <MDBRow className="" center middle>
                <div>
                  <MDBCol>
                    <MDBBtn color="deep-orange">Vote</MDBBtn>
                  </MDBCol>
                </div>
              </MDBRow>
              <hr />
              {/* <MDBRow className="mx-2 border pt-1"> */}
              <div className=" d-flex justify-content-between align-items-start">
                <MDBCardText>
                  {this.props.rating ? (
                    <Rating
                      rating={this.props.rating}
                      ratingQty={this.props.ratingQty}
                    />
                  ) : (
                    "No reviews"
                  )}
                </MDBCardText>
                {this.getPriceRanking()}
                <a onClick={this.props.handleShowClick} className="black-text ">
                  <h5>
                    {this.props.shownID === this.props.id ? (
                      <MDBIcon icon="angle-double-left" />
                    ) : (
                      <MDBIcon icon="angle-double-right" />
                    )}
                  </h5>
                </a>
              </div>
              {/* </MDBRow> */}
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    );
  }
}

export default RestaurantDisplayItem;
