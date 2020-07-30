<template>
  <div class="plan-section plan-section-three-four">
    <TheModal @closeModal="closeModal" v-if="modal">
      <template #header>應變工作分配</template>
      <div class="planTitle__text inline" style="margin:24px 0;">應變階段／工作項目</div>
      <div class="twoColumn" style="width: 100%;">
        <select>
          <option value selected>1a. 確保人員安全</option>
          <option value>1b. 動員機構人員</option>
          <option value>2. 收集資訊</option>
          <option value>3. 判斷避難模式</option>
        </select>
        <!-- <select name id>
          <option value selected>協助住民穩住重心</option>
        </select>-->
      </div>

      <div class="planJob" style="margin-bottom: 0;">
        <div class="planTitle__text inline">指定負責人員</div>
        <div
          class="planTitle__redIcon"
          style="
    display: inline-block;
    text-align: center;
    line-height: 34px;
    font-size: 16px;"
          data-red="指定負責人員時，需思考平時機構人力狀況，並一併制定人員的召回機制，包含機構的地震、颱洪應變啟動時機、集合地點、訊息通知方式（簡訊、電話或社群網路等方法）及工作分配，確保災時有可運用之人力。
如果夜間、日間、平日、假日班別數不同，請在完成本系統其他項目後，請利用匯出之word檔自行增補。"
        >
          <i class="fas fa-question"></i>
        </div>
        <div class="addBtn" @click="showrow++" style="float:none;">
          <i class="fa fa-plus"></i>
          新增負責人員
        </div>
      </div>

      <div class="flexRow" v-for="item in showrow" :key="item">
        <div class="teamClass" style="display: flex;
    width: 200px;">
          <div class="styleBlock__text">
            <input type="radio" value name="style" id v-model="upload" />
            <label for="style">日間</label>
          </div>
          <div class="styleBlock__text">
            <input type="radio" value="upload" name="style" id v-model="upload" />
            <label for="style">夜間</label>
          </div>
        </div>

        <select name id style="width: 180px;
    margin-right: 10px;">
          <option value selected>救護班</option>
        </select>
        <select name id style="width: 180px;
    margin-right: 10px;">
          <option value selected>負責人員姓名</option>
        </select>
        <div class="teamClass inline">
          <div class="styleBlock__text" style="width: 200px;">
            <input type="checkbox" name="style" id />
            <label for="style">此負責人為班長</label>
            <span
              @click="showrow--"
              style="background: #66cdb6;
    width: 30px;
    height: 30px;
    text-align: center;
    color: #fff;
    border-radius: 4px;margin-left: 8px;"
            >
              <i class="fa fa-times"></i>
            </span>
          </div>
        </div>
      </div>
      <template #footer>確定送出</template>
    </TheModal>

    <TheModal @closeModal="closeModal" v-if="modalTwo">
      <template #header>新增應變工作</template>
      <div class="planTitle">
        <div class="planTitle__text">應變階段</div>
        <div
          class="planTitle__redIcon"
          data-red="請綜整前述天然災害風險檢查系統評估結果+災害經驗+災害潛勢地圖分析結果，說明在什麼情境下會發生災害，以及機構面臨的風險情況。"
        >
          <i class="fas fa-question"></i>
        </div>
        <div class="planTitle__greenIcon" data-green="每個應變階段可有多個工作項目。">
          <i class="fas fa-pencil-alt"></i>
        </div>
      </div>
      <select name id>
        <option value selected>1a. 確保人員安全</option>
      </select>

      <div class="planTitle">
        <div class="planTitle__text">工作項目</div>
        <div
          class="planTitle__redIcon"
          data-red="請填寫選擇之應變階段對應的工作項目，為搭配後續的工作檢核表，工作項目字數勿超過12字，建議填列重點，例如：召回應變人員、收集災害資訊等，細節內容請寫在下方工作內容欄位內。
需要思考機構的人力狀況，如果人力不足，請務必確認應變工作項目的優先順序。"
        >
          <i class="fas fa-question"></i>
        </div>
      </div>
      <div class="textContainer">
        <img v-if="pointing === 1" src="~@/assets/img/planList/point.png" />
        <textarea
          @focus="pointing= 1"
          placeholder="協助住民穩住重心"
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
        <div class="planTitle__text">工作內容</div>
        <div
          class="planTitle__redIcon"
          data-red="請詳述工作內容，確保每一位工作人員皆能明確了解工作細節，例如：1. 觀看中央氣象局網站發佈之地震速報，瞭解地震位置與震度分布。2. 以收音機或電視掌握地震造成的災情。
