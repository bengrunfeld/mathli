import { connect } from "react-redux";
import React from "react";

const Text = ({ counter }) => {
  return (
    <div>
      <p>Counter: {counter} </p>
    </div>
  );
};

const mapStateToProps = state => ({ counter: state.counter });

export default connect(mapStateToProps)(Text);
