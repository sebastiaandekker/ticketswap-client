export default function(state = [], action) {
  switch (action.type) {
    case "ALL_EVENTS": {
      return (state = action.payload);
    }
    default:
      return state;
  }
}
