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

function loginJWT(payload) {
  return {
    type: "JWT",
    payload
  };
}

export const login = (email, password) => dispatch => {
  request
    .post(`${baseUrl}/login`)
    .send({ email: email, password: password })
    .then(response => {
      dispatch(loginJWT(response.body));
    })
    .catch(console.error);
};
