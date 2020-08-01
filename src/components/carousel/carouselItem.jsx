import React, { Component } from "react";
import CarouselCol from "./carouselCol";
import { MDBCarouselItem } from "mdbreact";
import Rating from "./rating";

class CarouselItem extends Component {
  componentWillReceiveProps(nextProps) {
    this.setState({ carouselCols: nextProps.carouselCols });
  }
  state = { carouselCols: {} };
  CreateColItem(index) {
    return (
      <CarouselCol
        btnText="Vote`"
        // btnText={this.state.carouselCols.id}
        title={this.state.carouselCols.titles[index]}
        // text={this.state.carouselCols.ratings[index]}
        text={
          <Rating
            rating={this.state.carouselCols.ratings[index]}
            ratingQty={this.state.carouselCols.ratingQtys[index]}
          />
        }
      />
    );
  }
  render() {
    if (this.state.carouselCols) {
      if (this.state.carouselCols.key >= 0) {
        if (
          this.state.carouselCols.titles[0] &&
          this.state.carouselCols.titles[1] &&
          this.state.carouselCols.titles[2]
        ) {
          return (
            <MDBCarouselItem
              className="mx-2"
              itemId={this.state.carouselCols.key + 1}
              key={this.state.carouselCols.key}
            >
              {this.CreateColItem(0)}
              {this.CreateColItem(1)}
              {this.CreateColItem(2)}
            </MDBCarouselItem>
          );
        } else if (
          this.state.carouselCols.titles[0] &&
          this.state.carouselCols.titles[1]
        ) {
          return (
            <MDBCarouselItem
              className="mx-2"
              itemId={this.state.carouselCols.key + 1}
              key={this.state.carouselCols.key}
            >
              {this.CreateColItem(0)}
              {this.CreateColItem(1)}
            </MDBCarouselItem>
          );
        } else if (
          this.state.carouselCols.titles[0] &&
          this.state.carouselCols.titles[1]
        ) {
          return (
            <MDBCarouselItem
              className="mx-2"
              itemId={this.state.carouselCols.key + 1}
              key={this.state.carouselCols.key}
            >
              {this.CreateColItem(0)}
            </MDBCarouselItem>
          );
        }
      } else {
        return null;
      }
    } else {
      return null;
    }
  }
}

export default CarouselItem;
