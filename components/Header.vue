<template>
  <header>
    <div class="d-flex justify-space-between align-center mt-4">
      <div class="logo-container mt-3">
        <v-img
          width="160"
          height="60"
          :src="require('@/assets/images/tsg_logo.png')"
        ></v-img>
      </div>
      <div class="main-divider mt-2">
        <div class="item-divider"></div>
      </div>
      <v-spacer></v-spacer>
      <div class="d-flex flex-column align-end">
        <div class="mx-200">
          <v-text-field
            dense
            hide-details
            color="primary"
            outlined
            clearable
            placeholder="Хайх"
            append-icon="mdi-magnify"
            class="mb-3"
          />
        </div>
        <div class="d-flex">
          <v-btn depressed color="white" class="text-none">Биднийи тухай</v-btn>
          <v-btn depressed color="white" class="text-none">Биднийи тухай</v-btn>
          <v-btn depressed color="white" class="text-none">Биднийи тухай</v-btn>
          <v-btn depressed color="white" class="text-none">Биднийи тухай</v-btn>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.main-divider {
  position: absolute;
  width: calc(80% + 60px);
  margin-left: -30px;
  margin-right: -30px;
  .item-divider {
    width: 100%;
    border-top: 2px solid rgb(78 194 201);
  }
}
.mx-200 {
  max-width: 200px;
}
.logo-container {
  position: absolute;
  z-index: 1;
}
</style>
