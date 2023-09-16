const obj = {
  name: "naveen",
  age: 20,
};

export const reducer = (state = obj, action) => {
  if (action.type === "change_name") {
    return {
      ...state,
      name: action.payload,
    };
  }

  return state;
};
