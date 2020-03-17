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
