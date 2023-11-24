<template>
  <div>
    <v-sheet
      color="#D8F2FD"
      height="100vh"
      width="100vw"
      class="d-flex align-center"
    >
      <v-row class="mx-80 mx-auto">
        <v-col cols="5" class="ma-auto">
          <v-img :src="require('~/static/images/landing/sign_in.png')" />
        </v-col>
        <v-col cols="7">
          <h3 class="h3--text font-weight-bold text-center mb-4">
            Бүртгэл үүсгэх
          </h3>
          <v-form ref="signInRef" v-model="valid" lazy-validation>
            <v-text-field
              v-model="sisiId"
              outlined
              placeholder="Сиси дугаар"
              dense
              hide-details
              background-color="#F6FCFF"
              class="mb-3 rounded-lg"
            />
            <v-text-field
              v-model="name"
              outlined
              placeholder="Таны нэр"
              dense
              hide-details
              background-color="#F6FCFF"
              class="mb-3 rounded-lg"
            />
            <v-text-field
              v-model="school"
              outlined
              placeholder="Салбар сургууль"
              dense
              hide-details
              background-color="#F6FCFF"
              class="mb-3 rounded-lg"
            />
            <v-text-field
              v-model="status"
              outlined
              placeholder="Таны төлөв"
              dense
              hide-details
              background-color="#F6FCFF"
              class="mb-3 rounded-lg"
            />
            <v-text-field
              v-model="password"
              outlined
              placeholder="Нууц үг"
              dense
              hide-details
              background-color="#F6FCFF"
              class="mb-3 rounded-lg"
            />
            <v-text-field
              v-model="validPassword"
              outlined
              placeholder="Давтан нууц үг"
              dense
              hide-details
              background-color="#F6FCFF"
              class="mb-3 rounded-lg"
            />
            <v-text-field
              v-model="phoneNumber"
              outlined
              placeholder="Утасны дугаар"
              dense
              hide-details
              background-color="#F6FCFF"
              class="mb-3 rounded-lg"
            />

            <v-btn color="primary" block depressed class="rounded-lg">
              Бүртгүүлэх
            </v-btn>
          </v-form>
          <p class="option-text my-4">Холбоо барих</p>
          <div class="d-flex align-center justify-center">
            <v-btn
              icon
              depressed
              href="https://www.facebook.com"
              target="_blank"
            >
              <v-icon size="30">mdi-facebook</v-icon>
            </v-btn>
            <v-btn
              icon
              depressed
              href="https://www.instagram.com/"
              target="_blank"
            >
              <v-icon size="30">mdi-instagram</v-icon>
            </v-btn>
          </div>
        </v-col>
      </v-row>
    </v-sheet>
  </div>
</template>

<script>
export default {
  layout: "blank",
  data() {
    return {
      valid: false,
      sisiId: "",
      name: "",
      school: "",
      status: "",
      password: "",
      validPassword: "",
      phoneNumber: "",
    };
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
