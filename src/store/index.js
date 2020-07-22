import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

// Seting in .env(.prod) file
axios.defaults.baseURL = process.env.VUE_APP_ROOT_API;

export default new Vuex.Store({
  state: {
    books: [],
    errors: []
  },
  mutations: {
    setInitData(state, initData) {
      state.books = Object.values(initData);
      localStorage.setItem("books", JSON.stringify(Object.values(initData)));
    }
  },
  actions: {
    init({ commit }, credentials) {
      return axios
        .get(process.env.VUE_APP_ROOT_API_JSON, credentials)
        .then(({ data }) => {
          commit("setInitData", data.books);
        });
    }
  },
  getters: {
    BOOKS: state => {
      return state.books;
    },
    ERRORS: state => {
      return state.errors;
    }
  },
  modules: {}
});
