export const initState = { cartItems: [] };

export const CartReducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      console.log(action.item);
      const exItem = state.cartItems.find((p) => p.id === action.item.id);
      if (exItem) {
        return state;
      } else {
        state.cartItems.push(action.item);
        return state;
      }
    default:
      return state;
  }
};
