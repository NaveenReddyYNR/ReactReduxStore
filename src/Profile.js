import React from "react";
import { connect } from "react-redux";

const Profile = (props) => {
  return (
    <h1>
      Profile Component name -{props.name} age -{props.age}
      <button onClick={() => props.changeAge(2)}>Change Age</button>
    </h1>
  );
};

const mapStateToProps = (state) => {
  return state;
};

const mapDispatchToProps = (dispatch) => {
  return {
    changeAge: (age) => {
      dispatch({ type: "change_age", payload: age });
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
