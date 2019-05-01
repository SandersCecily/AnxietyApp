import React, { Component } from 'react';
import API from "../../utils/API";
import Filter from "../Filter";

//randomize desc
function shuffle(array) {

  let currentIndex = array.length;
  let temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }
  return array;
};

//index var
var click = 0;

class Current extends Component {

  state = {
    objects: []
  };

  componentDidMount() {
    this.loadRemedies();
  }

  loadRemedies = () => {
    API.getRemedy()
      .then(res => {
        this.setState({ objects: res.data })
        shuffle(this.state.objects);
      })
      .catch(err => console.log(err));
  };

  //onclick 
  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.objects[click] === undefined) {
      click = 0;
      shuffle(this.state.objects);
    }
    else {
      document.getElementById("desc").innerHTML = this.state.objects[click].description;
      if (this.state.objects[click].things_needed !== undefined) {
        document.getElementById("things").innerHTML = this.state.objects[click].things_needed;
      }
      else {
        document.getElementById("things").innerHTML = "";
      }
    }
    click++;
  };

  render() {
    return (
      <div className="container">
        <div className="row center-align">
          <h4>Here's a reccomendation to help...</h4>
        </div>
        <div className="row">
          <div className="col s3 filter left-align pull-s1">
            <Filter />
          </div>
          <div className="col s7 center-align" id="remedies">
            {/* Make a Favorite Star in Here */}
            <p id="desc" className="flow-text"></p>
            <p id="things" className="flow-text"></p>
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