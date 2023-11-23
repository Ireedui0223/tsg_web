<template>
  <div class="main-container mx-auto mx-90">
    <v-sheet color="white" height="100%" class="pa-6">
      <h3 class="h6--text mb-2 font-weight-bold">Шүүх</h3>
      <h3 class="h6--text mb-2 font-weight-bold">Цалин</h3>
      <p class="d-flex justify-space-between mb-n1 mx-2">
        <span>{{ salary[0] }} мянга</span>
        <span>{{ salary[1] }} мянга</span>
      </p>
      <v-range-slider
        color="black"
        track-color="grey"
        thumb-color="black"
        v-model="salary"
      />

      <h3 class="h6--text mb-2 font-weight-bold">Төрөл</h3>
      <v-radio-group v-model="type_choice">
        <v-radio
          v-for="(choice, index) in type_choices"
          :key="`choice-${index}`"
          :label="choice.label"
          :value="choice.value"
          color="primary"
        ></v-radio>
      </v-radio-group>

      <h3 class="h6--text mb-2 font-weight-bold">Туршлага</h3>
      <v-radio-group v-model="experience" hide-details class="mb-4">
        <v-radio
          v-for="(choice, index) in experiences"
          :key="`experience-${index}`"
          :label="choice.label"
          :value="choice.value"
          color="primary"
        ></v-radio>
      </v-radio-group>

      <h3 class="h6--text mb-2 font-weight-bold">Туршлага</h3>
      <v-rating v-model="rating_filter" dense class="mb-4" />

      <h3 class="h6--text mb-2 font-weight-bold">Чиглэл</h3>
      <v-radio-group v-model="experience">
        <v-radio
          v-for="(choice, index) in experiences"
          :key="`experience-${index}`"
          :label="choice.label"
          :value="choice.value"
          color="primary"
        />
      </v-radio-group>
    </v-sheet>
    <div class="ml-4">
      <v-text-field
        v-model="search_value"
        depressed
        solo
        flat
        max-width="300"
        hide-details
        placeholder="Хайх"
        class="rounded-lg"
        append-icon="mdi-magnify"
      >
        <template v-slot:prepend-inner>
          <div class="d-flex align-center mr-4">
            <v-icon color="black" class="mr-1">mdi-map-marker</v-icon>
            <p class="mb-0">Улаанбаатар</p>
          </div>
        </template>
      </v-text-field>

      <v-row class="mt-8">
        <v-col cols="6">
          <v-sheet color="white" class="pa-5 rounded-lg">
            <div
              v-for="(workDetail, index) in workList"
              :key="`work-detail-${index}`"
              @click="focusedDetail = workDetail"
              class="cursor-pointer"
            >
              <WorkDetail :workDetail="workDetail" />
            </div>
          </v-sheet>
        </v-col>
        <v-col cols="6" class="pa-4">
          <v-sheet color="white" class="pa-4 rounded-lg">
            <FocusedList :workDetail="focusedDetail" />
          </v-sheet>
        </v-col>
      </v-row>
    </div>
  </div>
</template>

<script>
import FocusedList from "../components/FocusedList.vue";
import WorkDetail from "../components/workDetail.vue";
export default {
  components: {
    FocusedList,
    WorkDetail,
  },
  data() {
    return {
      salary: ["", ""],
      search_value: "",
      type_choice: "",
      type_choices: [
        { value: "full", label: "Бүтэн цагаар" },
        { value: "season", label: "Улиралаар" },
        { value: "part", label: "Цагаар" },
      ],
      experience: false,
      experiences: [
        { value: false, label: "Шаардахгүй" },
        { value: true, label: "Шаардах" },
      ],
      rating_filter: 5,
      workList: [
        {
          image: require("@/assets/images/teso.png"),
          workName: "Дизайнер",
          name: "Тэсо грүпп",
          salary: " 2’100’000₮",
          type: "Бүтэн цагийн",
          location: "Сүхбаатар, Улаанбаатар",
          date: "1 өдрийн өмнө",
        },
        {
          image: require("@/assets/images/teso.png"),
          workName: "Дизайнер",
          name: "Тэсо грүпп",
          salary: " 2’100’000₮",
          type: "Бүтэн цагийн",
          location: "Сүхбаатар, Улаанбаатар",
          date: " 1 өдрийн өмнө",
        },
        {
          image: require("@/assets/images/teso.png"),
          workName: "Дизайнер",
          name: "Тэсо грүпп",
          salary: " 2’100’000₮",
          type: "Бүтэн цагийн",
          location: "Сүхбаатар, Улаанбаатар",
          date: " 1 өдрийн өмнө",
        },
        {
          image: require("@/assets/images/teso.png"),
          workName: "Дизайнер",
          name: "Тэсо грүпп",
          salary: " 2’100’000₮",
          type: "Бүтэн цагийн",
          location: "Сүхбаатар, Улаанбаатар",
          date: " 1 өдрийн өмнө",
        },
        {
          image: require("@/assets/images/teso.png"),
          workName: "Дизайнер",
          name: "Тэсо грүпп",
          salary: " 2’100’000₮",
          type: "Бүтэн цагийн",
          location: "Сүхбаатар, Улаанбаатар",
          date: " 1 өдрийн өмнө",
        },
        {
          image: require("@/assets/images/teso.png"),
          workName: "Дизайнер",
          name: "Тэсо грүпп",
          salary: " 2’100’000₮",
          type: "Бүтэн цагийн",
          location: "Сүхбаатар, Улаанбаатар",
          date: " 1 өдрийн өмнө",
        },
        {
          image: require("@/assets/images/teso.png"),
          workName: "Дизайнер",
          name: "Тэсо грүпп",
          salary: " 2’100’000₮",
          type: "Бүтэн цагийн",
          location: "Сүхбаатар, Улаанбаатар",
          date: " 1 өдрийн өмнө",
        },
        {
          image: require("@/assets/images/teso.png"),
          workName: "Дизайнер",
          name: "Тэсо грүпп",
          salary: " 2’100’000₮",
          type: "Бүтэн цагийн",
          location: "Сүхбаатар, Улаанбаатар",
          date: " 1 өдрийн өмнө",
        },
        {
          image: require("@/assets/images/teso.png"),
          workName: "Дизайнер",
          name: "Тэсо грүпп",
          salary: " 2’100’000₮",
          type: "Бүтэн цагийн",
          location: "Сүхбаатар, Улаанбаатар",
          date: " 1 өдрийн өмнө",
        },
      ],
      focusedDetail: null,
    };
  },
  methods: {
    test() {
      console.log("test");
    },
  },
  mounted() {
    this.focusedDetail = this.workList[0];
  },
};
</script>

<style lang="scss" scoped>
.mx-90 {
  max-width: 90%;
}
@media (min-width: 1920px) {
  .mx-90 {
    max-width: 1600px;
  }
}
.main-container {
  width: 90%;
  display: grid;
  grid-template-columns: 340px auto;
}
</style>
