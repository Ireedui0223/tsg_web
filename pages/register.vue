<template>
  <div class="mt-8">
    <v-tabs v-model="tab">
      <v-tab-item class="py-2">
        <v-card
          max-width="250"
          color="rgb(0, 151, 178, 0.3)"
          class="d-flex flex-column align-center justify-center mx-auto py-4"
        >
          <v-form>
            <label>Овог</label>
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
            <label>Нэр</label>
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
            <label>Утасны дугаар</label>
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
            <label>SiSi хаяг/Компанийн нэр</label>
            <v-text-field
              dense
              solo
              flat
              filled
              hide-details
              color="info"
              background-color="rgb(277, 240, 240, 0.6)"
            >
            </v-text-field>
            <v-btn
              color="rgb(277, 240, 240, 0.6)"
              block
              depressed
              class="mt-6"
              @click="tab = 1"
            >
              Үргэлжлүүлэх
            </v-btn>
          </v-form>
        </v-card>
      </v-tab-item>
      <v-tab-item class="py-2">
        <v-card
          max-width="250"
          color="rgb(0, 151, 178, 0.3)"
          class="d-flex flex-column align-center justify-center mx-auto pa-4"
        >
          <h3 class="button-large--text mb-0 text-center">
            Таны ******** дугаарт баталгаажуулах код илгээгдлээ
          </h3>
          <v-form>
            <label class="caption--text">Баталгаажуулах кодыг оруулна уу</label>
            <v-text-field
              dense
              solo
              flat
              filled
              hide-details
              color="info"
              background-color="rgb(277, 240, 240, 0.6)"
            >
            </v-text-field>
            <v-btn
              color="rgb(277, 240, 240, 0.6)"
              block
              depressed
              class="mt-6 button-large--text"
            >
              Баталгаажуулах
            </v-btn>
          </v-form>
        </v-card>
      </v-tab-item>
    </v-tabs>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tab: 0,
    };
  },
};
</script>
<style lang="scss" scoped></style>
