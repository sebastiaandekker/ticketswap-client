import request from "superagent";

const baseUrl = "http://localhost:4000";

function allEvents(payload) {
  return {
    type: "ALL_EVENTS",
    payload
  };
}

export const getEvents = () => (dispatch, getState) => {
  const state = getState();
  const { events } = state;
  if (!events.length) {
    request(`${baseUrl}/event`)
      .then(response => {
        dispatch(allEvents(response.body));
      })
      .catch(console.error);
  }
};

function addEvent(payload) {
  return {
    type: "ADD_EVENT",
    payload
  };
}

export const createEvent = event => (dispatch, getState) => {
  request
    .post(`${baseUrl}/event`)
    // .set("Authorization", `Bearer ${user.jwt}`)
    .send(event)
    .then(response => {
      dispatch(addEvent(response.body));
    })
    .catch(console.error);
};
