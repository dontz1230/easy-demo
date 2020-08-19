<template>
  <div class="plan-section plan-section-three-four">
    <div class="planHeader">
      <div class="planHeader__title">停電災害應變流程</div>
      <div class="planHeader__option">
        <img src="~@/assets/img/planList/advice.png" alt />
        <span>撰寫原則或建議</span>
      </div>
      <div class="planHeader__option">
        <img src="~@/assets/img/planList/template.png" alt />
        <span>參考撰寫範本</span>
      </div>
    </div>
    <div class="planJob">
      <div class="planTitle__text inline">應變流程</div>
      <div
        class="planTitle__redIcon"
        style="
    display: inline-block;
    text-align: center;
    line-height: 34px;
    font-size: 16px;"
        data-red="可選擇使用範本或自行上傳：
若使用範本，僅能修改既定流程中的文字，無法彈性增加或刪減應變時序。
若自行上傳流程圖，較符合機構需求，但後續應變時序須自行編輯。"
      >
        <i class="fas fa-question"></i>
      </div>
    </div>

    <div class="uploadImg">
      <span class="greyText">上傳圖片</span>
      <input type="file" name id />
    </div>
    <div class="greyText" style="margin:20px 0;">目前已上傳的圖片：</div>
    <img src="~@/assets/img/planList/process-template.jpg" alt />

    <div class="planTitle">
      <div class="planTitle__text">應變說明</div>
      <div class="planTitle__redIcon" data-red="思考災害管理計畫的意義與功能、對機構之效用。">
        <i class="fas fa-question"></i>
      </div>
      <div
        class="planTitle__greenIcon"
        @click="modal = !modal"
        data-green="本計畫旨在引導機構進行災前整備、災中應變，以及災後復原工作，使機構具備災害應變能力、降低災害衝擊、保障住民及員工之生命安全，且讓機構可持續運作。"
      >
        <i class="fas fa-pencil-alt"></i>
      </div>
    </div>
    <div class="textContainer">
      <img v-if="pointing === 1" src="~@/assets/img/planList/point.png" />
      <textarea
        @focus=" pointing= 1"
        v-model="one"
        @input="descInputOne"
        class
        name
        id
        maxlength="1000"
      ></textarea>
      <p style="text-align:right;margin:0;font-size:14px;">{{remnant}} / 10000</p>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    eq: {
      type: Boolean,
      default: true,
    },
  },
  data() {
    return {
      modal: false,
      pointing: 0,
      items: [
        { content: "", remnant: 1000, limit: 10000 },
      ],
    };
  },
  methods: {
    closeModal() {
      this.modal = false;
    },
    descInput(item, text) {
      var txtVal = text.length;
      item.remnant = item.limit - txtVal;
    },
  },
};
</script>
<style lang="scss" scoped>
.planTopic {
}

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
