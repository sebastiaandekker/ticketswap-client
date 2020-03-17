const initialState = null;

export default function ticketReducer(state = initialState, action) {
  switch (action.type) {
    case "TICKET_FETCHED": {
      return (state = action.payload);
    }
    default: {
      return state;
    }
  }
}
