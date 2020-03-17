const initialState = null;

export default function user(state = initialState, action) {
  switch (action.type) {
    case "SIGNUP": {
      return (state = action.payload);
    }
    case "JWT": {
      return (state = action.payload);
    }
    default: {
      return state;
    }
  }
}
