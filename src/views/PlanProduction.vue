<template>
  <div class="planProduction">
    <loading v-if="isLoading" />
    <h1 class="title">長照機構災管計畫產製工具</h1>
    <div class="swiper" :options="swiperOption">
      <div class="imgContainer">
        <img v-if="active === 1" src="../assets/img/planList/01.jpg" alt />
        <img v-if="active === 2" src="../assets/img/planList/02.jpg" alt />
        <img v-if="active === 3" src="../assets/img/planList/03.jpg" alt />
        <img v-if="active === 4" src="../assets/img/planList/04.jpg" alt />
      </div>
      <div
        v-if="active !== 1"
        class="swiper-button-prev"
        @click="changePage('prev')"
        style="color:#fff;"
      ></div>
      <div
        v-if="active !==4 "
        class="swiper-button-next"
        @click="changePage('next')"
        style="color:#fff;"
      ></div>
    </div>
    <div class="dotContainer">
      <div
        class="dot"
        v-for="(item,index) in 4"
        :key="index"
        @click="changeDot(item)"
        :class="{'activeDot' : active === item}"
      ></div>
      <router-link to="planlist" class="skip">跳過</router-link>
    </div>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
import "swiper/css/swiper.min.css";

export default {
  data: function () {
    return {
      isLoading: false,
      swiperOption: {
        slidesPerView: 1,
        spaceBetween: 30,
        loop: false,
        // pagination: {
        //   el: ".swiper-pagination",
        //   clickable: true,
        //   type: "bullets"
        // },
        // autoplay: {
        //   delay: 2000,
        //   disableOnInteraction: false
        // },
        // navigation: {
        //   nextEl: ".swiper-button-next",
        //   prevEl: ".swiper-button-prev"
        // }
      },
      active: 1,
    };
  },
  components: {
    Swiper,
    SwiperSlide,
  },
  computed: {},
  methods: {
    changeDot(index) {
      console.log(index);
      this.active = index;
    },
    changePage(type) {
      if (type === "prev") {
        this.active--;
      } else {
        this.active++;
      }
    },
  },
};
</script>
<style lang="scss" scoped>
@import "../assets/scss/style.scss";
.planProduction {
  max-width: 1280px;
  margin: auto;
  height: 100%;
  overflow: hidden;
}
.title {
  font-size: 1.5rem;
  color: $themeGreen;
  padding: 36px 22px;
  font-weight: bold;
}

.imgContainer {
  border-radius: 28px;
  overflow: hidden;
}
img {
  width: 100%;
}

.swiper-button-prev {
  width: 50px;
  height: 50px;
  position: absolute;
  top: 50%;
  left: 30px;
  z-index: 1;
  color: #fff;
}

.swiper-button-next {
  width: 50px;
  height: 50px;
  position: absolute;
  top: 50%;
  right: 30px;
  z-index: 1;
  color: #fff;
}

.dot {
  width: 30px;
  display: inline-block;
  height: 30px;
  background: #fff;
  border: 4px solid #d9d9d9;
  text-align: center;
  line-height: 30px;
  border-radius: 50rem;
  margin: 0 10px;
}
.dotContainer {
  margin: auto;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 16px;
}

.activeDot {
  background: #008780 !important;
}

.skip {
  margin: 0 10px;
  display: inline-block;
  background: #008780;
  color: #fff;
  border: 1px solid #efefef;
  padding: 0px 16px;
  border-radius: 100px;
  &:hover {
    color: #fff;
    background: #469b89;
  }
}

.title {
  font-size: 42px;
}
</style>