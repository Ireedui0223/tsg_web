<template>
  <v-snackbar
    v-model="$store.state.snackbar.value"
    :color="$store.state.snackbar.type"
    tile
    fixed
    top
    centered
    elevation="2"
  >
    <v-icon class="mr-1">{{ icon($store.state.snackbar.type) }}</v-icon>
    {{ $store.state.snackbar.message }}
    <template v-slot:action="{ attrs }">
      <v-btn
        icon
        v-bind="attrs"
        @click="
          $store.commit('setSnackbar', {
            value: false,
            message: null,
            type: null,
          })
        "
      >
        <v-icon>mdi-close</v-icon>
      </v-btn>
    </template>
  </v-snackbar>
</template>

<script>
export default {
  computed: {
    snackbar() {
      return this.$store.state.snackbar?.value;
    },
  },
  watch: {
    snackbar(newValue, oldValue) {
      if (newValue) {
        setTimeout(() => {
          this.$store.commit("setSnackbar", {
            value: false,
            message: null,
            type: null,
          });
        }, 5000);
      }
    },
  },
  methods: {
    icon(type) {
      switch (type) {
        case "success":
          return "ph-check-circle";
        case "error":
          return "ph-warning";
        case "warning":
          return "ph-circle-wavy-warning";
        case "info":
          return "ph-info";
        default:
          break;
      }
    },
  },
};
</script>

<style lang="scss" scoped></style>
