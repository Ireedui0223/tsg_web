<template>
  <v-app>
    <div class="container">
      <Header />
      <Nuxt />
    </div>
    <LoginDialog :dialog="$store.state.login_dialog" />
  </v-app>
</template>

<script>
import Header from "@/components/Header.vue";
import LoginDialog from "../components/LoginDialog.vue";
export default {
  name: "DefaultLayout",
  components: {
    Header,
    LoginDialog,
  },
  data() {
    return {};
  },
  computed: {
    login_dialog: {
      set(e) {
        this.$store.commit("set_login_dialog", e);
      },
      get() {
        return this.$store.state.login_dialog;
      },
    },
  },
};
</script>

<style lang="scss" scoped>
.container {
  max-width: 1980px;
  width: 80%;
  padding: 0px;
  margin-left: auto;
  margin-right: auto;
}
</style>
