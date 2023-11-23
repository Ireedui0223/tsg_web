<template>
  <div>
    <v-sheet color="primary" height="">
      <div class="mx-80 py-10">
        <div class="content-container">
          <div class="student-content">
            <h3 class="white--text landing-large--text content-title">
              Find the job that fits your life
            </h3>
            <p class="white--text mt-4">
              Resume-Library is a true performance-based job board. Enjoy custom
              hiring products and access to up to 10,000 new resume
              registrations daily, with no subscriptions or user licences.
              (Тайлбар мэдээлэл)
            </p>
            <div class="">
              <span class="white--text mr-1">Бүтэн цаг</span>
              <span class="white--text mr-1">Гэрээт</span>
              <span class="white--text mr-1">Цагийн ажил</span>
              <span class="white--text mr-1">Дадлагжих хөтөлбөр</span>
              <span class="white--text mr-1">Түр ажил</span>
            </div>
          </div>
          <div class="image-container">
            <div class="box-1">
              <v-img
                src="https://a0.anyrgb.com/pngimg/956/390/mongolian-pattern-happy-baby-mongols-bear-doll-wedding-doll-doll-cute-baby-doll-mongolian-barbie-doll-mongolia.png"
              />
              <div class="circle-container">
                <div class="inlay-circle-1" />
              </div>
            </div>
            <div class="box-2">
              <v-img :src="require('~/assets/images/student/intro-girl.png')" />
              <div class="circle-container">
                <div class="inlay-circle-2" />
              </div>
            </div>
            <div class="heart-icon">
              <img
                :src="require('~/assets/images/student/heart.png')"
                alt="images"
              />
            </div>
            <div class="like-icon">
              <v-img
                :src="require('~/assets/images/student/like.png')"
                alt="images"
              />
            </div>
          </div>
        </div>
      </div>
    </v-sheet>

    <div class="mx-80 mt-6">
      <h3 class="landing-large--text text-center">Ажилууд</h3>
      <p class="mt-2 h4--text text-center">Онцгой ажилууд</p>
      <div v-for="(work, index) in works" :key="index">
        <WorkDetail :workDetail="work" />
      </div>
      <div class="d-flex justify-center">
        <v-btn color="primary" outlined rounded to="/works">
          Илүү их ажил үзэх
        </v-btn>
      </div>

      <v-row>
        <v-col cols="12" md="6" xl="6" sm="6">
          <v-img :src="require('~/assets/images/landing/career.png')"></v-img>
        </v-col>
        <v-col cols="12" md="6" xl="6" sm="6">
          <h3 class="landing-large--text">Бид юу хийдэг вэ</h3>
          <h3 class="landing-large--text primary--text">Ажил зуулчлал</h3>
        </v-col>
      </v-row>
    </div>
  </div>
</template>

