<template>
  <div>
    <div class="d-flex mt-10">
      <div class="d-flex flex-column mr-6">
        <h3 class="headline">Боломж үргэлж хажууд тань байдаг !</h3>
        <p class="paragraph mt-6">
          TSG num сайт нь Монгол Улсын Их Сургуулийн нийт багш, оюутан, төгсөгч
          нарын харилцаа холбоо, хамтын ажиллагааг дэмжихэд зориулсан
          мэдээлэлийн сайт юм.
        </p>
        <v-spacer></v-spacer>
        <div class="d-flex">
          <v-btn
            depressed
            color="primary"
            class="black--text px-8 mr-8"
            to="/login"
          >
            Нэвтрэх
          </v-btn>
          <v-btn
            depressed
            color="primary"
            class="black--text px-8"
            to="/register"
          >
            Бүртгүүлэх
          </v-btn>
        </div>
      </div>
      <v-img :src="require('@/assets/images/index_page.png')"> </v-img>
    </div>
  </div>
</template>

<script>
export default {
  name: "IndexPage",
};
</script>
<style lang="scss" scoped>
.headline {
  color: #0398b2;
  font-size: 34px;
}
.paragraph {
  color: #000000;
  font-size: 26px;
}
</style>
