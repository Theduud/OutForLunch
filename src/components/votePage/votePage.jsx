import React, { Component } from "react";
import json from "../../assets/exampleResponse.txt";
import {
  MDBTabContent,
  MDBScrollspyText,
  MDBCol,
  MDBAnimation,
} from "mdbreact";
import RestaurantDisplayItem from "./restaurantDisplayItem";
import RestaurantInfoPage from "./restaurantInfoPage";
import { geolocated } from "react-geolocated";
import GlobalMethods from "../../globalMethods";
import GlobalFields from "../../globalFields";

var distance = { distance: -1, units: "" };

class VotePage extends Component {
  getRestaurantInfoPage(itemInfo) {
    return (
      <RestaurantInfoPage
        name={itemInfo.name}
        rating={itemInfo.rating}
        ratingQty={itemInfo.user_ratings_total}
        distance={this.getDistance(itemInfo.geometry.location)}
        priceRanking={itemInfo.price_level}
        address={itemInfo.formatted_address}
        placeID={itemInfo.place_id}
      />
    );
  }
  componentDidMount() {
    this.readTextFile(json);
  }
  readTextFile = (file) => {
    var rawFile = new XMLHttpRequest();
    rawFile.open("GET", file, false);
    rawFile.onreadystatechange = () => {
      if (rawFile.readyState === 4) {
        if (rawFile.status === 200 || rawFile.status == 0) {
          var allText = rawFile.responseText;
          const jsonObj = JSON.parse(allText);
          this.setState({ jsonResults: jsonObj.results });
        }
      }
    };
    rawFile.send(null);
  };
  handleShowClick(itemInfo) {
    if (this.state.shownID == itemInfo.place_id) {
      this.setState({
        shownID: "",
        itemShown: (
          <MDBAnimation
            duration="500ms"
            style={{ zIndex: 1 }}
            type="fadeOutLeft"
            onAnimationEnd={() => this.onAnimationEndClose()}
          >
            {this.getRestaurantInfoPage(itemInfo)}
          </MDBAnimation>
        ),
      });
    } else {
      this.setState({
        shownID: itemInfo.place_id,
        itemShown: (
          <MDBAnimation
            onAnimationEnd={() => this.onAnimationEndOpen(itemInfo)}
            duration="500ms"
            style={{ zIndex: 1 }}
            type="fadeInLeft    "
          >
            {this.getRestaurantInfoPage(itemInfo)}
          </MDBAnimation>
        ),
      });
    }
  }
  onAnimationEndOpen(itemInfo) {
    this.setState({
      itemShown: this.getRestaurantInfoPage(itemInfo),
    });
  }
  getDistance(location) {
    if (
      !this.props.isGeolocationAvailable ||
      !this.props.isGeolocationEnabled
    ) {
      distance.distance = -1;
      distance.units = "";
      return distance;
    } else {
      const myLat = this.props.coords.latitude;
      const myLong = this.props.coords.longitude;
      var distanceKm = GlobalMethods.distance(
        myLat,
        location.latitude,
        myLong,
        location.longitude
      );
      distance.distance = distanceKm;
      distance.units = "km";
      return distance;
    }
  }
  onAnimationEndClose() {
    this.setState({
      itemShown: null,
    });
  }
  getItems() {
    return this.state.jsonResults.map((x) => (
      <div className="py-2">
        <RestaurantDisplayItem
          handleShowClick={() => this.handleShowClick(x)}
          id={x.place_id}
          name={x.name}
          rating={x.rating}
          ratingQty={x.user_ratings_total}
          shownID={this.state.shownID}
          priceRanking={x.price_level}
        />
      </div>
    ));
  }
  state = { jsonResults: [], shownID: "" };
  render() {
    // return null;
    return this.state.jsonResults.length > 0 ? (
      <div className="d-flex">
        <MDBCol size="3" style={{ zIndex: 10 }}>
          <MDBTabContent>
            <MDBScrollspyText style={{ width: 420, height: 900 }}>
              {this.getItems()}
            </MDBScrollspyText>
          </MDBTabContent>
        </MDBCol>
        {this.state.itemShown != null ? (
          <MDBCol className="">{this.state.itemShown}</MDBCol>
        ) : null}
        <MDBCol size="6" className="border">
          <div className="d-flex flex-column align-items-center justify-content-center">
            {GlobalFields.meetingName != null ? (
              <div className="h1 display-4 text-center mt-2">
                {GlobalFields.meetingName}
              </div>
            ) : null}
            <div className="h4">{GlobalFields.meetingDate}</div>
          </div>
        </MDBCol>
      </div>
    ) : null;
  }
}

export default VotePage;
