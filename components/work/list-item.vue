<template>
  <div v-if="workDetail">
    <nuxt-link :to="`/work/${workDetail.id}`" class="text-decoration-none">
      <v-card class="px-4 mb-6" elevation="1" rounded="xl">
        <v-card-title class="overflow-x-hidden">
          <v-list-item class="px-0">
            <v-list-item-avatar>
              <v-img :src="workDetail.image" />
            </v-list-item-avatar>
            <v-list-item-content>
              <v-list-item-title class="d-flex justify-space-between">
                <span class="primary--text h5--text">
                  {{ workDetail.name }}
                </span>
                <span class="on_surface_light--text small--text">{{
                  workDetail.date
                }}</span>
              </v-list-item-title>
              <v-list-item-subtitle>
                <v-rating
                  v-model="workDetail.rating"
                  dense
                  readonly
                  color="#FFAA05"
                  background-color="grey"
                />
              </v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        </v-card-title>
        <v-card-text class="black--text base--text pb-6">
          {{ workDetail.desc }}
        </v-card-text>
      </v-card>
    </nuxt-link>
  </div>
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
