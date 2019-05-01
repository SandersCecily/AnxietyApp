import React, { Component } from 'react';

class FutureAnx extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <h2>How to Help Longterm...</h2>
        </div>
        <div className="row">
          <div className="col">
            <p className="flow-text">
                There are longterm changes that can be beneficial to the lives of people who deal with anxiety.
            </p>
            <br/>
            <h4>Diet</h4>
            <p className="flow-text"> Eating a balanced diet is important for everyone but there are foods that can help and hurt when dealing with anxiety. Limiting intake of alcohol and caffiene has given results to some patients to feel less jittery and to curb overall anxieties. Some people reccomend eating more complex carbs to release more seratonin into the brain.</p>
            <br/>
            {/* <h4>Life style</h4>
            <p className="flow-text">
            Hobbies
            Excercise
            </p>
            <br/> */}
            <h4>Medical</h4>
            <p className="flow-text"> When deciding to take a medical route its important to remember if you have any current or future occupations/commitments that might be affected by this. Also, I am not a medical professional. Please speak to your doctor about any changes you want to try.</p>
            <br/>
            <h5>Over the Counter Medicine</h5>
            <p className="flow-text">There are certain tablets/vitamins/pills that are sold over the counter that advertise that they can relieve everyday stress. Anecdotally some have found success with this method. Make sure to research this route.</p>
            <br/>
            <h5>Prescribed Medication and PRNs</h5>
            <p className="flow-text">If your anxiety is really bad feel free to talk to your doctor. They can give you reccomendations for therapists and psychologists should you not know where to start yourself. This team of professionals can help you find the best overall medications to help on a daily physical level or perscribe a PRN if you are more comfortable with that. A PRN is a medication taken on an as needed basis.</p>
          </div>
        </div>
      </div>
    );
  }
}

export default FutureAnx;