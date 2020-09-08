<template>
  <div class="plan-section plan-section-three-two">
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

     <TheTemplate @closeModal="closeModal" v-if="modalThree" @replace="replaceThird">
      <template #header>參考範本</template>
      <div class="modalContent">
        <p style="padding: 30px 20px 0px;color:#777;font-size:1.25rem;">請選擇您要使用的範本文字</p>
        <p
          style="font-size: 1.25rem !important;margin: 10px 0px 10px 40px;color:#777;font-size:1.25rem;"
        >
          <input type="radio" v-model="threeText" :value="threeText" />
          {{threeText}}
        </p>
      </div>
      <template #footer>確定送出</template>
    </TheTemplate>
     <TheTemplate @closeModal="closeModal" v-if="modalFour" @replace="replaceFour">
      <template #header>參考範本</template>
      <div class="modalContent">
        <p style="padding: 30px 20px 0px;color:#777;font-size:1.25rem;">請選擇您要使用的範本文字</p>
        <p
          style="font-size: 1.25rem !important;margin: 10px 0px 10px 40px;color:#777;font-size:1.25rem;"
        >
          <input type="radio" v-model="fourText" :value="fourText" />
          {{fourText}}
        </p>
      </div>
      <template #footer>確定送出</template>
    </TheTemplate>
     <TheTemplate @closeModal="closeModal" v-if="modalFive" @replace="replaceFive">

      <template #header>參考範本</template>
      <div class="modalContent">
        <p style="padding: 30px 20px 0px;color:#777;font-size:1.25rem;">請選擇您要使用的範本文字</p>
        <p
          style="font-size: 1.25rem !important;margin: 10px 0px 10px 40px;color:#777;font-size:1.25rem;"
        >
          <input type="radio" v-model="fourText" :value="fourText" />
          {{fourText}}
        </p>
      </div>
      <template #footer>確定送出</template>
    </TheTemplate>

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
        <div class="planTitle__greenIcon" @click="modalOne = !modalOne">
          <i class="fas fa-pencil-alt"></i>
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
        <div class="planTitle__greenIcon" @click="modalTwo= !modaTwo">
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
        <div class="planTitle__greenIcon" @click="modalThree = !modalThree">
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
          class="mdTxt"
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
        <div class="planTitle__greenIcon" @click="modalFour = !modalFour">
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
          class="mdTxt"
          name
          id
          maxlength="500"
        ></textarea>
        <p
          style="text-align:right;margin:0;font-size:14px;"
        >{{items[3].remnant}} / {{items[3].limit}}</p>
      </div>

      <div class="planTitle">
        <div>致災原因是否解決</div>
        <div class="planTitle__greenIcon" @click="modalFive = !modalFive">
          <i class="fas fa-pencil-alt"></i>
        </div>
      </div>

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
            @input="descInput(items[4],items[4].content);"
            v-model="items[4].content"
            class="mdTxt"
            name
            id
            maxlength="500"
          ></textarea>
          <p
            style="text-align:right;margin:0;font-size:14px;"
          >{{items[4].remnant}} / {{items[4].limit}}</p>
        </div>
      </div>
      <div
        style="text-align:right;display: flex;
    justify-content: flex-end;
    margin: 10px 0;"
      >
        <p
          style="display:inline-block;height: 52px;
    line-height: 52px;
    vertical-align: middle;
    margin-right: 10px;
    font-size: 12px;"
        >若超過一個致災原因，請點選新增</p>
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
      <div class="themeColor">(二) 受災經驗</div>
      <div
        class="planTitle__redIcon"
        style="
    display: inline-block;
    text-align: center;
    line-height: 34px;
    font-size: 16px;
