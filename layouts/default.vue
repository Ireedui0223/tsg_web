<template>
  <v-app class="main">
    <v-main>
      <Header />
      <nuxt />
    </v-main>
  </v-app>
</template>

<script>
import Header from "../components/Header.vue";
export default {
  components: {
    Header,
  },
};
</script>

<style lang="scss" scoped>
.main {
  background-color: #f6f6f6 !important;
}
</style>
