<template>
  <div class="plan-section plan-section-three-four">
    <TheModal @closeModal="closeModal" v-if="modal">
      <template #header>新增綜合研判結果</template>

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

      <div class="planTitle" style="margin-top: 12px;">
        <div class="planTitle__text">災害風險</div>
        <div
          class="planTitle__redIcon"
          data-red="請綜整前述天然災害風險檢查系統評估結果+災害經驗+災害潛勢地圖分析結果，說明在什麼情境下會發生災害，以及機構面臨的風險情況。"
        >
          <i class="fas fa-question"></i>
        </div>
        <div
          class="planTitle__greenIcon"
          data-green="□過去10年機構沒有坡地災害經驗，也非位於土石流潛勢溪流影響範圍及大規模崩塌災害潛勢地區，然而機構附近擋土牆龜裂、附近擋土牆排水口雨後無排水（或無水痕），依據天然災害風險檢查系統初評結果。坡地災害風險為中。

□機構建物為2000年以後建設，且建物結構為鋼筋混凝土（RC）、鋼構或鋼骨鋼筋混凝土（SRC），地震風險較低，且過去10年也沒有遭受地震災害。"
        >
          <i class="fas fa-pencil-alt"></i>
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
        <p style="text-align:right;margin:0;font-size:14px;">{{items[0].remnant}} / 500</p>
      </div>

      <div class="planTitle">
        <div class="planTitle__text">減災策略</div>
        <div
          class="planTitle__redIcon"
          data-red="若天然災害風險檢查評估結果為中或高，或機構落在災害潛勢範圍內，請務必填寫減災策略，若天然災害風險檢查評估結果為低且未落在災害潛勢範圍內，可不填寫。
減災策略如果致災原因已解決，可填寫已解決。
減災策略可包含硬體設施設備或是非工程的管理方法。"
        >
          <i class="fas fa-question"></i>
        </div>
        <div
          class="planTitle__greenIcon"
          data-green="□因為致災原因尚未解決，自行裝設防水閘門減少損害，並規劃垂直避難的時機。當機構所在地發布海上陸上颱風警報或是24小時累積雨量達200毫米時，召回機構應變小組所有成員啟動應變。
