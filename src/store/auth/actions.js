import { signIn, signUp, me } from '@/services/auth.service';
import store from '@/store';

export async function login({ commit }, fromData) {
  store.dispatch('common/setLoading', true, { root: true });
  store.dispatch('common/clearError', {}, { root: true });
  try {
    const { data: { token, user_id } } = await signIn(fromData);
    const { data: { username, email, role } } = await me(token);
    commit('login', { token, user_id, username, email, role });
  } catch (e) {
    store.dispatch('common/setLoading', false, { root: true });
    store.dispatch('common/setError', e.response.data, { root: true });
  }
}

export async function register({ commit }, formData) {
  store.dispatch('common/setLoading', true, { root: true });
  store.dispatch('common/clearError', {}, { root: true });
  try {
    const { data: { user_id, token } } = await signUp(formData);
    const { data: { username, email, role } } = await me(token);
    commit('register', { token, user_id, username, email, role });
  } catch (e) {
    store.dispatch('common/setLoading', false, { root: true });
    store.dispatch('common/setError', e.response.data, { root: true });
  }

}

export function logout({ commit }) {
  commit('logout');
  store.dispatch('common/setLoading', false, { root: true });
  store.dispatch('common/setError', {}, { root: true });
}
