import { connect } from "react-redux";

const Text = ({ counter }) => {
  console.log("---->", counter);
  return (
    <div>
      <p>Counter: {counter} </p>
    </div>
  );
};

const mapStateToProps = state => {
  console.log(state);
  return { counter: state };
};

export default connect(mapStateToProps)(Text);
