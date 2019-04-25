import React, { Component } from 'react';
import API from "../../utils/API";
import Filter from "../Filter";
// import Filter from "../../Filter";

// //randomize desc
// function shuffle(array) {

//   let currentIndex = array.length;
//   let temporaryValue, randomIndex;

//   // While there remain elements to shuffle...
//   while (0 !== currentIndex) {
//     // Pick a remaining element...
//     randomIndex = Math.floor(Math.random() * currentIndex);
//     currentIndex -= 1;

//     // And swap it with the current element.
//     temporaryValue = array[currentIndex];
//     array[currentIndex] = array[randomIndex];
//     array[randomIndex] = temporaryValue;
//   }
//   return array;
// };

// function setup() {
//   let testarray = [1, 2, 3, 4, 5, 6, 7];
//   let shuffledarray = shuffle(testarray);
//   return shuffledarray;
// }

// function functionality(newar) {
//   let click = 0;
//   document.getElementById("desc").innerHTML = newar[click];
//   click++;
//   console.log("This is the shuffled array:" + newar);
//   console.log("This is the shuffled array value" + newar[click] + "at current index:" + click);
// }


class Current extends Component {

  state = {
    remedies: [],
    desc: ""
  };

  componentDidMount() {
    this.loadRemedies();
  }

  loadRemedies = () => {
    API.getRemedy()
      .then(res =>{
        console.log("this is the response", res)
        this.setState({ remedy: res.data, desc: "" })
  })
      .catch(err => console.log(err));
  };

  //onclick 
  handleFormSubmit = event => {
    event.preventDefault();
    console.log("Yes!");
    console.log(this.state.remedy);
  };

  render() {
    return (
      <div className="container">
      <div className="row center-align">
        <h4>Here's a reccomendation to help...</h4>
        </div>
        <div className="row">
          <div className="col s3 filter left-align pull-s2">
            <Filter />
          </div>
          <div className="col s7 center-align" id="remedies">
            {/* Make a Favorite Star in Here */}
            <p id="desc"></p>
            <ul id="things"></ul>
          </div>
          <div className="col 2">
          </div>
          <div className="row center-align">
            <button className="waves-effect waves-light btn-small" onClick={this.handleFormSubmit}>I'd like to try something different</button>
          </div>
        </div>
      </div >
    );
  }
}

export default Current;