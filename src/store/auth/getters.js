export function isAuthenticated(state) {
  return !!state.isAuthenticated;
}

export function userId(state) {
  return state.user_id;
}

export function userRole(state) {
  return state.role;
}

export function userName(state) {
  return state.username;
}

export function userEmail(state) {
  return state.email;
}

export function userToken(state) {
  return state.userToken;
}