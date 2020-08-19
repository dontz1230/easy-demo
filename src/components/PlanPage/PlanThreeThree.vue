<template>
  <div class="plan-section plan-section-three-two">
    <TheModal @closeModal="closeModal" v-if="modal">
      <template #header>新增受災經驗</template>
      <div class="planTitle">
        <div class="planTitle__text">災害類型</div>
        <div
          class="planTitle__redIcon"
          style="
    display: inline-block;
    text-align: center;
    line-height: 34px;
    font-size: 16px;"
          data-red="視機構需求或環境狀況擷取其他圖資，如海嘯溢淹、斷層與土壤液化等，非必填"
        >
          <i class="fas fa-question"></i>
        </div>
      </div>

      <div class="teamClass" style="display: flex;">
        <div class="teamClass__block">
          <span>地震</span>
          <input name="A" type="checkbox" />
          <label for="A"></label>
        </div>
        <div class="teamClass__block">
          <span>坡地災害</span>
          <input name="B" type="checkbox" />
          <label for="B"></label>
        </div>
        <div class="teamClass__block">
          <span>水災</span>
          <input name="C" type="checkbox" />
          <label for="C"></label>
        </div>
        <div class="teamClass__block">
          <span>其他</span>
          <input name="D" type="checkbox" />
          <label for="D"></label>
        </div>
      </div>

      <label for="upload" style="margin-right:20px;margin-top:36px;">上傳圖片</label>

      <input type="file" id="upload" name="upload" accept="image/png, image/jpeg" />
      <div>目前已上傳的圖片：</div>
      <img src="~@/assets/img/planList/demo.jpg" alt />

      <template #footer>確定送出</template>
    </TheModal>
    <div class="planHeader">
      <div class="planHeader__title" style="margin-right: 20px;">災害風險評估</div>
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
      <div class="themeColor">(三) 受災潛勢地圖分析</div>
      <div
        class="planTitle__redIcon"
        style="
    display: inline-block;
    text-align: center;
    line-height: 34px;
    font-size: 16px;
"
        data-red="至「國家災害防救科技中心災害潛勢地圖網站」（https://dmap.ncdr.nat.gov.tw/）查詢，將查詢結果截圖張貼至此，並彙整上列資訊，說明機構面臨的災害潛勢狀況，即機構在什麼樣的環境條件下（如24小時降雨量達350毫米）可能要注意的災害風險，或是機構位於什麼災害潛勢範圍內，應加強留意哪些災害風險。"
      >
        <i class="fas fa-question"></i>
      </div>
    </div>

    <div class="planJob" style="margin-bottom:20px">
      <div class="planTitle__text inline">1. 水災：淹水潛勢</div>
      <div
        class="planTitle__redIcon"
        style="
    display: inline-block;
    text-align: center;
    line-height: 34px;
    font-size: 16px;
"
        data-red="請擷取淹水潛勢地圖畫面；優先建議查詢24小時累積500毫米雨量"
      >
        <i class="fas fa-question"></i>
      </div>
    </div>

    <label for="upload" style="margin-right:20px">上傳圖片</label>

    <input type="file" id="upload" name="upload" accept="image/png, image/jpeg" />
    <div>目前已上傳的圖片：</div>
    <img src="~@/assets/img/planList/demo.jpg" alt />
    <div>潛勢說明：</div>
    <div class="textContainer">
      <img v-if="pointing === 10" src="~@/assets/img/planList/point.png" />
      <textarea
        @focus="pointing = 10"
        @blur="pointer = ''"
        v-model="desc"
        class
        name
        id
        maxlength="500"
      ></textarea>
    </div>

    <div class="planJob">
      <div class="planTitle__text inline" style="width: 250px;">2. 坡地災害：土石流、山崩</div>
      <div
        class="planTitle__redIcon"
        style="
    display: inline-block;
    text-align: center;
    line-height: 34px;
    font-size: 16px;
