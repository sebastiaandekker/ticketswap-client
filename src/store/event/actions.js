import request from "superagent";

const baseUrl = "http://localhost:4000";

function eventFetched(payload) {
  return {
    type: "EVENT_FETCHED",
    payload
  };
}

export const getEvent = id => (dispatch, getState) => {
  request(`${baseUrl}/event/${id}`)
    .then(response => {
      dispatch(eventFetched(response.body));
    })
    .catch(console.error);
};

function addTicket(payload) {
  return {
    type: "ADD_TICKET",
    payload
  };
}

export const createTicket = ticket => (dispatch, getState) => {
  const state = getState();
  const { user } = state;
  request
    .post(`${baseUrl}/ticket`)
    .set("Authorization", `Bearer ${user.jwt}`)
    .send(ticket)
    .then(response => {
      dispatch(addTicket(response.body));
    })
    .catch(console.error);
};
