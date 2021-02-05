import { signIn, signUp } from "../../services/auth.service";
import { getOne } from "../../services/api.service";

export async function login({ commit }, fromData) {
  const { token, user_id } = await signIn(fromData);
  const user = await getOne("client", user_id);
  commit("login", { user, token });
}

export async function register({ commit }, formData) {
  const { user_id } = await signUp(formData);
  const user = await getOne("client", user_id);
  commit("register", user);
}

export function logout({ commit }) {
  commit("logout");
}
