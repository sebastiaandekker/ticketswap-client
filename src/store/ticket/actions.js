import request from "superagent";

const baseUrl = "http://localhost:4000";

function ticketFetched(payload) {
  return {
    type: "TICKET_FETCHED",
    payload
  };
}

export const getTicket = id => (dispatch, getState) => {
  request(`${baseUrl}/ticket/${id}`)
    .then(response => {
      dispatch(ticketFetched(response.body));
    })
    .catch(console.error);
};

function ticketUpdated(payload) {
  return {
    type: "TICKET_UPDATED",
    payload
  };
}

export const updateTicket = ticket => (dispatch, getState) => {
  const state = getState();
  const { user } = state;
  request
    .put(`${baseUrl}/ticket/${ticket.id}`)
    .set("Authorization", `Bearer ${user.jwt}`)
    .send(ticket)
    .then(response => {
      dispatch(ticketUpdated(response.body));
    })
    .catch(console.error);
};
