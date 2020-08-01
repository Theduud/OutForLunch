import React, { Component } from "react";
import { MDBCarousel, MDBCarouselInner, MDBContainer, MDBRow } from "mdbreact";
import { geolocated } from "react-geolocated";
import json from "../../assets/exampleResponse.txt";
import CarouselItem from "./carouselItem";

const locationNames = [];
const locationRatings = [];
const locationRatingQtys = [];
class Carousel extends Component {
  state = {
    carouselCols: [{}],
    carouselLength: 0
  };
  componentDidMount() {
    this.readTextFile(json);
  }
  readTextFile = file => {
    var rawFile = new XMLHttpRequest();
    rawFile.open("GET", file, false);
    rawFile.onreadystatechange = () => {
      if (rawFile.readyState === 4) {
        if (rawFile.status === 200 || rawFile.status == 0) {
          var allText = rawFile.responseText;
          const jsonObj = JSON.parse(allText);
          var cont = true;
          var i = 0;
          while (cont) {
            try {
              locationNames[i] = jsonObj.results[i].name;
              locationRatings[i] = jsonObj.results[i].rating;
              locationRatingQtys[i] = jsonObj.results[i].user_ratings_total;
            } catch {
              cont = false;
            }
            i++;
          }
          var carouselCols = [];
          var index = 0;
          for (i = 0; i < locationNames.length; i += 3) {
            carouselCols[index] = {
              id: index,
              key: index,
              titles: [
                locationNames[i],
                locationNames[i + 1],
                locationNames[i + 2]
              ],
              ratings: [
                locationRatings[i],
                locationRatings[i + 1],
                locationRatings[i + 2]
              ],
              ratingQtys: [
                locationRatingQtys[i],
                locationRatingQtys[i + 1],
                locationRatingQtys[i + 2]
              ]
            };
            index++;
          }
          this.setState({
            carouselCols: carouselCols,
            carouselLength: carouselCols.length
          });
        }
      }
    };
    rawFile.send(null);
  };
  render() {
    if (this.state.carouselLength > 0) {
      return (
        <div>
          <MDBContainer>
            <MDBCarousel
              activeItem={1}
              length={this.state.carouselLength}
              slide={true}
              showControls={true}
              showIndicators={false}
              multiItem
            >
              <MDBCarouselInner>
                <MDBRow>
                  {this.state.carouselCols.map(x => (
                    <CarouselItem index={x.id} carouselCols={x} />
                  ))}
                </MDBRow>
              </MDBCarouselInner>
            </MDBCarousel>
          </MDBContainer>
        </div>
      );
    } else {
      return null;
    }
  }
}
export default geolocated({
  positionOptions: {
    enableHighAccuracy: false
  },
  userDecisionTimeout: 5000
})(Carousel);
