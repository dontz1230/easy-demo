<template>
  <div class="plan-section plan-section-three-four">
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
    </div>
    <div class="textContainer">
      <img v-if="pointing === 1" src="~@/assets/img/planList/point.png" />
      <textarea
        @focus="pointing= 1"
        @input="descInput(items[0],items[0].content);"
        v-model="items[0].content"
        class
        name
        id
        maxlength="500"
      ></textarea>
      <p style="text-align:right;margin:0;font-size:14px;">{{items[0].remnant}} / 50</p>
    </div>

    <div class="planTitle">
      <div class="planTitle__text">人員召回機制</div>
      <div class="planTitle__redIcon" data-red="人員召回機制">
        <i class="fas fa-question"></i>
      </div>
    </div>

    <div class="textContainer">
      <img
        v-if="pointing === 2"
        src="~@/assets/img/planList/point.png"
      />
      <textarea
        @focus="pointing= 2"
        @input="descInput(items[1],items[1].content);"
        v-model="items[1].content"
        class
        name
        id
        maxlength="500"
      ></textarea>
      <p style="text-align:right;margin:0;font-size:14px;">{{items[1].remnant}} / 50</p>
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
      items: [
        { content: "", remnant: 1000 },
        { content: "", remnant: 1000 },
      ],
      pointing: 0,
    };
  },
  methods: {
    descInput(item, text) {
      var txtVal = text.length;
      item.remnant = 1000 - txtVal;
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
