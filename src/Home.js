import React from "react";
import { connect } from "react-redux";

const Home = (props) => {
  return (
    <h1>
      Home Component name-{props.name} age-{props.age}
    </h1>
  );
};

const mapStateToProps = (state) => {
  return state;
};

export default connect(mapStateToProps)(Home);
