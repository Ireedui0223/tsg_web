export const state = () => ({
  user: null,
  login_dialog: false,
});

export const mutations = {
  set_login_dialog: (state, payload) => {
    state.login_dialog = !state.login_dialog;
  },
};
