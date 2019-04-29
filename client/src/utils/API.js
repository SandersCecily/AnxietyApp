import axios from "axios";

export default {
  // Gets all remedies
  getRemedy: function() {
    return axios.get("/api");
  },

  //Filter Get
  getFilterRemedy: function () {
    console.log("lo");
  },

  //Post route for suggestions
  saveSuggestion: function(data) {
    return axios.post("/api/suggestion", data);
  }

}