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
