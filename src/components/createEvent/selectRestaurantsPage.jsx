import React, { Component } from "react";
import {
  MDBContainer,
  MDBSelect,
  MDBRow,
  MDBCol,
  MDBInput,
  MDBIcon,
} from "mdbreact";

class SelectRestaurantsPage extends Component {
  state = {
    options: [
      {
        checked: true,
        text: "Any",
        value: "1",
      },
      {
        text: "1+",
        value: "2",
      },
      {
        text: "2+",
        value: "3",
      },
      {
        text: "3+",
        value: "4",
      },
      {
        text: "4+",
        value: "5",
      },
      {
        text: "4.5+",
        value: "6",
      },
    ],
  };
  render() {
    return (
      <MDBContainer>
        <div>
          <h1 className="my-3">Restaurant Selection</h1>
          <MDBRow>
            <MDBCol size="8">
              <MDBRow>
                <MDBCol size="3">
                  <MDBSelect options={this.state.options} label="Rating" />
                </MDBCol>
                <MDBCol>
                  <form className="form-inline mt-4 mb-4">
                    <div>
                      <MDBIcon icon="search" />
                      <input
                        className="form-control form-control-sm ml-3 w-75"
                        type="text"
                        placeholder="Search"
                        aria-label="Search"
                      />
                    </div>
                  </form>
                </MDBCol>
              </MDBRow>
            </MDBCol>
            <MDBCol></MDBCol>
          </MDBRow>
        </div>
      </MDBContainer>
    );
  }
}

export default SelectRestaurantsPage;
