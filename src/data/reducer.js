export const initialState = {
  basket: [],
  user: null,
};

// selector
export const getBasketTotal = (basket) =>
  basket?.reduce((total, item) => total + item.price, 0);

const reducer = (prevState, action) => {
  switch (action.type) {
    case "ADD_TO_BASKET":
      return {
        ...prevState,
        basket: [...prevState.basket, action.item],
      };

    case "REMOVE_FROM_BASKET":
      return {
        ...prevState,
        basket: prevState.basket.filter((item) => item.id != action.id),
      };

    case "SET_USER":
      return {
        ...prevState,
        user: action.user,
      };

    default:
      return prevState;
  }
};

export default reducer;
