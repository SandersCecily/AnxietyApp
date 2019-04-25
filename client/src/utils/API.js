import axios from "axios";

export default {
  // Gets all remedies
  getRemedy: function() {
    console.log("inside API", axios.get("/api"))
    return axios.get("/api");
  }

  //Filter Get
  }