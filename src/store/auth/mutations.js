export function login(state, { user, token }) {
  state.token = token;
  state.user = user;
  state.isAuthenticated = true;
}

export function register(state, user) {
  state.user = user;
  state.isAuthenticated = true;
}

export function logout(state) {
  state.token = null;
}
