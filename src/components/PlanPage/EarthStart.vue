<template>
  <div class="plan-section plan-section-three-four">
    <TheTemplate @closeModal="closeModal" v-if="modalOne" @replace="replaceFirst">
      <template #header>參考範本</template>
      <div class="modalContent">
        <p style="padding: 30px 20px 0px;color:#777;font-size:1.25rem;">請選擇您要使用的範本文字</p>
        <p
          style="font-size: 1.25rem !important;margin: 10px 0px 10px 40px;color:#777;font-size:1.25rem;"
        >
          <input type="radio" v-model="oneText" :value="oneText" />
          {{oneText}}
        </p>
      </div>
      <template #footer>確定送出</template>
    </TheTemplate>
    <TheTemplate @closeModal="closeModal" v-if="modalTwo" @replace="replaceSecond">
      <template #header>參考範本</template>
      <div class="modalContent">
        <p style="padding: 30px 20px 0px;color:#777;font-size:1.25rem;">請選擇您要使用的範本文字</p>
        <p
          style="font-size: 1.25rem !important;margin: 10px 0px 10px 40px;color:#777;font-size:1.25rem;"
        >
          <input type="radio" v-model="twoText" :value="twoText" />
          {{twoText}}
        </p>
      </div>
      <template #footer>確定送出</template>
    </TheTemplate>

    <div class="planHeader">
      <div v-if="eq" class="planHeader__title">地震災害應變流程</div>
      <div v-else class="planHeader__title">颱洪災害應變流程</div>
      <div class="planHeader__option">
        <img src="~@/assets/img/planList/advice.png" alt />
        <span>撰寫原則或建議</span>
      </div>
      <div class="planHeader__option">
        <img src="~@/assets/img/planList/template.png" alt />
        <span>參考撰寫範本</span>
      </div>
    </div>
    <div class="planTopic">
      <div class="themeColor">(一)應變啟動與人員召回</div>
    </div>
    <div class="planTitle">
      <div class="planTitle__text">應變啟動時機</div>
      <div class="planTitle__redIcon" data-red="應變啟動時機">
        <i class="fas fa-question"></i>
      </div>
      <div class="planTitle__greenIcon" @click="modalOne = !modalOne">
        <i class="fas fa-pencil-alt"></i>
      </div>
    </div>
    <div class="textContainer">
      <img v-if="pointing === 1" src="~@/assets/img/planList/point.png" />
      <textarea
        @focus="pointing= 1"
        @input="descInput(items[0],items[0].content);"
        v-model="items[0].content"
        class="mdTxt"
        name
        id
        maxlength="500"
      ></textarea>
      <p style="text-align:right;margin:0;font-size:14px;">{{items[0].remnant}} / 500</p>
    </div>

    <div class="planTitle">
      <div class="planTitle__text">人員召回機制</div>
      <div class="planTitle__redIcon" data-red="人員召回機制">
        <i class="fas fa-question"></i>
      </div>
      <div class="planTitle__greenIcon" @click="modalTwo = !modalTwo">
        <i class="fas fa-pencil-alt"></i>
      </div>
    </div>

    <div class="textContainer">
      <img v-if="pointing === 2" src="~@/assets/img/planList/point.png" />
      <textarea
        @focus="pointing= 2"
        @input="descInput(items[1],items[1].content);"
        v-model="items[1].content"
        class="lgTxt"
        name
        id
        maxlength="500"
      ></textarea>
      <p style="text-align:right;margin:0;font-size:14px;">{{items[1].remnant}} / 1000</p>
    </div>
  </div>
</template>
<script>
import TheTemplate from "./TheTemplate";
export default {
  components: {
    TheTemplate: TheTemplate,
  },
  props: {
    eq: {
      type: Boolean,
      default: true,
    },
  },
  data() {
    return {
      items: [
        { content: "", remnant: 500, limit: 500 },
        { content: "", remnant: 1000, limit: 1000 },
      ],
      pointing: 0,
      modalOne: false,
      modalTwo: false
    };
  },
  computed: {
    oneText(val) {
      if (this.eq) {
        return "地震發生當下立即執行「趴（坐）下、掩護、穩住」。 震度五級以上或機構建築物有損毀情況，啟動應變。";
      } else {
        return "發布海上颱風警報或豪雨特報時，各班先執行應變前置作業，包含收集颱風／豪雨資訊、盤點物資、檢查機構及周邊環境設施。發布海上陸上颱風警報，或是淹水二級警戒時，啟動應變。";
      }
    },
    twoText(val) {
      if (this.eq) {
        return  "依據災害管理計畫及應變小組名冊，聯繫應召回機構之人員，聯絡方式包含院內廣播、line群組告知及手機電話聯絡。在院內值班的人員聽到院內廣播後，立即向通報班報到；住宿於院內的非值班同仁接到通知後，於10分鐘內到現場向通報辦報到；機構外之應變人員則需於接到通知後一小時內進駐機構向通報班報到。研判人力不足時，向社會局、其他簽署合約機構、村里長或院民／住民家屬等聯繫，尋求外援人力。"
      } else {
        return "依據災害管理計畫及應變小組名冊，聯繫應召回機構之人員，聯絡方式包含院內廣播、line群組告知及手機電話聯絡。在院內值班的人員聽到院內廣播後，立即向通報班報到；住宿於院內的非值班同仁接到通知後，於10分鐘內到現場向通報辦報到；機構外之應變人員則需於接到通知後一小時內進駐機構向通報班報到。研判人力不足時，向社會局、其他簽署合約機構、村里長或院民／住民家屬等聯繫，尋求外援人力。";
      }
    },
  },
  methods: {
    descInput(item, text) {
      var txtVal = text.length;
      item.remnant = item.limit - txtVal;
    },
    closeModal() {
      this.modalOne = false;
      this.modalTwo = false;
    },
    replaceFirst() {
      this.items[0].content = this.oneText;
      this.descInput(this.items[0], this.items[0].content);
      this.modalOne = false;
    },
    replaceSecond() {
      this.items[1].content = this.twoText;
      this.descInput(this.items[1], this.items[1].content);
      this.modalTwo = false;
    },
  },
};
</script>
<style lang="scss" scoped>
.teamClass {
  display: flex;
  width: 500px;
  justify-content: space-between;
  margin-bottom: 15px;
  &__block {
    display: flex;
    align-items: center;
    input[type="checkbox"] {
      position: relative !important;
      left: auto;
      -webkit-appearance: checkbox;
    }

    button {
      background: #ff8a8a;
      padding: 4px 23px;
      border-radius: 4px;
      color: #fff;
      margin-left: 16px;
    }
  }
}

.label {
  padding: 0 !important;
  font-size: 1rem !important;
  font-weight: normal !important;
  &:before {
    display: none;
  }
  &:after {
    display: none;
  }
}

.planJob {
  margin: 10px auto;
  img {
    vertical-align: bottom;
    margin-left: 20px;
    margin-bottom: 4px;
  }
  .addBtn {
    display: inline-block;
    float: right;
  }
}

input[type="radio"] {
  display: inline-block;
  left: unset;
  position: relative;
  width: 30px;
  height: 30px;
  border-radius: 50em;
  -webkit-appearance: auto;
  margin-right: 8px;
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 30px;
    height: 30px;
    border-radius: 50em;
    border: 4px solid #d4d4d4;
  }
  &:checked::before {
    background: #66cdb6;
  }
}

.styleBlock__text input[type="radio"] {
  top: 0 !important;
}

.styleBlock__text {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 182px;
  margin-bottom: 2px;
  color: #777;
}
</style>
