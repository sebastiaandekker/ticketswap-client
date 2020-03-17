import request from "superagent";

const baseUrl = "http://localhost:4000";

function SignupAction(payload) {
  return {
    type: "SIGNUP",
    payload
  };
}

export const signup = (name, email, password) => dispatch => {
  request
    .post(`${baseUrl}/user`)
    .send({ name: name, email: email, password: password })
    .then(response => {
      dispatch(SignupAction(response.body));
    })
    .catch(console.error);
};
