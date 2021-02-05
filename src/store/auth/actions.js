import { signIn, signUp } from '../../services/auth.service';

export async function login({ commit }, fromData) {
  const { data: { token, user_id } } = await signIn(fromData);
  commit('login', { token, user_id });
}

export async function register({ commit }, formData) {
  const { data: { user_id, token } } = await signUp(formData);
  console.log(token, user_id);
  commit('register', { token, user_id });
}

export function logout({ commit }) {
  commit('logout');
}
