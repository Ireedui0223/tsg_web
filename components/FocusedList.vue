<template>
  <div>
    <div v-if="workDetail">
      <WorkDetail :workDetail="workDetail" />
    </div>
    <v-tabs v-model="tab" fixed-tabs color="black" class="mb-3">
      <v-tab active-class="black white--text"> Дэлгэрэнгүй </v-tab>
      <v-tab active-class="black white--text"> Байгууллага </v-tab>
    </v-tabs>
    <v-tabs-items v-model="tab" class="mx-2">
      <v-tab-item>
        <h5 class="h5--text font-weight-bold mb-3">Гүйцэтгэх үндсэн үүрэг</h5>
        <ul class="mb-4">
          <li class="grey--text">
            Хэрэглэгчдэд ойлгомжтой, тохиромжтой UX,UIдизайн гаргахын тулд Game
            Designer болон хөгжүүлжлтийн багтай хамтран ажиллах
          </li>
          <li class="grey--text">3D модель болон анимейшнууд хийх</li>
          <li class="grey--text">
            Тухайн тоглоомдоо тохиромжтой өнгө үзэмжтэй UI загвар гаргах
          </li>
          <li class="grey--text">
            Тоглогчийн сэтгэл ханамж болон тоглох хугацааг уртасгахын тулд
            өөрийн хийсэн дизайнаа тогтмол сайжруулалт хийх
          </li>
        </ul>

        <h5 class="h5--text font-weight-bold mb-3">
          Ажлын байранд тавигдах шаардлага
        </h5>
        <ul class="mb-4">
          <li class="grey--text">
            Хэрэглэгчдэд ойлгомжтой, тохиромжтой UX,UIдизайн гаргахын тулд Game
            Designer болон хөгжүүлжлтийн багтай хамтран ажиллах
          </li>
          <li class="grey--text">3D модель болон анимейшнууд хийх</li>
          <li class="grey--text">
            Тухайн тоглоомдоо тохиромжтой өнгө үзэмжтэй UI загвар гаргах
          </li>
          <li class="grey--text">
            Тоглогчийн сэтгэл ханамж болон тоглох хугацааг уртасгахын тулд
            өөрийн хийсэн дизайнаа тогтмол сайжруулалт хийх
          </li>
        </ul>

        <h5 class="h5--text font-weight-bold mb-3">Нэмэлт мэдээлэл</h5>
        <ul>
          <li class="grey--text">
            Хэрэглэгчдэд ойлгомжтой, тохиромжтой UX,UIдизайн гаргахын тулд Game
            Designer болон хөгжүүлжлтийн багтай хамтран ажиллах
          </li>
          <li class="grey--text">3D модель болон анимейшнууд хийх</li>
          <li class="grey--text">
            Тухайн тоглоомдоо тохиромжтой өнгө үзэмжтэй UI загвар гаргах
          </li>
          <li class="grey--text">
            Тоглогчийн сэтгэл ханамж болон тоглох хугацааг уртасгахын тулд
            өөрийн хийсэн дизайнаа тогтмол сайжруулалт хийх
          </li>
        </ul>
      </v-tab-item>
      <v-tab-item> 1123123 </v-tab-item>
    </v-tabs-items>
  </div>
</template>

<script>
import WorkDetail from "./workDetail.vue";
export default {
  props: {
    workDetail: {
      type: Object,
      required: true,
    },
  },
  components: {
    WorkDetail,
  },
  data() {
    return {
      tab: 0,
    };
  },
};
</script>

<style lang="scss" scoped></style>
