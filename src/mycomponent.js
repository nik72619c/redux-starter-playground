import React from "react";

import { makeAction } from "./action";
import { connect } from "react-redux";

class Mycomponent extends React.Component {
  constructor(props) {
    super(props);
    console.log("props", props.counter);
  }

  performOperation() {
    console.log("function called...");
    // let myactionType = createAction("reducer");
    // let myaction = myactionType(5); //sending the payload here
    // console.log(myaction);

    makeAction();
    console.log("props.counter", this.props.counter);
    let counter = this.props.counter;
    console.log("counter is ", counter);
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
  console.log("mapStateToProps ", state);
  return {
    counter: state
  };
};

export default connect(mapStateToProps)(Mycomponent);
