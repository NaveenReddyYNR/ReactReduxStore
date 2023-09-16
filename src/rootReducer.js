const obj = {
  name: "naveen",
  age: 25,
};

export const reducer = (state = obj, action) => {
  if (action.type === "change_name") {
    return {
      ...state,
      name: action.payload,
    };
  } else if (action.type === "change_age") {
    return {
      ...state,
      age: action.payload,
    };
  }

  return state;
};
