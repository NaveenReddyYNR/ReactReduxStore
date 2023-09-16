import React from "react";
import { connect } from "react-redux";

const Profile = (props) => {
  return (
    <h1>
      Profile Component name-{props.name} age-{props.age}
    </h1>
  );
};

const mapStateToProps = (state) => {
  return state;
};

export default connect(mapStateToProps)(Profile);
