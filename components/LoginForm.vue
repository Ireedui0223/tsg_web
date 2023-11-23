<template>
  <div class="w-100">
    <h2 class="h2--text font-weight-bold text-center mb-4">Нэвтрэх</h2>
    <v-form ref="form" v-model="valid" lazy-validation>
      <v-text-field
        v-model="name"
        :rules="nameRules"
        background-color="#F6FCFF"
        outlined
        placeholder="Нэвтрэх нэр"
        required
        hide-details
        class="mb-3"
      />

      <v-text-field
        v-model="password"
        :rules="passwordRule"
        :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
        :type="showPassword ? 'text' : 'password'"
        background-color="#F6FCFF"
        outlined
        hide-details
        class="mb-3"
        placeholder="Нууц үг"
        @click:append="showPassword = !showPassword"
      />
      <nuxt-link to="forgot-password" class="text-decoration-none">
        <p class="small--text fffb9b--text text-right">
          Нууц үг/Хэрэглэгчийн нэр мартсан?
        </p>
      </nuxt-link>
      <v-btn
        :disabled="!valid"
        color="primary"
        block
        class="mr-4"
        depressed
        @click="login"
      >
        Нэвтрэх
      </v-btn>
    </v-form>

    <v-btn
      depressed
      block
      outlined
      background-color="transparent"
      to="sign-in"
      class="mt-4"
    >
      Бүртгүүлэх
    </v-btn>

    <p class="option-text my-4">Эсвэл</p>
    <div class="d-flex align-center justify-center">
      <v-btn icon depressed href="https://www.facebook.com" target="_blank">
        <v-icon size="30">mdi-facebook</v-icon>
      </v-btn>
      <v-btn icon depressed href="https://www.instagram.com/" target="_blank">
        <v-icon size="30">mdi-instagram</v-icon>
      </v-btn>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    valid: true,
    name: "",
    nameRules: [
      (v) => !!v || "Нэвтрэх нэр хоосон байна",
      (v) => (v && v.length <= 10) || "Name must be less than 10 characters",
    ],
    password: "",
    passwordRule: [
      (v) => !!v || "Нууц үг хоосон байна.",
      (v) =>
        /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/.test(
          v
        ) || "Сул пассворд.",
    ],
    showPassword: false,
  }),

  methods: {
    login() {
      this.$refs.form.validate();
      this.$store.commit("setSnackbar", {
        value: true,
        message: "login ",
        type: "success",
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.w-100 {
  width: 100%;
}
.option-text {
  display: flex;
  flex-direction: row;
  color: #b5b7b7;
}
.option-text:before,
.option-text:after {
  content: "";
  flex: 1 1;
  border-bottom: 1px solid;
  border-color: #b5b7b7;
  margin: auto;
}
.option-text:before {
  margin-right: 10px;
}
.option-text:after {
  margin-left: 10px;
}
</style>
