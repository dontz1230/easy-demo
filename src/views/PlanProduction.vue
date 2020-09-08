<template>
  <div class="planProduction">
    <loading v-if="isLoading" />
    <h1 class="title">長照機構災管計畫產製工具</h1>
    <swiper
      class="imgContainer"
      ref="mySwiper"
      :options="swiperOptions"
      @slideChange="changeSwiperIndex"
    >
      <swiper-slide>
        <img src="../assets/img/planList/01.png" alt />
      </swiper-slide>
      <swiper-slide>
        <img src="../assets/img/planList/02.png" alt />
      </swiper-slide>
      <swiper-slide>
        <img src="../assets/img/planList/03.png" alt />
      </swiper-slide>
      <swiper-slide>
        <img src="../assets/img/planList/04.jpg" alt />
      </swiper-slide>
      <swiper-slide>
        <img src="../assets/img/planList/05.png" alt />
      </swiper-slide>
      <div class="swiper-pagination pagi" slot="pagination"></div>
      <div class="swiper-button-prev" slot="button-prev"></div>
      <div class="swiper-button-next" slot="button-next"></div>
    </swiper>

    <router-link v-if="swiperIndex !== 4" to="planlist" class="skip">跳過</router-link>
    <router-link v-else to="planlist" class="skip">開始填答</router-link>
    <!-- <div class="swiper">
      <div class="imgContainer">
        <img v-if="active === 1" src="../assets/img/planList/01.png" alt />
        <img v-if="active === 2" src="../assets/img/planList/02.png" alt />
        <img v-if="active === 3" src="../assets/img/planList/03.png" alt />
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
    </div>-->
    <!-- <div class="dotContainer">
      <router-link to="planlist" class="skip">跳過</router-link>
    </div>-->
  </div>
</template>

<script>
import { Swiper, SwiperSlide, directive } from "vue-awesome-swiper";
// import "swiper/css/swiper.css";
// import "swiper/swiper-bundle.css";
export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  directives: {
    swiper: directive,
  },
  data: function () {
    return {
      isLoading: false,
      swiperOptions: {
        slidesPerView: 1,
        spaceBetween: 30,
        loop: false,
        pagination: {
          el: ".pagi",
          clickable: true,
          type: "bullets",
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      },
      active: 1,
      swiperIndex: ''
    };
  },
  methods: {
    changeSwiperIndex() {
      this.swiperIndex = this.$refs.mySwiper.$swiper.activeIndex;
    },
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.$swiper;
    }
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
  padding-bottom: 40px;
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
  display: inline-block;
  float: left;
  position: absolute;
  bottom: 45px;
  left: 58%;
  z-index: 9999;
  &:hover {
    color: #fff;
    background: #469b89;
  }
}

.title {
  font-size: 42px;
}

.swiper-pagination-bullet {
  display: inline-block !important;
  height: 30px !important;
  width: 30px !important;
  background: #fff !important;
  border: 4px solid #d9d9d9 !important;
  text-align: center !important;
  line-height: 30px !important;
  border-radius: 50rem !important;
  margin: 0 20px;
}

.swiper-pagination {
  position: absolute;
  text-align: center;
  transition: 300ms opacity;
  transform: translate3d(0, 0, 0);
  z-index: 10;
}
.swiper-pagination.swiper-pagination-hidden {
  opacity: 0;
}
/* Common Styles */
.swiper-pagination-fraction,
.swiper-pagination-custom,
.swiper-container-horizontal > .swiper-pagination-bullets {
  bottom: 10px;
  left: 0;
  width: 100%;
  position: static;
  bottom: -40px;
  z-index: 999999;
}
/* Bullets */
.swiper-pagination-bullets-dynamic {
  overflow: hidden;
  font-size: 0;
}
.swiper-pagination-bullets-dynamic .swiper-pagination-bullet {
  transform: scale(0.33);
  position: relative;
}
.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active {
  background: #008780 !important;
  transform: scale(1);
}
.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-main {
  background: #008780 !important;
  transform: scale(1);
}
.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-prev {
  background: #008780 !important;
  transform: scale(0.66);
}
.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-prev-prev {
  background: #008780 !important;
  transform: scale(0.33);
}
.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-next {
  background: #008780 !important;
  transform: scale(0.66);
}
.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-next-next {
  background: #008780 !important;
  transform: scale(0.33);
}
.swiper-pagination-bullet {
  width: 8px;
  height: 8px;
  display: inline-block;
  border-radius: 100%;
  background: #000;
  opacity: 0.2;
}
button.swiper-pagination-bullet {
  border: none;
  margin: 0;
  padding: 0;
  box-shadow: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
}
.swiper-pagination-clickable .swiper-pagination-bullet {
  cursor: pointer;
}
.swiper-pagination-bullet-active {
  opacity: 1;
  background: #008780 !important;
  // background: var(--swiper-pagination-color, var(--swiper-theme-color));
}
.swiper-container-vertical > .swiper-pagination-bullets {
  right: 10px;
  top: 50%;
  transform: translate3d(0px, -50%, 0);
}
.swiper-container-vertical
  > .swiper-pagination-bullets
  .swiper-pagination-bullet {
  margin: 6px 0;
  display: block;
}
.swiper-container-vertical
  > .swiper-pagination-bullets.swiper-pagination-bullets-dynamic {
  top: 50%;
  transform: translateY(-50%);
  width: 8px;
}
.swiper-container-vertical
  > .swiper-pagination-bullets.swiper-pagination-bullets-dynamic
  .swiper-pagination-bullet {
  display: inline-block;
  transition: 200ms transform, 200ms top;
}
.swiper-container-horizontal
  > .swiper-pagination-bullets
  .swiper-pagination-bullet {
  margin: 0 4px;
}
.swiper-container-horizontal
  > .swiper-pagination-bullets.swiper-pagination-bullets-dynamic {
  left: 50%;
  transform: translateX(-50%);
  white-space: nowrap;
}
.swiper-container-horizontal
  > .swiper-pagination-bullets.swiper-pagination-bullets-dynamic
  .swiper-pagination-bullet {
  transition: 200ms transform, 200ms left;
}
.swiper-container-horizontal.swiper-container-rtl
  > .swiper-pagination-bullets-dynamic
  .swiper-pagination-bullet {
  transition: 200ms transform, 200ms right;
}
/* Progress */
.swiper-pagination-progressbar {
  background: rgba(0, 0, 0, 0.25);
  position: absolute;
}
.swiper-pagination-progressbar .swiper-pagination-progressbar-fill {
  background: var(--swiper-pagination-color, var(--swiper-theme-color));
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  transform: scale(0);
  transform-origin: left top;
}
.swiper-container-rtl
  .swiper-pagination-progressbar
  .swiper-pagination-progressbar-fill {
  transform-origin: right top;
}
.swiper-container-horizontal > .swiper-pagination-progressbar,
.swiper-container-vertical
  > .swiper-pagination-progressbar.swiper-pagination-progressbar-opposite {
  width: 100%;
  height: 4px;
  left: 0;
  top: 0;
}
.swiper-container-vertical > .swiper-pagination-progressbar,
.swiper-container-horizontal
  > .swiper-pagination-progressbar.swiper-pagination-progressbar-opposite {
  width: 4px;
  height: 100%;
  left: 0;
  top: 0;
}
.swiper-pagination-white {
  --swiper-pagination-color: #ffffff;
}
.swiper-pagination-black {
  --swiper-pagination-color: #000000;
}
.swiper-pagination-lock {
  display: none;
}
</style>