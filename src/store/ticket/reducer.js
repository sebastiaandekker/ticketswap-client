const initialState = null;

export default function ticketReducer(state = initialState, action) {
  switch (action.type) {
    case "TICKET_FETCHED": {
      return (state = action.payload);
    }
    case "TICKET_UPDATED": {
      return (state = action.payload);
    }
    case "ADD_COMMENT": {
      return { ...state, comments: [...state.comments, action.payload] };
    }
    default: {
      return state;
    }
  }
}
