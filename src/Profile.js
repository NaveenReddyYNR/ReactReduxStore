import React from "react";
import { connect } from "react-redux";

const Profile = (props) => {
  return (
    <div>
      Profile Component name-{props.name} age-{props.age}
    </div>
  );
};

const mapStateToProps = (state) => {
  return state;
};

export default connect(mapStateToProps)(Profile);
