import GlobalFields from "../globalFields";

const axios = require("axios");
var conStr = "";
if (GlobalFields.testMode) {
  conStr = "http://192.168.1.205/db/createEvent.php";
} else {
  conStr = "../assets/db/createEvent.php";
}
export const createNewEvent = (name) => {
  try {
    axios
      .get(conStr + "?name=" + name)
      .then(function (response) {
        // handle success
        if (response.status == 200) console.log(response.data);
        else {
          console.log("Couldn't connect");
        }
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .then(function () {
        console.log("test");
        // always executed
      });
  } catch (e) {
    console.log(e);
  }
};
