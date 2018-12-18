import React from "react";
import { createAction, createReducer } from "redux-starter-kit";
import { store } from "./store";
import { makeAction } from "./action";
import { connect } from "react-redux";

class Mycomponent extends React.Component {
  constructor(props) {
    super(props);
    console.log("props", props);
  }

  performOperation() {
    console.log("function called...");
    // let myactionType = createAction("reducer");
    // let myaction = myactionType(5); //sending the payload here
    // console.log(myaction);

    makeAction();
    console.log("props", this.props);
  }

  render() {
    return (
      <div>
        this is my component for redux-starter-kit !<br />
        <button onClick={this.performOperation.bind(this)}>
          click to see the redux-starter in action
        </button>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    counter: state
  };
};

export default connect(mapStateToProps)(Mycomponent);
