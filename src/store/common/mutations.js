export function setLoading(state, isLoading) {
  state.isLoading = isLoading;
}

export function setError(state, error) {
  state.error = error;
}

export function clearError(state) {
  state.error = {};
}