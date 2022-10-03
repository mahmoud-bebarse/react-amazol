export const initCartState = { cartItems: [] };

export const CartReducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      const exItem = state.cartItems.find((p) => p.id === action.item.id);
      if (exItem) {
        return state;
      } else {
        state.cartItems.push(action.item);
        return {
          ...state,
          cartItems: state.cartItems,
        };
      }
    case "REMOVE":
      let i = state.cartItems.findIndex((p) => p.id === action.item.id);
      if (i !== -1) {
        state.cartItems.splice(i, 1);
        return {
          ...state,
          cartItems: state.cartItems,
        };
      } else return state;
    default:
      return state;
  }
};
