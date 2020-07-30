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

      <div class="planTitle">
        <div class="planTitle__text">災害時間</div>
        <div class="planTitle__redIcon" data-red="災害事件時間，包含年月日，如果可以，請列出起訖時間。">
          <i class="fas fa-question"></i>
        </div>
      </div>
      <div class="textContainer">
        <img
          v-if="pointing === 1"
          src="~@/assets/img/planList/point.png"
          place-holder="新北市健康區安心里長壽路1號1~2樓"
        />
        <textarea
          @focus="pointing= 1"
          @input="descInput(items[0],items[0].content);"
          v-model="items[0].content"
          class
          name
          id
          maxlength="500"
        ></textarea>
        <p
          style="text-align:right;margin:0;font-size:14px;"
        >{{items[0].remnant}} / {{items[0].limit}}</p>
      </div>

      <div class="planTitle">
        <div class="planTitle__text">事件名稱</div>
        <div class="planTitle__redIcon" data-red="如：蘇迪勒颱風、0823熱帶性低壓、0612豪雨等。">
          <i class="fas fa-question"></i>
        </div>
        <div class="planTitle__greenIcon" data-green="0823熱帶性低氣壓水災">
          <i class="fas fa-pencil-alt"></i>
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
        <p
          style="text-align:right;margin:0;font-size:14px;"
        >{{items[1].remnant}} / {{items[1].limit}}</p>
      </div>

      <div class="planTitle">
        <div class="planTitle__text">受災情況</div>
        <div
          class="planTitle__redIcon"
          data-red="詳細描寫什麼時間點發生什麼事，如淹水深度、淹水時間、交通中斷情況、停電、撤離遭遇問題等，讓大家具體了解發生災害時，會面臨的狀況。"
        >
          <i class="fas fa-question"></i>
        </div>
        <div
          class="planTitle__greenIcon"
          data-green="1.機構內部從8月24晚上8點開始淹水，淹水最高深度90公分，聯外道路亦中斷，直到8月25日上午11點水退。
2.有3位長者較晚完成撤離，造成心裡有點害怕及輕微感冒。"
        >
          <i class="fas fa-pencil-alt"></i>
        </div>
      </div>
      <div class="textContainer">
        <img
          v-if="pointing === 3"
          src="~@/assets/img/planList/point.png"
          place-holder="新北市健康區安心里長壽路1號1~2樓"
        />
        <textarea
          @focus="pointing= 3"
          @input="descInput(items[2],items[2].content);"
          v-model="items[2].content"
          class
          name
          id
          maxlength="500"
        ></textarea>
        <p
          style="text-align:right;margin:0;font-size:14px;"
        >{{items[2].remnant}} / {{items[2].limit}}</p>
      </div>

      <div class="planTitle">
        <div class="planTitle__text">可能致災原因</div>
        <div class="planTitle__redIcon" data-red="包含環境、人為因素等。">
          <i class="fas fa-question"></i>
        </div>
        <div
          class="planTitle__greenIcon"
          data-green="1.機構位處低窪，且當日雨勢過大。
2.晚上機構人力不足，且聯外道路淹水造成外部人員無法進入本機構，以至於將全數院民垂直撤離完畢花了太多時間，導致有長者泡到水。 "
        >
          <i class="fas fa-pencil-alt"></i>
        </div>
      </div>
      <div>可能致災原因</div>
      <div class="textContainer">
        <img
          v-if="pointing === 4"
          src="~@/assets/img/planList/point.png"
          place-holder="新北市健康區安心里長壽路1號1~2樓"
        />
        <textarea
          @focus="pointing= 4"
          @input="descInput(items[3],items[3].content);"
          v-model="items[3].content"
          class
          name
          id
          maxlength="500"
        ></textarea>
        <p
          style="text-align:right;margin:0;font-size:14px;"
        >{{items[3].remnant}} / {{items[3].limit}}</p>
      </div>

      <div>致災原因是否解決</div>
      <div class="teamClass" style="display:flex;">
        <div style="vertical-align: top;
    display: inline-block;" class="teamClass__block">
          <span>未解決</span>
          <input name="no" type="checkbox" />
          <label for="no"></label>
        </div>
        <div style="vertical-align: top;
    display: inline-block;" class="teamClass__block">
          <span>已解決</span>
          <input name="ys" type="checkbox" />
          <label for="ys"></label>
        </div>
        <div
          class="textContainer"
          style="display: inline-block;
    margin-left: 30px;
    width: 60%;"
        >
          <img v-if="pointing === 5" src="~@/assets/img/planList/point.png" placeholder="填寫解決方法" />
          <textarea
            @focus="pointing= 5"
            @input="descInput(items[3],items[3].content);"
            v-model="items[3].content"
            class
            name
            id
            maxlength="500"
          ></textarea>
          <p
            style="text-align:right;margin:0;font-size:14px;"
          >{{items[3].remnant}} / {{items[3].limit}}</p>
        </div>
      </div>
      <div
        style="text-align:right;display: flex;
    justify-content: flex-end;
    margin: 10px 0;"
      >
        <div class="addBtn" @click="modal = true">
          <i class="fa fa-plus"></i>
          可能致災原因
        </div>
      </div>

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