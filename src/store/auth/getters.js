export function isAuthenticated(state) {
  return !!state.isAuthenticated;
}

export function userId(state) {
  return state.user_id;
}