<script>
import WorkDetail from "../components/work/list-item.vue";
export default {
  components: {
    WorkDetail,
  },
  data() {
    return {
      works: [
        {
          id: 1,
          image:
            "https://w7.pngwing.com/pngs/466/97/png-transparent-siler-monitor-computer-icons-computer-desktop-pc-blue-angle-electronics.png",
          name: "Зээлийн ажилтан /Хан-Уул салбарт/",
          rating: 4,
          date: "2 өдрийн өмнө",
          desc: "Зээлийн судалгаа шинжилгээ хийх, бүтээгдэхүүн үйлчилгээг борлуулах, олгосон зээлд хяналт тавих, зэрэг ажлын байрны тодорхойлолтын дагуу",
        },
        {
          id: 2,
          image:
            "https://w7.pngwing.com/pngs/466/97/png-transparent-siler-monitor-computer-icons-computer-desktop-pc-blue-angle-electronics.png",
          name: "Зээлийн ажилтан /Хан-Уул салбарт/",
          rating: 4,
          date: "2 өдрийн өмнө",
          desc: "Зээлийн судалгаа шинжилгээ хийх, бүтээгдэхүүн үйлчилгээг борлуулах, олгосон зээлд хяналт тавих, зэрэг ажлын байрны тодорхойлолтын дагуу",
        },
        {
          id: 3,
          image:
            "https://w7.pngwing.com/pngs/466/97/png-transparent-siler-monitor-computer-icons-computer-desktop-pc-blue-angle-electronics.png",
          name: "Зээлийн ажилтан /Хан-Уул салбарт/",
          rating: 4,
          date: "2 өдрийн өмнө",
          desc: "Зээлийн судалгаа шинжилгээ хийх, бүтээгдэхүүн үйлчилгээг борлуулах, олгосон зээлд хяналт тавих, зэрэг ажлын байрны тодорхойлолтын дагуу",
        },
        {
          id: 4,
          image:
            "https://w7.pngwing.com/pngs/466/97/png-transparent-siler-monitor-computer-icons-computer-desktop-pc-blue-angle-electronics.png",
          name: "Зээлийн ажилтан /Хан-Уул салбарт/",
          rating: 4,
          date: "2 өдрийн өмнө",
          desc: "Зээлийн судалгаа шинжилгээ хийх, бүтээгдэхүүн үйлчилгээг борлуулах, олгосон зээлд хяналт тавих, зэрэг ажлын байрны тодорхойлолтын дагуу",
        },
        {
          id: 5,
          image:
            "https://w7.pngwing.com/pngs/466/97/png-transparent-siler-monitor-computer-icons-computer-desktop-pc-blue-angle-electronics.png",
          name: "Зээлийн ажилтан /Хан-Уул салбарт/",
          rating: 4,
          date: "2 өдрийн өмнө",
          desc: "Зээлийн судалгаа шинжилгээ хийх, бүтээгдэхүүн үйлчилгээг борлуулах, олгосон зээлд хяналт тавих, зэрэг ажлын байрны тодорхойлолтын дагуу",
        },
        {
          id: 6,
          image:
            "https://w7.pngwing.com/pngs/466/97/png-transparent-siler-monitor-computer-icons-computer-desktop-pc-blue-angle-electronics.png",
          name: "Зээлийн ажилтан /Хан-Уул салбарт/",
          rating: 4,
          date: "2 өдрийн өмнө",
          desc: "Зээлийн судалгаа шинжилгээ хийх, бүтээгдэхүүн үйлчилгээг борлуулах, олгосон зээлд хяналт тавих, зэрэг ажлын байрны тодорхойлолтын дагуу",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
@keyframes scaler {
  0% {
    transform: scale(0.89, 0.89);
  }
  50% {
    transform: scale(1, 1);
  }
  100% {
    transform: scale(0.89, 0.89);
  }
}
@keyframes heart-move {
  0% {
    -webkit-transform: translate(0px, 0px) rotate(0deg);
    transform: translate(0px, 0px) rotate(0deg);
  }
  20% {
    -webkit-transform: translate(-13px, 1px) rotate(-6deg);
    transform: translate(-13px, 1px) rotate(-6deg);
  }
  40% {
    -webkit-transform: translate(-41px, -22px) rotate(-22deg);
    transform: translate(-41px, -22px) rotate(-22deg);
  }
  60% {
    -webkit-transform: translate(-33px, -22px) rotate(-50deg);
    transform: translate(-33px, -22px) rotate(-50deg);
  }
  80% {
    -webkit-transform: translate(40px, -72px) rotate(-50deg);
    transform: translate(40px, -72px) rotate(-50deg);
  }
  100% {
    -webkit-transform: translate(0px, 0px) rotate(0deg);
    transform: translate(0px, 0px) rotate(0deg);
  }
}
@keyframes like-bumb {
  0% {
    transform: scale(0.8, 0.8);
  }

  50% {
    transform: scale(1, 1);
  }
  100% {
    transform: scale(0.8, 0.8);
  }
}

.mx-80 {
  max-width: 80%;
  margin: auto;
}
.content-container {
  display: flex;
  flex: wrap;
  width: 80%;
  margin: auto;
  .student-content {
    width: 67%;
    flex: 0 0 auto;
    margin: 80px 0 80px 0;
    .content-title {
      width: 70%;
    }
    .motto {
      font-size: 0.8rem;
    }
    .job-choice-container {
      margin-top: 8px;
      span {
        margin-right: 16px;
        color: white;
        font-size: 0.7rem;
      }
    }
  }
  .image-container {
    position: relative;
    align-content: center;
    height: 340px;
    max-width: 290px;
    width: 33%;
    flex: 0 0 auto;
    display: flex;
    margin: 30px;
    .box-1 {
      width: 60%;
      position: relative;
      margin-left: -10.4%;
      margin-top: -14%;
      margin-right: -6%;
      flex-grow: 1;
      div {
        width: 160px;
        margin-right: 32px;
        border-radius: 120px;
        position: absolute;
      }
      .circle-container {
        animation: scaler 4s infinite ease-in-out alternate;
        top: -10px;
        right: 23px;
        position: absolute;
        .inlay-circle-1 {
          width: 180px;
          height: 180px;
          border: solid transparent 4px;
          border-right: solid #10d1ef 4px;
          border-radius: 50%;
          transform: rotate(-45deg);
        }
      }
    }
    .box-2 {
      width: 40%;
      position: relative;
      margin-left: 0%;
      margin-top: 19.4%;
      margin-right: -11%;
      flex-grow: 1;
      background: rgb(232, 231, 231, 0.5);
      border-radius: 120px;
      div {
        position: absolute;
        height: 100%;
        width: auto;
      }
      .circle-container {
        animation: scaler 4s infinite ease-in-out alternate;
        bottom: -120px;
        right: -4px;
        position: absolute;
        .inlay-circle-2 {
          width: 180px;
          height: 180px;
          border: solid transparent 4px;
          border-right: solid #ffc766 4px;
          border-radius: 50%;
          transform: rotate(45deg);
        }
      }
    }
    .heart-icon {
      position: absolute;
      bottom: 6%;
      left: 26%;
      animation: heart-move 7s infinite ease-in-out alternate;
    }
    .like-icon {
      position: absolute;
      top: 10.4%;
      left: 100%;
      z-index: 10;
      animation: like-bumb 4s infinite ease-in-out alternate;
    }
  }
}
</style>
