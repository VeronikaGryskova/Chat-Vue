import { createStore } from "vuex";

const store = createStore({
  state() {
    return {
      messages: [],
      friends: [],
      channels: [],
      currentProfile: {},
      currentChannel: null,
    };
  },
  mutations: {
    SET_CURRENT_CHANNEL(state, channel) {
      state.currentChannel = channel;
    },
    SET_CURRENT_PROFILE(state, profile) {
      state.currentProfile = profile;
    },
    SET_MESSAGES(state, message) {
      state.messages = message;
    },
  },
  actions: {
    changeCurrentChannel({ commit }, channel) {
      commit("SET_CURRENT_CHANNEL", channel);
    },
    changeCurrentProfile({ commit }, profile) {
      commit("SET_CURRENT_PROFILE", profile);
    },
    changeMessages({ commit }, message) {
      commit(" SET_MESSAGES", message);
    },
  },
});

export default store;
