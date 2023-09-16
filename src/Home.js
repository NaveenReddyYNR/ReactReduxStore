import React from "react";
import { connect } from "react-redux";

const Home = (props) => {
  return (
    <div>
      Home Component name-{props.name} age-{props.age}
    </div>
  );
};

const mapStateToProps = (state) => {
  return state;
};

export default connect(mapStateToProps)(Home);
