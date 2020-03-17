const initialState = null;

export default function user(state = initialState, action) {
  switch (action.type) {
    case "EVENT_FETCHED": {
      return (state = action.payload);
    }
    default: {
      return state;
    }
  }
}
