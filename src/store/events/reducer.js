export default function(state = [], action) {
  switch (action.type) {
    case "ALL_EVENTS": {
      return (state = action.payload);
    }
    case "ADD_EVENT": {
      return [...state, action.payload];
    }
    default:
      return state;
  }
}