□請土木技師協助鑑定擋土牆的安全狀況。□免填寫。"
        >
          <i class="fas fa-pencil-alt"></i>
        </div>
      </div>
      <div class="textContainer" style="margin-bottom: 30px;">
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
        <p style="text-align:right;margin:0;font-size:14px;">{{items[1].remnant}} / 500</p>
      </div>

      <div class="planTopic">
        <div class="themeColor topline">(一) 自然災害風險檢察系統初評結果</div>
      </div>
      <div class="threeColumn">
        <input class="greyInput" placeholder="坡地災害風險" type="text" />
        <input class="greyInput" placeholder="高" type="text" />
        <input class="greyInput" placeholder="XXXXX(不放建議)" type="text" />
      </div>
      <div class="threeColumn">
        <input class="greyInput" placeholder="水災風險" type="text" />
        <input class="greyInput" placeholder="高" type="text" />
        <input class="greyInput" placeholder="XXXXX(不放建議)" type="text" />
      </div>

      <div class="planTopic">
        <div class="themeColor">(二)受災經驗</div>
      </div>
      <table class="blueTable smallTable">
        <thead>
          <tr>
            <th>災害類型</th>
            <th>時間</th>
            <th>事件名稱</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>地震</th>
            <th>無</th>
            <th></th>
          </tr>
          <tr>
            <th>地震</th>
            <th>無</th>
            <th></th>
          </tr>
          <tr>
            <th>地震</th>
            <th>無</th>
            <th>蘇迪勒颱風</th>
          </tr>
        </tbody>
      </table>

      <div class="planTopic">
        <div class="themeColor">(三)災害潛勢地圖</div>
      </div>

      <table class="blueTable smallTable">
        <thead>
          <tr>
            <th style="width:50%;">災害類型</th>
            <th style="width:50%;">上傳的圖</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>地震地震地震地震</td>
            <td>
              <img src="~@/assets/img/planList/demo.jpg" alt />
            </td>
          </tr>
        </tbody>
      </table>

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
      <div class="themeColor" style="font-size: 1.5rem;">(四) 綜合研判結果</div>
      <div
        class="planTitle__redIcon"
        style="
    display: inline-block;
    text-align: center;
    line-height: 34px;
    font-size: 16px;"
        data-red="請綜整前述天然災害風險檢查系統評估結果+災害經驗+災害潛勢地圖分析結果，說明在什麼情境下會發生災害，並優先針對機構面臨較高風險類型的災害，撰寫本災害管理計畫。"
      >
        <i class="fas fa-question"></i>
      </div>
      <div class="addBtn" @click="modal = !modal">
        <i class="fa fa-plus"></i>
        新增研判結果
      </div>
    </div>

    <table class="blueTable">
      <thead>
        <tr>
          <th>災害類型</th>
          <th style="width: 30%;">災害風險</th>
          <th style="width: 30%;">減災策略</th>
          <th style="width: 10%;">修改</th>
          <th style="width: 10%;">刪除</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>水災風險</td>
          <td>根據天然災害風險檢查系統初評結果，機構過去10年內曾經發生淹水事件，並有聯外道路中斷問題，致災原因為地勢低窪，目前仍未解決，水災風險高。水災潛勢地圖亦顯示，若雨量24小時累積500毫米，機構可能淹水深度達1~2公尺。</td>
          <td>因為致災原因尚未解決，自行裝設防水閘門減少損害，並規劃垂直避難的時機。</td>
          <td class="underline" style="width: 10%;">修改</td>
          <td class="underline" style="width: 10%;">刪除</td>
        </tr>
        <tr>
          <td>水災風險</td>
          <td>根據天然災害風險檢查系統初評結果，機構過去10年內曾經發生淹水事件，並有聯外道路中斷問題，致災原因為地勢低窪，目前仍未解決，水災風險高。水災潛勢地圖亦顯示，若雨量24小時累積500毫米，機構可能淹水深度達1~2公尺。</td>
          <td>因為致災原因尚未解決，自行裝設防水閘門減少損害，並規劃垂直避難的時機。</td>
          <td class="underline" style="width: 10%;">修改</td>
          <td class="underline" style="width: 10%;">刪除</td>
        </tr>
        <tr>
          <td>水災風險</td>
          <td>根據天然災害風險檢查系統初評結果，機構過去10年內曾經發生淹水事件，並有聯外道路中斷問題，致災原因為地勢低窪，目前仍未解決，水災風險高。</td>
          <td>因為致災原因尚未解決，自行裝設防水閘門減少損害，並規劃垂直避難的時機。</td>
          <td class="underline" style="width: 10%;">修改</td>
          <td class="underline" style="width: 10%;">刪除</td>
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
      items: [
        { content: "", remnant: 500 },
        { content: "", remnant: 500 },
      ],
      pointing: 0,
    };
  },
  methods: {
    closeModal() {
      this.modal = false;
    },
    descInput(item, text) {
      var txtVal = text.length;
      item.remnant = 500 - txtVal;
    },
  },
};
</script>
<style lang="scss" scoped>
.planTopic .themeColor {
  margin: 23px 0;
}

.addBtn {
  position: absolute;
  right: 0;
}

table.smallTable {
  width: 70%;
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

.planTopic .themeColor {
  font-size: 18px;
  margin: -4px 0;
}

.topline {
  position: relative;
  margin-top: 15px;
  &::before {
    content: "";
    width: 1440px;
    height: 2px;
    top: -10px;
    background: #66cdb6;
    position: absolute;
    left: -100px;
  }
}

td {
  vertical-align: top;
}
</style>