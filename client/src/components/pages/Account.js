import React, { Component } from "react";

class Account extends Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <h3>Welcome to your User Dashboard</h3></div>
                <div className="row">
                    <div className="col s4">
                        <p>This is for col 1</p>
                    </div>
                    <div className="col s4">
                        <p>This is for col 2</p>
                    </div>
                    <div className="col s4">
                        <p>This is for col 3</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default Account;