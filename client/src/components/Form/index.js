import React, { Component } from "react";

class Form extends Component {
    state = {
        location: "home",
        noiselvl: 3,
        physicallvl: 3,
        items: false
    }

    //handleInputChange
    handleInputChange = event => {
        event.preventDefault();
    };

    //on submit
    handleFormSubmit = event => {
        event.preventDefault();
    };

    render() {
        return (
            <form action="#">
                <label for="desc">Tell us what you do to calm down</label>
                <textarea id="desc" class="materialize-textarea"></textarea>
               
                
                <label>This activity works at...</label>
                <p>
                    <label>
                        <input class="with-gap" name="location" type="radio" value ="Home" checked />
                        <span>Home</span>
                    </label>
                </p>
                <p>
                    <label>
                        <input class="with-gap" name="location" type="radio" value="work" />
                        <span>Work/School</span>
                    </label>
                </p>
                <p>
                    <label>
                        <input class="with-gap" name="location" type="radio" value="public" />
                        <span>Public</span>
                    </label>
                </p>

                <label>This activity is this noisy...</label>
                <p className="range-field">
                    <input type="range" id="noise" min="1" max="5" value={this.state.noiselvl} />
                </p>

                <label>This activity is this physical...</label>
                <p className="range-field">
                    <input type="range" id="physical" min="1" max="5" value={this.state.physicallvl} />
                </p>

                <p>
                    <label>
                        <input class="with-gap" name="group1" type="radio" />
                        <span>Check if this Activity needs items</span>
                    </label>
                </p>

                <label for="items">Tell us what this activity needs ONLY IF it needs any.</label>
                <textarea id="items" class="materialize-textarea"></textarea>


                <br />
                <button className="waves-effect waves-light btn-small" type="submit" onClick={this.handleFormSubmit}>Submit</button>

            </form>
        )
    };
};

export default Form;