"
        data-red="請至少勾選土石流潛勢溪流影響範圍及大規模崩塌災害潛勢地區"
      >
        <i class="fas fa-question"></i>
      </div>
    </div>

    <label for="upload" style="margin-right:20px">上傳圖片</label>

    <input type="file" id="upload" name="upload" accept="image/png, image/jpeg" />
    <div>目前已上傳的圖片：</div>
    <img src="~@/assets/img/planList/demo.jpg" alt />
    <div>潛勢說明：</div>
    <div class="textContainer">
      <img v-if="pointing === 11" src="~@/assets/img/planList/point.png" />
      <textarea
        @focus="pointing = 11"
        @blur="pointer = ''"
        v-model="desc"
        class
        name
        id
        maxlength="500"
      ></textarea>
    </div>

    <div class="planJob" style="    margin: 0;
    transform: translateY(10px);">
      <div class="planTitle__text inline" style="width: fit-content;
    padding: 0 20px;">3. 其他災害</div>
      <div
        class="planTitle__redIcon"
        style="
    display: inline-block;
    text-align: center;
    line-height: 34px;
    font-size: 16px;"
        data-red="視機構需求或環境狀況擷取其他圖資，如海嘯溢淹、斷層與土壤液化等，非必填"
      >
        <i class="fas fa-question"></i>
      </div>
      <div class="addBtn" @click="modal = !modal">
        <i class="fa fa-plus"></i>
        新增其他災害
      </div>
    </div>

    <table class="blueTable">
      <thead>
        <tr>
          <th style="width: 30%;">災害類型</th>
          <th style="width: 30%;">上傳的圖</th>
          <th>修改</th>
          <th>刪除</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th style="width: 30%;vertical-align: top;">地震</th>
          <th style="width: 30%;text-align:center;">
            <img src="~@/assets/img/planList/demo.jpg" alt />
          </th>
          <th style="vertical-align: middle;" class="underline">修改</th>
          <th style="vertical-align: middle;" class="underline">刪除</th>
        </tr>
        <tr>
          <th style="width: 30%;vertical-align: top;">地震</th>
          <th style="width: 30%;text-align:center;">
            <img src="~@/assets/img/planList/demo.jpg" alt />
          </th>
          <th style="vertical-align: middle;" class="underline">修改</th>
          <th style="vertical-align: middle;" class="underline">刪除</th>
        </tr>
        <tr>
          <th style="width: 30%;vertical-align: top;">地震</th>
          <th style="width: 30%;text-align:center;">
            <img src="~@/assets/img/planList/demo.jpg" alt />
          </th>
          <th style="vertical-align: middle;" class="underline">修改</th>
          <th style="vertical-align: middle;" class="underline">刪除</th>
        </tr>
      </tbody>
    </table>
  </div>
</template> 
<script>
import TheModal from "./TheModal";
export default {
  components: {
    TheModal: TheModal,
  },
  data() {
    return {
      modal: false,
      pointing: 0,
      desc: "",
      items: [
        { content: "", remnant: 500 },
        { content: "", remnant: 500 },
        { content: "", remnant: 500 },
        { content: "", remnant: 500 },
        { content: "", remnant: 500 },
        { content: "", remnant: 500 },
        { content: "", remnant: 500 },
        { content: "", remnant: 500 },
        { content: "", remnant: 500 },
        { content: "", remnant: 500 },
      ],
    };
  },
  methods: {
    closeModal() {
      this.modal = false;
    },
  },
};
</script>
<style lang="scss" scoped>
label {
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

.teamClass__block input[type="checkbox"] {
  margin: 0 12px 0 4px;
  position: relative !important;
  left: auto;
  -webkit-appearance: checkbox;
}

.planJob {
  margin: 10px 0;
  .planTitle__text {
    width: 200px;
  }
}

.addBtn {
  display: inline-block;
  float: right;
}

.teamClass__block input + label {
  display: block;
  cursor: pointer;
  position: absolute;
  top: 2px;
  left: 15px;
  border-radius: 100px;
  width: 24px;
  height: 24px;
  background: #fff;
  border: 3px solid lightgray;
}

.teamClass__block input + label::before {
  display: block;
  content: "";
  text-align: center;
  font-size: 16px;
  color: white;
}

.teamClass__block input {
  visibility: hidden;
}

.teamClass__block {
  width: fit-content;
  margin-right: 40px;
}

.teamClass__block span {
  display: inline-block;
  margin-left: 44px;
  color: #777;
}

.teamClass__block input:checked + label::before {
  display: block;
  content: "";
  text-align: center;
  font-size: 16px;
  background: lightgray;
  border: 3px solid lightgray;
}

tbody tr th img {
  width: 126px;
}
</style>