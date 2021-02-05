export function login(state, { user_id, token }) {
  state.token = token;
  state.user_id = user_id;
  state.isAuthenticated = true;
}

export function register(state, { token, user_id }) {
  state.token = token;
  state.user_id = user_id;
  state.isAuthenticated = true;
}

export function logout(state) {
  state.token = null;
  state.isAuthenticated = false;
  state.user_id = null;
}
