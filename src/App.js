import React from "react";
import { connect } from "react-redux";
import Profile from "./Profile";

const App = (props) => {
  return (
    <div>
      <h1>
        App Component name-{props.name} age-{props.age}
        {/* <button
          onClick={() => {
            props.changeName();
          }}
        >
          Change Name
        </button> */}
        <Profile />
      </h1>
    </div>
  );
};

// const mapDispatchToProps = (dispatch) => {
//   return {
//     changeName: () => {
//       dispatch({ type: "change_name", payload: "Ramesh" });
//     },
//   };
// };

const mapStateToProps = (state) => {
  return state;
};

export default connect(mapStateToProps)(App);
