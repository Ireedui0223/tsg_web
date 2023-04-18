<template>
  <div class="mt-16">
    <v-card
      max-width="250"
      height="270"
      color="rgb(0, 151, 178, 0.3)"
      class="d-flex flex-column align-center justify-center mx-auto"
    >
      <v-form>
        <label>Нэвтрэх нэр</label>
        <v-text-field
          dense
          solo
          flat
          filled
          hide-details
          color="info"
          background-color="rgb(277, 240, 240, 0.6)"
          class="mb-2"
        >
        </v-text-field>
        <label>Нууц үг</label>
        <v-text-field
          dense
          solo
          flat
          filled
          hide-details
          color="info"
          background-color="rgb(277, 240, 240, 0.6)"
          class="mb-2"
        >
        </v-text-field>
        <p class="mb-1 text-right body2--text">
          <a class="black--text text-decoration-none" href=""
            >Нууц үг мартсан</a
          >
        </p>
        <v-btn color="rgb(277, 240, 240, 0.6)" block depressed> Нэвтрэх </v-btn>
      </v-form>
    </v-card>
  </div>
</template>

<script>
export default {};
</script>
<style lang="scss" scoped></style>
