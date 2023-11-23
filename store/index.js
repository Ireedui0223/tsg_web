export const state = () => ({
  snackbar: {
    value: false,
    message: null,
    type: null,
  },
});

export const mutations = {
  setSnackbar: (state, { value, message, type = "success" }) => {
    state.snackbar = {
      value,
      message,
      type,
    };
  },
};
