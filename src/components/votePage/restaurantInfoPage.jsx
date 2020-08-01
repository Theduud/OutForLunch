import React, { Component } from "react";
import {
  MDBCard,
  MDBCardBody,
  MDBCardText,
  MDBBtn,
  MDBIcon,
  MDBRow,
  MDBCol,
} from "mdbreact";
import Rating from "./rating";
import exampleResponse_individual from "../../assets/exampleResponse_individual.txt";
import Map from "./map";
import Gallery from "react-photo-gallery";

const photos = [
  {
    src:
      "https://scontent.fmkc1-1.fna.fbcdn.net/v/t1.0-9/582578_581893128506122_1764647944_n.jpg?_nc_cat=109&_nc_sid=e007fa&_nc_oc=AQnlB4O472dSgDfDVjaduXXfz4kaG_rBTwk_iLjmmFwVcFFO4k26zczt87i9qq8AlGq19XZpnCAmACuTYGEo5poX&_nc_ht=scontent.fmkc1-1.fna&oh=d01258f8bb0474e31e970bd67ed7e4b7&oe=5ECA394E",
    width: 1,
    height: 1,
  },
  {
    src:
      "https://scontent.fmkc1-1.fna.fbcdn.net/v/t1.0-9/269434_248184451862293_3677313_n.jpg?_nc_cat=103&_nc_sid=e007fa&_nc_oc=AQngx1zLhra0uEx6wgxpnzKyi6YfIHz_Vk1jC6NgOgU_m9vRVCyd3lCIP6qOX1YTpavuFjXLxkxOfReGpfMgWkOp&_nc_ht=scontent.fmkc1-1.fna&oh=6ce6221a34fad94f007136222d64cfd0&oe=5EC9E200",
    width: 1,
    height: 1,
  },
  {
    src:
      "https://scontent.fmkc1-1.fna.fbcdn.net/v/t1.0-9/403530_422975304392153_1791212023_n.jpg?_nc_cat=110&_nc_sid=43edb5&_nc_oc=AQmTivoZOHd5isVngjhlV096W5hj4cH-IrQCWBRFdpfBOlJPK-4--XpZ6QFc4t-L0dm9pE-21kfRsCt6-H-vDZWZ&_nc_ht=scontent.fmkc1-1.fna&oh=9eb27f5b158a96f9dc6ad39cef468471&oe=5ECBA356",
    width: 1,
    height: 1,
  },
];

class RestaurantInfoPage extends Component {
  state = {};
  render() {
    return (
      <MDBCard style={{ width: "35rem", height: "100%", marginTop: "1rem" }}>
        <MDBCardBody>
          <div className="display-4 pb-2 text-center">
            {this.props.name ? this.props.name : "..."}
          </div>
          <div className="d-flex flex-column justify-content-between align-items-start mb-2">
            {/* <Rating
              rating={this.props.rating}
              ratingQty={this.props.ratingQty}
            /> */}
            <div tag="h6" sub className="text-muted">
              {this.props.distance.distance >= 0
                ? this.props.distance.distance +
                  " " +
                  this.props.distance.unit +
                  " away"
                : ""}
            </div>
            {/* <div tag="h6" sub className="text-muted">
              {this.getPriceRanking()}
            </div> */}
            {/* <div tag="h6" sub className="text-muted">
              {this.props.address}
            </div> */}
          </div>
          <MDBCardText></MDBCardText>
          <div className="d-flex justify-content-center align-items-center">
            <MDBBtn className="mx-3">
              <div className="d-flex align-items-center justify-content-between ">
                <div className="pr-3">Website</div>
                <MDBIcon icon="globe" size="2x" />
              </div>
            </MDBBtn>
            <MDBBtn className="mx-3">
              <div className="d-flex align-items-center justify-content-between ">
                <div className="pr-3">Menu</div>
                <MDBIcon icon="list-alt" size="2x" />
              </div>
            </MDBBtn>
          </div>
          <div className="mt-1 d-flex justify-content-center align-items-center">
            <MDBBtn className="mx-3">
              <div className="d-flex align-items-center justify-content-between ">
                <div className="pr-3">Directions</div>
                <MDBIcon icon="map-marked-alt" size="2x" />
              </div>
            </MDBBtn>
          </div>
          <div>
            <MDBRow center middle>
              <MDBCol>
                <Map placeID={this.props.placeID} />
              </MDBCol>
            </MDBRow>
            <div className="d-flex align-items-center justify-content center flex-column">
              {/* <MDBBtn size="lg" className="m-3" color="deep-orange">
                <div className="d-flex align-items-center justify-content-between ">
                  <div className="pr-3">Vote</div>
                </div>
              </MDBBtn> */}
            </div>
          </div>
          <Gallery photos={photos} />
        </MDBCardBody>
      </MDBCard>
    );
  }
}

export default RestaurantInfoPage;
