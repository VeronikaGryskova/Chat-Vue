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
  },
  actions: {
    changeCurrentChannel({ commit }, channel) {
      commit("SET_CURRENT_CHANNEL", channel);
    },
  },
});

export default store;
