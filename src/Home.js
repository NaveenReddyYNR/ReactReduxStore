import React from "react";
import axios from "axios";

import { connect } from "react-redux";

const Home = (props) => {
  return (
    <h1>
      Home Component name-{props.name} age-{props.age}
      <button
        onClick={() => {
          axios
            .get("https://jsonplaceholder.typicode.com/users")
            .then((res) => {
              props.changeName(res.data[0].name);
            });
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
    changeName: (name) => {
      dispatch({ type: "change_name", payload: name });
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
