export function login(state, { token, user_id, username, email, role }) {
  state.token = token;
  state.user_id = user_id;
  state.username = username;
  state.email = email;
  state.role = role;
  state.isAuthenticated = true;
}

export function register(state, { token, user_id, username, email, role }) {
  state.token = token;
  state.user_id = user_id;
  state.username = username;
  state.email = email;
  state.role = role;
  state.isAuthenticated = true;
}

export function logout(state) {
  state.token = null;
  state.user_id = null;
  state.username = null;
  state.email = null;
  state.role = null;
  state.isAuthenticated = false;
}
