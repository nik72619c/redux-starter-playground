import React from "react";
import { makeAction } from "./action";
import { connect } from "react-redux";
function likeResult(props) {
  return <div>Like Value is : {props.counter} </div>;
}

const mapStateToProps = state => {
  console.log("mapStateToProps ", state.val);
  return {
    counter: state.val
  };
};

const mapDispatchToProps = {
  makeAction
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(likeResult);
