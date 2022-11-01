export default function reducer(state, action) {
  switch (action.type) {
    case "decrement":
      return {
        count: state.count - 1,
      };

    case "extradecrement":
      return {
        count: state.count - action.value,
      };

    case "reset":
      return {
        count: (state.count = 0),
      };

    case "increment":
      return {
        count: state.count + 1,
      };

    case "extraincrement":
      return {
        count: state.count + action.value,
      };

    default:
      throw new Error();
  }
}
