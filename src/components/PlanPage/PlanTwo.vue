<template>
  <div class="plan-section">
    <div class="planHeader">
      <div class="planHeader__title">機構基本資料</div>
      <div class="planHeader__option">
        <img src="~@/assets/img/planList/advice.png" alt />
        <span>撰寫原則或建議</span>
      </div>
      <div class="planHeader__option">
        <img src="~@/assets/img/planList/template.png" alt />
        <span>參考撰寫範本</span>
      </div>
    </div>
    <div class="planTitle">
      <div class="planTitle__text">機構名稱</div>
      <div class="planTitle__redIcon" data-red="向政府登記之全名。">
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
      <div class="planTitle__text">機構地址</div>
      <div class="planTitle__redIcon" data-red="機構完整地址包含村里。">
        <i class="fas fa-question"></i>
      </div>
    </div>

    <div class="textContainer">
      <img
        v-if="pointing === 2"
        src="~@/assets/img/planList/point.png"
        place-holder="新北市健康區安心里長壽路1號1~2樓"
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

    <div class="planTitle">
      <div class="planTitle__text">機構類型</div>
    </div>
    <div class="checkBlock" style="margin-left: 50px;">
      <div class="checkContainer">
        <input type="checkbox" name id />
        <span></span>
        <label for>老人福利機構</label>
      </div>
      <div class="checkContainer">
        <input type="checkbox" name id />
        <span></span>
        <label for>身心障礙福利機構</label>
      </div>
      <div class="checkContainer">
        <input type="checkbox" name id />
        <span></span>
        <label for>兒少福利機構</label>
      </div>
      <div class="checkContainer">
        <input type="checkbox" name id />
        <span></span>
        <label for>一般護理之家</label>
      </div>
    </div>
    <div class="checkBlock col-3" style="margin-left: 50px;">
      <div class="checkContainer">
        <input type="checkbox" name id />
        <span></span>
        <label for>精神護理之家</label>
      </div>
      <div class="checkContainer">
        <input type="checkbox" name id />
        <span></span>
        <label for>精神復健機構</label>
      </div>
      <div class="checkContainer">
        <input type="checkbox" name id />
        <span></span>
        <label for>住宿式長照機構(含提供住宿服務之綜合長照機構)</label>
      </div>
    </div>
    <div
      class="checkBlock"
      style="margin-bottom: 36px;display: flex;align-items: center;margin-left: 50px;"
    >
      <div class="checkContainer">
        <input type="checkbox" name id />
        <span></span>
        <label for>其他</label>
        <input type="text" name id />
      </div>
    </div>

    <div class="planTitle">
      <div class="planTitle__text">核定床位數</div>
      <div
        class="planTitle__redIcon"
        data-red="註明不同類型（如老人福利機構為長照、養護、失智，以及安養；身心障礙福利機構為成人日間照顧、全日型、早療日間照顧、夜間型住宿等）的核定床位數或是服務量。"
      >
        <i class="fas fa-question"></i>
      </div>
    </div>
    <div class="textContainer">
      <img v-if="pointing === 3" src="~@/assets/img/planList/point.png" />
      <textarea
        @focus="pointing= 3"
        @input="descInput(items[2],items[2].content);"
        v-model="items[2].content"
        class
        name
        id
        maxlength="500"
      ></textarea>
      <p style="text-align:right;margin:0;font-size:14px;">{{items[2].remnant}} / 50</p>
    </div>

    <div class="planTitle">
      <div class="planTitle__text" style="width: 200px;">可自行增補其他項目</div>
      <div class="planTitle__redIcon" data-red="可自行增補其他基本且重要的機構資訊。">
        <i class="fas fa-question"></i>
      </div>
    </div>
    <div class="twoColumn">
      <input type="text" placeholder="項目名稱" id />
      <input type="text" placeholder="項目內容" id />
    </div>
    <div class="twoColumn">
      <input type="text" placeholder="項目名稱" id />
      <input type="text" placeholder="項目內容" id />
    </div>
    <div class="addBtn fl-r">
      <i class="fa fa-plus"></i>
      新增機構資訊
    </div>
  </div>
</template> 
<script>
export default {
  data() {
    return {
      items: [
        { content: "", remnant: 50 },
        { content: "", remnant: 50 },
        { content: "", remnant: 50 },
      ],
      pointing: 0,
    };
  },
  methods: {
    descInput(item, text) {
      var txtVal = text.length;
      item.remnant = 50 - txtVal;
    },
  },
};
</script>
<style lang="scss" scoped>
input[type="text"] {
  background: #fff;
  border: 1px solid #d4d4d4;
}

.checkContainer {
  position: relative;
}

.checkContainer span {
  width: 30px;
  position: absolute;
  left: 0;
  height: 30px;
  border-radius: 8px;
  border: 4px solid #d4d4d4;
  display: block;
  background: #fff;
}

input[type="checkbox"] {
  width: 30px;
  height: 30px;
  opacity: 0;
  border-radius: 8px;
  position: relative;
  z-index: 999;
}

.checkContainer input:checked + span {
  background: #66cdb6;
}
</style>