<template>
  <v-app>
    <div class="container">
      <Header />
      <Nuxt />
    </div>
  </v-app>
</template>

<script>
import Header from "@/components/Header.vue";
export default {
  name: "DefaultLayout",
  components: {
    Header,
  },
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
.container {
  max-width: 1980px;
  width: 80%;
  padding: 0px;;
  margin-left: auto;
  margin-right: auto;
}
</style>
