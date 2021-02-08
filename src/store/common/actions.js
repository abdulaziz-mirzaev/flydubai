export function setLoading({ commit }, isLoading) {
  commit('setLoading', isLoading);
}

export function setError({ commit }, error) {
  commit('setError', error);
}

export function clearError({ commit }, error) {
  commit('clearError', error || {});
}
