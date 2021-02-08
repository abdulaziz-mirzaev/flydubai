import { signIn, signUp, me } from '../../services/auth.service';

export async function login({ commit }, fromData) {
  try {
    const { data: { token, user_id } } = await signIn(fromData);
    const { data: { username, email, role } } = await me(token);
    commit('login', { token, user_id, username, email, role });
  } catch (e) {
    console.log(e.response);
  }
}

export async function register({ commit }, formData) {
  const { data: { user_id, token } } = await signUp(formData);
  const { data: { username, email, role } } = await me(token);
  commit('register', { token, user_id, username, email, role });
}

export function logout({ commit }) {
  commit('logout');
}
