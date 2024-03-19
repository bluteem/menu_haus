import { createStore } from "vuex";

export default createStore({
	state: {
		isAuthenticated: false,
		user: null,
	},
	mutations: {
		login(state, user) {
			state.isAuthenticated = true;
			state.user = user;
		},
		logout(state) {
			state.isAuthenticated = false;
			state.user = null;
		},
	},
	actions: {
		login({ commit }, user) {
			// Perform login API request
			// If login successful, commit 'login' mutation with user data
			commit("login", user);
		},
		logout({ commit }) {
			// Perform logout API request
			// If logout successful, commit 'logout' mutation
			commit("logout");
		},
	},
});
