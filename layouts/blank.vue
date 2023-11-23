<template>
  <v-app>
    <Nuxt />
    <Snackbar />
  </v-app>
</template>

<script>
import Snackbar from "@/components/Snackbar.vue";
export default {
  components: {
    Snackbar,
  },
  methods: {
    test() {
      this.$store.commit("setSnackbar", {
        value: true,
        message: "test",
        type: "error",
      });
    },
  },
};
</script>

<style lang="scss" scoped></style>
