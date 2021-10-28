import { http, setTokenHeader } from "../../plugins/http";

export default {
    namespaced: true,

    state: {
        authenticatedUser: {},
        isAuth: false,
        accessToken: null,
        refreshToken: null
    },

    getters: {
        authenticatedUser: state => state.authenticatedUser,
        isAuth: state => state.authenticatedUser && state.authenticatedUser.id,
        accessToken: state => state.accessToken,
        refreshToken: state => state.refreshToken
    },

    actions: {
        login({ commit }, credentials) {
            return new Promise((resolve, reject) => {
                http.post("/auth/login", credentials).then(res => {
                    commit('AUTHENTICATE_USER', res.data.data);
                    resolve();
                }).catch((err) => reject(err));
            });
        },

        logout({ commit }) {
            setTokenHeader(null);
            commit('LOGOUT_USER');
        },

        setAuthenticatedUser({ commit }, user) {
            commit('AUTHENTICATE_USER', user);
        },

        setAccessToken({ commit }, token) {
            commit('ACCESS_TOKEN', token);
        },

        setRefreshToken({ commit }, token) {
            commit('REFRESH_TOKEN', token);
        }  
    },

    mutations: {
        ['AUTHENTICATE_USER'](state, authenticatedUser) {
            state.authenticatedUser = authenticatedUser;
        },
        ['LOGOUT_USER'](state) {
            state.authenticatedUser = {};
            state.isAuth = false;
        },
        ['ACCESS_TOKEN'](state, accessToken) {
            state.accessToken = accessToken;
        },
        ['REFRESH_TOKEN'](state, refreshToken) {
            state.refreshToken = refreshToken;
        }    
    }
}