撰寫過程請一併設想電力中斷、設備故障，或是其他突發狀況發生時的替代方案。"
        >
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
          placeholder="坐下：協助站立的住民就地坐下，避免跌倒。"
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

      <template #footer>確定送出</template>
    </TheModal>

    <div class="planHeader">
      <div class="planHeader__title">天然災害應變流程</div>
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
      <div class="themeColor">(一)地震災害應變流程</div>
      <div
        class="planTitle__redIcon"
        style="
    display: inline-block;
    text-align: center;
    line-height: 34px;
    font-size: 16px;"
        data-red="天然災害應變流程應考慮機構本身的地理環境、設備，以及人力等實際情況進行規劃。
可依據機構需求自行上傳流程圖，或是採用本系統提供的範本。
目前範本上為預先設定的應變步驟，實際的災害應變流程並非一成不變，機構人員要依照現場情況調整應變步驟。"
      >
        <i class="fas fa-question"></i>
      </div>
    </div>

    <div class="planJob" style="margin: 12px 0;">
      <div class="planTitle__text inline">應變工作小組內容</div>
      <div
        class="planTitle__redIcon"
        style="
    display: inline-block;
    text-align: center;
    line-height: 34px;
    font-size: 16px;margin-bottom: 12px;"
        data-red="依據工作內容安排日間及夜間負責的應變人員。"
      >
        <i class="fas fa-question"></i>
      </div>
      <div class="addBtn" @click="modal = !modal">
        <i class="fa fa-plus"></i>
        分配工作項目
      </div>
    </div>

    <table class="blueTable">
      <thead>
        <tr>
          <th style="width:20%;" rowspan="2">應變階段</th>
          <th style="width:25%;" rowspan="2">工作項目</th>
          <th colspan="6">每項工作至少要有一個組別負責</th>
        </tr>
        <tr>
          <th style="width:9%">指揮官</th>
          <th style="width:9%">通報</th>
          <th style="width:9%">搶救</th>
          <th style="width:9%">救護</th>
          <th style="width:9%">避難引導</th>
          <th style="width:9%">安全防護</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th>1a. 確保人員安全</th>
          <td>協助住民穩住重心</td>
          <td class="dispatched">已分派</td>
          <td class="dispatched">已分派</td>
          <td @click="modal = !modal" class="pointer undispatched">未分派</td>
          <td @click="modal = !modal" class="pointer undispatched">未分派</td>
          <td @click="modal = !modal" class="pointer undispatched">未分派</td>
          <td class="dispatched">已分派</td>
        </tr>
        <tr>
          <th>1a. 確保人員安全</th>
          <td>統計傷患、安排送醫</td>
          <td @click="modal = !modal" class="pointer undispatched">未分派</td>
          <td @click="modal = !modal" class="pointer undispatched">未分派</td>
          <td @click="modal = !modal" class="pointer undispatched">未分派</td>
          <td class="dispatched">已分派</td>
          <td class="dispatched">已分派</td>
          <td class="dispatched">已分派</td>
        </tr>
        <tr>
          <th>1b. 動員機構人員</th>
          <td>召回應變人員</td>
          <td class="dispatched">已分派</td>
          <td class="dispatched">已分派</td>
          <td @click="modal = !modal" class="pointer undispatched">未分派</td>
          <td @click="modal = !modal" class="pointer undispatched">未分派</td>
          <td @click="modal = !modal" class="pointer undispatched">未分派</td>
          <td @click="modal = !modal" class="pointer undispatched">未分派</td>
        </tr>
        <tr>
          <th>1b. 動員機構人員</th>
          <td>指揮應變小組運作</td>
          <td @click="modal = !modal" class="pointer undispatched">未分派</td>
          <td class="dispatched">已分派</td>
          <td class="dispatched">已分派</td>
          <td class="dispatched">已分派</td>
          <td @click="modal = !modal" class="pointer undispatched">未分派</td>
          <td class="dispatched">已分派</td>
        </tr>

        <tr>
          <th>2. 收集資訊</th>
          <td>收集災害資訊</td>
          <td @click="modal = !modal" class="pointer undispatched">未分派</td>
          <td @click="modal = !modal" class="pointer undispatched">未分派</td>
          <td @click="modal = !modal" class="pointer undispatched">未分派</td>
          <td @click="modal = !modal" class="pointer undispatched">未分派</td>
          <td @click="modal = !modal" class="pointer undispatched">未分派</td>
          <td @click="modal = !modal" class="pointer undispatched">未分派</td>
        </tr>

        <tr>
          <th>2. 收集資訊</th>
          <td>巡視機構周邊設施</td>
          <td class="dispatched">已分派</td>
          <td class="dispatched">已分派</td>
          <td @click="modal = !modal" class="pointer undispatched">未分派</td>
          <td @click="modal = !modal" class="pointer undispatched">未分派</td>
          <td @click="modal = !modal" class="pointer undispatched">未分派</td>
          <td class="dispatched">已分派</td>
        </tr>

        <tr>
          <th>2. 收集資訊</th>
          <td>收集機構災情</td>
          <td @click="modal = !modal" class="pointer undispatched">未分派</td>
          <td @click="modal = !modal" class="pointer undispatched">未分派</td>
          <td @click="modal = !modal" class="pointer undispatched">未分派</td>
          <td class="dispatched">已分派</td>
          <td class="dispatched">已分派</td>
          <td class="dispatched">已分派</td>
        </tr>

        <tr>
          <th>2. 收集資訊</th>
          <td>盤點機構物資</td>

          <td class="dispatched">已分派</td>
          <td class="dispatched">已分派</td>
          <td class="dispatched">已分派</td>
          <td @click="modal = !modal" class="pointer undispatched">未分派</td>
          <td @click="modal = !modal" class="pointer undispatched">未分派</td>
          <td @click="modal = !modal" class="pointer undispatched">未分派</td>
        </tr>

        <tr>
          <th>2. 收集資訊</th>
          <td>收集疏散避難資訊</td>
          <td @click="modal = !modal" class="pointer undispatched">未分派</td>
          <td class="dispatched">已分派</td>
          <td class="dispatched">已分派</td>
          <td class="dispatched">已分派</td>
          <td @click="modal = !modal" class="pointer undispatched">未分派</td>
          <td class="dispatched">已分派</td>
        </tr>

        <tr>
          <th>3. 判斷避難模式</th>
          <td>依現場情況決定避難模式</td>
          <td @click="modal = !modal" class="pointer undispatched">未分派</td>
          <td @click="modal = !modal" class="pointer undispatched">未分派</td>
          <td @click="modal = !modal" class="pointer undispatched">未分派</td>
          <td @click="modal = !modal" class="pointer undispatched">未分派</td>
          <td @click="modal = !modal" class="pointer undispatched">未分派</td>
          <td @click="modal = !modal" class="pointer undispatched">未分派</td>
        </tr>

        <tr>
          <th>3. 判斷避難模式</th>
          <td>通知機構內人員</td>
          <td @click="modal = !modal" class="pointer undispatched">未分派</td>
          <td class="dispatched">已分派</td>
          <td class="dispatched">已分派</td>
          <td class="dispatched">已分派</td>
          <td @click="modal = !modal" class="pointer undispatched">未分派</td>
          <td @click="modal = !modal" class="pointer undispatched">未分派</td>
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
      modalTwo: false,
      items: [
        { content: "", remnant: 50, limit: 50 },
        { content: "", remnant: 50, limit: 500 },
      ],
      pointing: 0,
      showrow: 4,
      upload: "",
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

.planTitle__text {
  width: 200px;
}

.planJob {
  margin: 30px auto;
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
  position: relative !important;
  left: auto;
  -webkit-appearance: checkbox;
}

select {
  background-color: #fff;
  border: 1px solid #ccc;
  padding: 12px;
  border-radius: 4px;
}

.flexRow {
  display: flex;
  align-items: center;
  margin-bottom: 20px;
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

input[type="checkbox"] {
  appearance: auto;
  width: 20px;
  height: 20px;
  margin: 0 5px 0 10px;
}

.dispatched {
  text-align: center;
  background: #f45454;
  color: #fff;
  border-radius: 10px;
}

// .styleBlock__text {
//   text-align: center;
//   background: #bcbcbc;
//   color: #fff;
//   border-radius: 10px;
// }

.undispatched {
  text-align: center;
  background: #bcbcbc;
  color: #fff;
  border-radius: 10px;
}
</style>
