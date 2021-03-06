import React, { Component } from "react";

class Filter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            location: "",
            noiselvl: 3,
            physicallvl: 3,
            items: null,
            objects: this.props.objects
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
        // alert("Roger roger! \n"
        //     +"Description: " +this.state.desc + "\n"
        //     +"Location: " +this.state.location + "\n" //returns "true"
        //     +"Noise: " +this.state.noiselvl +"\n"
        //     +"Physical: " +this.state.physicallvl +"\n"
        //     +"Items: " +this.state.items
        // );
        // use data to filter on current
        //cant use items
        for (let i = 0; i<this.state.objects; i++){
            if (!this.state.items || this.state.items === false){
                var newarray = this.state.objects.filter(() => this.state.objects[i].items===false);
            }
        }
        console.log(newarray);

};

render() {
    return (
        <div className="container">
            <div className="row">
                <form action="#">
                    <label>I am at...</label>
                    <p>
                        <label>
                            <input className="with-gap" name="location" type="radio" value="home" onChange={this.handleInputChange} />
                            <span>Home</span>
                        </label>
                    </p>
                    <p>
                        <label>
                            <input className="with-gap" name="location" type="radio" value="work" onChange={this.handleInputChange} />
                            <span>Work/School</span>
                        </label>
                    </p>
                    <p>
                        <label>
                            <input className="with-gap" name="location" type="radio" value="public" onChange={this.handleInputChange} />
                            <span>Public</span>
                        </label>
                    </p>

                    <label>Activity Noise Level</label>
                    <p className="range-field">
                        <input type="range" name="noiselvl" min="1" max="5" value={this.state.noiselvl} onChange={this.handleInputChange} />
                    </p>

                    <label>Activity Physical Level</label>
                    <p className="range-field">
                        <input type="range" name="physicallvl" min="1" max="5" value={this.state.physicallvl} onChange={this.handleInputChange} />
                    </p>

                    <p>
                        <label>
                            <input name="items" type="checkbox" value="false" onChange={(this.handleInputChange)} />
                            <span>I can use items right now</span>
                        </label>
                    </p>
                    <br />
                    <button className="waves-effect waves-light btn-small" type="submit" onClick={event => this.handleFormSubmit(event)}>Submit</button>

                </form>
            </div>
        </div>
    )
};
};

export default Filter;