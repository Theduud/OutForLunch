import React, { Component } from "react";
import { MDBBtn } from "mdbreact";
import GlobalFields from "../../globalFields";

class Map extends Component {
  state = {};
  render() {
    return this.props.placeID ? (
      <div className="card-body card-body-cascade text-center">
        <div
          id="map-container-google-9"
          className="z-depth-1-half map-container-5"
          style={{ height: "20rem", width: "30rem" }}
        >
          <iframe
            src={
              "https://www.google.com/maps/embed/v1/place?key=" +
              GlobalFields.apiKey +
              "&q=place_id:" +
              this.props.placeID
            }
            allowfullscreen
            frameborder="0"
            style={{ border: 0, height: "20rem", width: "30rem" }}
            allowfullscreen
          ></iframe>
        </div>
      </div>
    ) : null;
  }
}

export default Map;
