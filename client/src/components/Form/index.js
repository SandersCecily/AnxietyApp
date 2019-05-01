import React, { Component } from "react";
import API from "../../utils/API";

class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            desc: "",
            location: [],
            noiselvl: 3,
            physicallvl: 3,
            items: null,
            itemslist: ""
        }
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleInputChange = event => {
        var target = event.target;
        var value = target.type === 'checkbox' ? target.checked : target.value;
        var name = target.name;
        this.setState({ [name]: value });
    }


    handleFormSubmit = event => {
        event.preventDefault();

        //alert("Roger roger! \n"
            // +"Description: " +this.state.desc + "\n"
            // +"Location: " +this.state.location + "\n" returns "true"
            // +"Noise: " +this.state.noiselvl +"\n"
            // +"Physical: " +this.state.physicallvl +"\n"
            // +"Items: " +this.state.items
            // +"List: " +this.state.itemslist + "\n" returns "on"
        //);
        if (this.state.items === "on") {
            var items = true;
        } else {
            items = false;
        }
        API.saveSuggestion({
            description: this.state.desc,
            location: this.state.location,
            noiselvl: this.state.noiselvl,
            physicallvl: this.state.physicallvl,
            things_needed: this.state.itemslist,
            if_required: items
        })
            .catch(err => console.log(err));

            alert("Submitted");
    };

    render() {
        return (
            <div className="row">
                <form action="#">
                    <label for="desc">Tell us what you do to calm down</label>
                    <textarea name="desc" className="materialize-textarea" value={this.state.desc} onChange={this.handleInputChange}></textarea>


                    <label>This activity works at...</label>
                    <p>
                        <label>
                            <input name="location" type="checkbox" value="home" onChange={this.handleInputChange} />
                            <span>Home</span>
                        </label>
                    </p>
                    <p>
                        <label>
                            <input name="location" type="checkbox" value="work" onChange={this.handleInputChange} />
                            <span>Work/School</span>
                        </label>
                    </p>
                    <p>
                        <label>
                            <input name="location" type="checkbox" value="public" onChange={this.handleInputChange} />
                            <span>Public</span>
                        </label>
                    </p>

                    <label>This activity is this noisy...</label>
                    <p className="range-field">
                        <input type="range" name="noiselvl" min="1" max="5" value={this.state.noiselvl} onChange={this.handleInputChange} />
                    </p>

                    <label>This activity is this physical...</label>
                    <p className="range-field">
                        <input type="range" name="physicallvl" min="1" max="5" value={this.state.physicallvl} onChange={this.handleInputChange} />
                    </p>

                    <p>
                        <label>
                            <input class="with-gap" name="items" type="radio" onChange={this.handleInputChange} />
                            <span>Check if this Activity needs items</span>
                        </label>
                    </p>

                    <label for="items">Tell us what this activity needs ONLY IF it needs any.</label>
                    <textarea name="itemslist" value={this.state.itemslist} className="materialize-textarea" onChange={this.handleInputChange}></textarea>


                    <br />
                    <button className="waves-effect waves-light btn-small" type="submit" onClick={this.handleFormSubmit}>Submit</button>

                </form>
            </div>
        )
    };
};

export default Form;