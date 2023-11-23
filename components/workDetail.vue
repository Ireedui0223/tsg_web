<template>
  <v-card v-if="workDetail" elevation="0" color="#F9F9F9" class="mb-4">
    <div class="d-flex justify-space-between align-center pa-4">
      <div class="d-flex">
        <v-img :src="workDetail.image" height="30" contain class="mr-2" />
        <span class="mb-0">{{ workDetail.name }}</span>
      </div>
      <v-btn icon> <v-icon>mdi-heart</v-icon></v-btn>
    </div>
    <v-card-subtitle class="base--text py-0">
      {{ workDetail.date }} {{ workDetail.type }}
      {{ workDetail.salary }}
    </v-card-subtitle>
    <v-card-title class="h6--text font-weight-bold py-0">
      {{ workDetail.workName }}
    </v-card-title>
    <v-card-actions class="px-3 pb-4">
      <p class="mb-0">
        <v-icon>mdi-map-marker</v-icon>
        {{ workDetail.location }}
      </p>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  props: {
    workDetail: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped></style>
