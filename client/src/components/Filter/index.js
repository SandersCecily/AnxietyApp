import React, { Component } from "react";

class Filter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            location: "home",
            noiselvl: 3,
            physicallvl: 3,
            items: false
        }
    }

    handleInputChange = event => {
        //if radio
        //if range-field
        //if checkbox
        };


    handleFormSubmit = event => {
        event.preventDefault();
        
    };

    render() {
        return (
            <form action="#">
                <label>I am at...</label>
                <p>
                    <label>
                        <input className="with-gap" name="location" type="radio" value ="Home" checked onChange={this.handleInputChange}/>
                        <span>Home</span>
                    </label>
                </p>
                <p>
                    <label>
                        <input className="with-gap" name="location" type="radio" value="work" onChange={this.handleInputChange}/>
                        <span>Work/School</span>
                    </label>
                </p>
                <p>
                    <label>
                        <input className="with-gap" name="location" type="radio" value="public" onChange={this.handleInputChange}/>
                        <span>Public</span>
                    </label>
                </p>

                <label>Activity Noise Level</label>
                <p className="range-field">
                    <input type="range" id="noise" min="1" max="5" value={this.state.noiselvl} onChange={this.handleInputChange} />
                </p>

                <label>Activity Physical Level</label>
                <p className="range-field">
                    <input type="range" id="physical" min="1" max="5" value={this.state.physicallvl} onChange={this.handleInputChange} />
                </p>

                <p>
                    <label>
                        <input type="checkbox" value={this.state.items} onChange={this.handleInputChange} />
                        <span>I can use items right now</span>
                    </label>
                </p>
                <br />
                <button className="waves-effect waves-light btn-small" type="submit" onClick={event => this.handleFormSubmit(event)}>Submit</button>

            </form>
        )
    };
};

export default Filter;