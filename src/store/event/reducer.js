const initialState = null;

export default function eventReducer(state = initialState, action) {
  switch (action.type) {
    case "EVENT_FETCHED": {
      return (state = action.payload);
    }
    case "ADD_TICKET": {
      return { ...state, tickets: [...state.tickets, action.payload] };
    }
    default: {
      return state;
    }
  }
}
