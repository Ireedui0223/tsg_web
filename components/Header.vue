<template>
  <header class="white py-2 px-6 mb-10">
    <div class="mx-auto mx-90 d-flex align-center justify-space-between mx-80">
      <nuxt-link to="/">
        <v-img
          :src="require('~/assets/images/logo.png')"
          contain
          max-width="140"
          max-height="80"
        />
      </nuxt-link>
      <v-text-field
        v-model.trim="search_input"
        filled
        dense
        rounded
        hide-details
        background-color="surface_2"
        placeholder="Хайх..."
        autocomplete="off"
        type="search"
        class="mx-10 text-input"
        clearable
      >
        <template v-slot:prepend-inner>
          <v-icon color="primary" style="margin-top: 2px">mdi-magnify</v-icon>
        </template>
      </v-text-field>
      <div class="cursor-pointer">
        <v-menu open-on-hover bottom offset-y>
          <template v-slot:activator="{ on, attrs }">
            <div v-bind="attrs" v-on="on" class="d-flex align-center">
              <div>
                <h5 class="on_surface--text">Мөнх-Ирээдүй</h5>
                <p class="mb-0 base--text on_surface_light--text">
                  Оюутан <v-icon>mdi-menu-down</v-icon>
                </p>
              </div>
              <v-img
                width="64"
                height="64"
                :src="require('~/assets/images/landing/login_face.png')"
              />
            </div>
          </template>
          <v-list elevation="0" class="pa-0">
            <v-list-item class="pl-0" to="/profile">
              <v-list-item-avatar>
                <v-icon>mdi-account</v-icon>
              </v-list-item-avatar>
              <v-list-item-title> Хувийн мэдээлэл </v-list-item-title>
            </v-list-item>
            <v-list-item class="pl-0" @click="logout()">
              <v-list-item-avatar>
                <v-icon>mdi-logout</v-icon>
              </v-list-item-avatar>
              <v-list-item-title> гарах </v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  data() {
    return {
      search_input: "",
    };
  },
  methods: {
    logout() {
      console.log("гарах");
    },
  },
};
</script>

<style lang="scss" scoped>
.mx-80 {
  max-width: 80%;
}
.text-input {
  max-width: 500px !important;
}
</style>
