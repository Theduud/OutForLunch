import React, { Component } from "react";
import { MDBIcon } from "mdbreact";

var starItems = [];
class Rating extends Component {
  setRating(rating) {
    starItems = [];
    const roundRating = this.getRoundedRating(rating);
    for (var i = 0; i + 1 <= roundRating; i++) {
      starItems[i] = <MDBIcon icon="star" size="1x" className="amber-text" />;
    }
    if (roundRating % 1 !== 0) {
      starItems[i] = (
        <MDBIcon icon="star-half" size="1x" className="amber-text" />
      );
    }
  }
  getRoundedRating(rating) {
    return Math.round(rating / 0.5) * 0.5;
  }
  constructor(props) {
    super(props);
    this.setRating(this.props.rating);
    this.state = { stars: starItems };
  }
  render() {
    return this.props.rating ? (
      <div>
        {this.state.stars} <strong>{this.props.rating}</strong>
        {" (" + this.props.ratingQty + ")"}
      </div>
    ) : (
      <div tag="h6" sub className="text-muted">
        No Ratings
      </div>
    );
  }
}

export default Rating;
