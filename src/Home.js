import React from "react";
import { connect } from "react-redux";

const Home = (props) => {
  return (
    <h1>
      Home Component name-{props.name} age-{props.age}
      <button
        onClick={() => {
          props.changeName();
        }}
      >
        Change Name
      </button>
    </h1>
  );
};

const mapStateToProps = (state) => {
  return state;
};

const mapDispatchToProps = (dispatch) => {
  return {
    changeName: () => {
      dispatch({ type: "change_name", payload: "Ramesh" });
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
