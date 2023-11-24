<template>
  <div>
    <v-sheet
      color="#D8F2FD"
      height="100vh"
      width="100vw"
      class="d-flex align-center"
    >
      <v-row class="mx-80 mx-auto">
        <v-col cols="6">
          <LoginForm />
        </v-col>
        <v-col cols="6" class="ma-auto">
          <v-img :src="require('~/static/images/landing/login_face.png')" />
        </v-col>
      </v-row>
    </v-sheet>
  </div>
</template>

<script>
import loginForm from "@/components/LoginForm.vue";
export default {
  layout: "blank",
  components: {
    loginForm,
  },
};
</script>

<style lang="scss" scoped>
.mx-80 {
  max-width: 60%;
}
@media (min-width: 1920px) {
  .mx-80 {
    max-width: 1000px;
  }
}
</style>