"
        data-red
      >
        <i class="fas fa-question"></i>
      </div>
    </div>
    <div class="planTitle">
      <div class="planTitle__text">災害起迄年</div>
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
    <div class="fromToYear">
      <input placeholder="2015" class="normalInput" type="text" />
      <span>起</span>
      <input placeholder="2020" class="normalInput" type="text" />
      <span>止</span>
      <div
        class="addBtn"
        style="    display: inline-block;
    float: right;"
        @click="modal = !modal"
      >
        <i class="fa fa-plus"></i>
        新增受災經驗
      </div>
    </div>
    <table class="blueTable">
      <thead>
        <tr>
          <th style="width: 10%;">災害類型</th>
          <th style="width: 8%;">時間</th>
          <th style="width: 10%;">事件名稱</th>
          <th style="width: 30%;">受災情況</th>
          <th style="width: 30%;">可能致災原因/是否已解決</th>
          <th style="width: 7%;">修改</th>
          <th style="width: 7%;">刪除</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>地震</td>
          <td>無</td>
          <td></td>
          <td></td>
          <td></td>
          <td class="underline">修改</td>
          <td class="underline">刪除</td>
        </tr>
        <tr>
          <td>坡地災害</td>
          <td>無</td>
          <td></td>
          <td></td>
          <td></td>
          <td class="underline">修改</td>
          <td class="underline">刪除</td>
        </tr>
        <tr>
          <td>水災</td>
          <td>2015.08.08</td>
          <td>蘇迪勒颱風</td>
          <td>
            1.機構內部上午07:30開始淹水，淹水最高深度 50 公分，10:00
            <br />2.08:30-10:00 停電
          </td>
          <td>
            1.機構位處低窪，且當日雨勢過大。
            <br />
            <span style="background:#66CDB6;color:#fff;">已解決：增加沙包擋水</span>
            <br />2.強風吹斷樹木壓到變電箱。
            <span style="background:#66CDB6;color:#fff;">未解決</span>
          </td>
          <td class="underline">修改</td>
          <td class="underline">刪除</td>
        </tr>
      </tbody>
    </table>
  </div>
</template> 
<script>
import TheModal from "./TheModal";
import TheTemplate from "./TheTemplate";
export default {
  components: {
    TheModal: TheModal,
    TheTemplate: TheTemplate,
  },
  data() {
    return {
      modal: false,
      items: [
        { content: "", remnant: 50, limit: 50 },
        { content: "", remnant: 50, limit: 50 },
        { content: "", remnant: 1000, limit: 1000 },
        { content: "", remnant: 1000, limit: 1000 },
        { content: "", remnant: 1000, limit: 1000 },
        { content: "", remnant: 500, limit: 500 },
      ],
      pointing: 0,
      modalOne: false,
      modalTwo: false,
      oneText: "2018/08/24 20:00~2018/08/25 11:00",
      twoText: "0823熱帶性低氣壓水災",
      threeText: "1. 機構內部從8月24晚上8點開始淹水，淹水最高深度90公分，聯外道路亦中斷，直到8月25日上午11點水退。2. 有3位長者較晚完成撤離，造成心裡有點害怕及輕微感冒。",
      fourText: "1. 機構位處低窪，且當日雨勢過大。2. 晚上機構人力不足，且聯外道路淹水造成外部人員無法進入本機構，以至於將全數院民／住民垂直撤離完畢花了太多時間，導致有長者泡到水。",
      fiveText: "修正員工聯絡機制，提早聯絡員工，並透過平時演練提高員工召回速度。",
      modalThree: false,
      modalFour: false,
      modalFive: false,
    };
  },
  methods: {
    closeModal() {
      // console.log("close");
      this.modal = false;
      this.modalOne = false;
      this.modalTwo = false;
      this.modalThree = false;
      this.modalFour = false;
      this.modalFive = false;
    },
    descInput(item, text) {
      var txtVal = text.length;
      item.remnant = item.limit - txtVal;
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
    replaceThird() {
      this.items[2].content = this.threeText;
      this.descInput(this.items[2], this.items[2].content);
      this.modalThree = false;
    },
    replaceFour() {
      this.items[3].content = this.fourText;
      this.descInput(this.items[3], this.items[3].content);
      this.modalFour = false;
    },
    replaceFive() {
      this.items[4].content = this.fiveText;
      this.descInput(this.items[4], this.items[4].content);
      this.modalFive = false;
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

// .teamClass__block input[type="checkbox"] {
//   margin: 0 12px 0 4px;
//   position: relative !important;
//   left: auto;
//   -webkit-appearance: checkbox;
// }

thead {
  height: 68px;
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
.planTitle {
  margin-top: 12px !important;
  margin-bottom: 12px !important;
}

.textContainer textarea {
  margin-bottom: 0;
}
</style>