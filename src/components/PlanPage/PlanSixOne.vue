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

    <TheTemplate @closeModal="closeModal" v-if="modalSix" @replace="replaceSix">
      <template #header>參考範本</template>
      <div class="modalContent">
        <p style="padding: 30px 20px 0px;color:#777;font-size:1.25rem;">請選擇您要使用的範本文字</p>
        <p
          style="font-size: 1.25rem !important;margin: 10px 0px 10px 40px;color:#777;font-size:1.25rem;"
        >
          <input type="radio" v-model="sixText" :value="sixText" />
          {{sixText}}
        </p>
      </div>
      <template #footer>確定送出</template>
    </TheTemplate>

    <TheTemplate @closeModal="closeModal" v-if="modalSeven" @replace="replaceSeven">
      <template #header>參考範本</template>
      <div class="modalContent">
        <p style="padding: 30px 20px 0px;color:#777;font-size:1.25rem;">請選擇您要使用的範本文字</p>
        <p
          style="font-size: 1.25rem !important;margin: 10px 0px 10px 40px;color:#777;font-size:1.25rem;"
        >
          <input type="radio" v-model="sevenText" :value="sevenText" />
          {{sevenText}}
        </p>
      </div>
      <template #footer>確定送出</template>
    </TheTemplate>

    <div class="planHeader">
      <div class="planHeader__title" style="margin-right:20;">教育訓練/演練</div>
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
      <div class="planTitle__text inline">教育訓練項目</div>
      <div
        class="planTitle__redIcon"
        style="
    display: inline-block;
    text-align: center;
    line-height: 34px;
    font-size: 16px;"
        data-red="羅列出讓員工教育訓練的課程名稱、內容等。"
      >
        <i class="fas fa-question"></i>
      </div>
      <div
        class="planTitle__greenIcon"
        style="
    display: inline-block;
    text-align: center;
    line-height: 34px;
    font-size: 16px;"
        @click="modalOne = !modalOne"
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

    <div class="planJob">
      <div class="planTitle__text inline">教育訓練對象</div>
      <div
        class="planTitle__redIcon"
        style="
    display: inline-block;
    text-align: center;
    line-height: 34px;
    font-size: 16px;"
        data-red="可列出員工類別或姓名，並考量是否有針對外籍員工的訓練。"
      >
        <i class="fas fa-question"></i>
      </div>
      <div
        class="planTitle__greenIcon"
        style="
    display: inline-block;
    text-align: center;
    line-height: 34px;
    font-size: 16px;"
        @click="modalTwo = !modalTwo"
      >
        <i class="fas fa-pencil-alt"></i>
      </div>
    </div>
    <div class="textContainer">
      <img v-if="pointing === 2" src="~@/assets/img/planList/point.png" />
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

    <div class="planJob">
      <div class="planTitle__text inline">教育訓練頻率</div>
      <div
        class="planTitle__redIcon"
        style="
    display: inline-block;
    text-align: center;
    line-height: 34px;
    font-size: 16px;"
        data-red="辦理教育訓練課程的頻率或時間點。"
      >
        <i class="fas fa-question"></i>
      </div>
      <div
        class="planTitle__greenIcon"
        style="
    display: inline-block;
    text-align: center;
    line-height: 34px;
    font-size: 16px;"
        @click="modalThree = !modalThree"
      >
        <i class="fas fa-pencil-alt"></i>
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
      <p style="text-align:right;margin:0;font-size:14px;">{{items[2].remnant}} / 500</p>
    </div>

    <div class="planJob">
      <div class="planTitle__text inline">演練項目</div>
      <div
        class="planTitle__redIcon"
        style="
    display: inline-block;
    text-align: center;
    line-height: 34px;
    font-size: 16px;"
        data-red="災害管理計畫完成後可藉由兵棋推演或演練，確保各項工作之可行性，同時亦可加強員工之訓練，以在災時發揮實際效用。
演練可包含兵棋推演與實地演練，列出演練的項目、針對的災害類型，並考量日間、夜間、平日、假日等時間差異。"
      >
        <i class="fas fa-question"></i>
      </div>
      <div
        class="planTitle__greenIcon"
        style="
    display: inline-block;
    text-align: center;
    line-height: 34px;
    font-size: 16px;"
        @click="modalFour = !modalFour"
      >
        <i class="fas fa-pencil-alt"></i>
      </div>
    </div>
    <div class="textContainer">
      <img v-if="pointing === 4" src="~@/assets/img/planList/point.png" />
      <textarea
        @focus="pointing= 4"
        @input="descInput(items[3],items[3].content);"
        v-model="items[3].content"
        class
        name
        id
        maxlength="500"
      ></textarea>
      <p style="text-align:right;margin:0;font-size:14px;">{{items[3].remnant}} / 500</p>
    </div>

    <div class="planJob">
      <div class="planTitle__text inline">演練參與對象</div>
      <div
        class="planTitle__redIcon"
        style="
    display: inline-block;
    text-align: center;
    line-height: 34px;
    font-size: 16px;"
        data-red="可列出員工類別或姓名。"
      >
        <i class="fas fa-question"></i>
      </div>
      <div
        class="planTitle__greenIcon"
        style="
    display: inline-block;
    text-align: center;
    line-height: 34px;
    font-size: 16px;"
        @click="modalFive = !modalFive"
      >
        <i class="fas fa-pencil-alt"></i>
      </div>
    </div>
    <div class="textContainer">
      <img v-if="pointing === 5" src="~@/assets/img/planList/point.png" />
      <textarea
        @focus="pointing= 5"
        @input="descInput(items[4],items[4].content);"
        v-model="items[4].content"
        class
        name
        id
        maxlength="500"
      ></textarea>
      <p style="text-align:right;margin:0;font-size:14px;">{{items[4].remnant}} / 500</p>
    </div>

    <div class="planJob">
      <div class="planTitle__text inline">演練頻率</div>
      <div
        class="planTitle__redIcon"
        style="
    display: inline-block;
    text-align: center;
    line-height: 34px;
    font-size: 16px;"
        data-red="依據工作內容安排日間及夜間負責的應變人員。"
      >
        <i class="fas fa-question"></i>
      </div>
      <div
        class="planTitle__greenIcon"
        style="
    display: inline-block;
    text-align: center;
    line-height: 34px;
    font-size: 16px;"
        @click="modalSix = !modalSix"
      >
        <i class="fas fa-pencil-alt"></i>
      </div>
    </div>
    <div class="textContainer">
      <img v-if="pointing === 6" src="~@/assets/img/planList/point.png" />
      <textarea
        @focus="pointing= 6"
        @input="descInput(items[5],items[5].content);"
        v-model="items[5].content"
        class
        name
        id
        maxlength="500"
      ></textarea>
      <p style="text-align:right;margin:0;font-size:14px;">{{items[5].remnant}} / 500</p>
    </div>

    <div class="planJob">
      <div class="planTitle__text inline">紀錄檢討</div>
      <div
        class="planTitle__redIcon"
        style="
    display: inline-block;
    text-align: center;
    line-height: 34px;
    font-size: 16px;"
        data-red="記錄演練後檢討與修正計畫的內容。"
      >
        <i class="fas fa-question"></i>
      </div>
      <div
        class="planTitle__greenIcon"
        style="
    display: inline-block;
    text-align: center;
    line-height: 34px;
    font-size: 16px;"
        @click="modalSeven = !modalSeven"
      >
        <i class="fas fa-pencil-alt"></i>
      </div>
    </div>
    <div class="textContainer">
      <img v-if="pointing === 7" src="~@/assets/img/planList/point.png" />
      <textarea
        @focus="pointing= 7"
        @input="descInput(items[6],items[6].content);"
        v-model="items[6].content"
        class
        name
        id
        maxlength="500"
      ></textarea>
      <p style="text-align:right;margin:0;font-size:14px;">{{items[6].remnant}} / 500</p>
    </div>

    <div class="planJob">
      <div class="planTitle__text inline">演練照片</div>
      <div
        class="planTitle__redIcon"
        style="
    display: inline-block;
    text-align: center;
    line-height: 34px;
    font-size: 16px;"
        data-red="圖檔請以演練主題命名。"
      >
        <i class="fas fa-question"></i>
      </div>
    </div>

    <img src="~@/assets/img/planList/upload.jpg" alt />

    <div class="planJob">
      <div class="planTitle__text inline">照片說明</div>
    </div>
    <div class="textContainer">
      <img v-if="pointing === 7" src="~@/assets/img/planList/point.png" />
      <textarea
        @focus="pointing= 7"
        @input="descInput(items[6],items[6].content);"
        v-model="items[6].content"
        class
        name
        id
        maxlength="500"
      ></textarea>
      <p style="text-align:right;margin:0;font-size:14px;">{{items[6].remnant}} / 500</p>
    </div>
    <p
      style="text-align:left;color:#777;margin-top:-20px;font-size:14px;"
    >若有演練腳本，您可在此系統填答完成後，利用下載的Word檔自行增補腳本至附件。。</p>
  </div>
</template>
<script>
import TheTemplate from "./TheTemplate";
export default {
  components: {
    TheTemplate: TheTemplate,
  },
  data() {
    return {
      modal: false,
      items: [
        { content: "", remnant: 500, limit: 500 },
        { content: "", remnant: 500, limit: 500 },
        { content: "", remnant: 500, limit: 500 },
        { content: "", remnant: 500, limit: 500 },
        { content: "", remnant: 500, limit: 500 },
        { content: "", remnant: 500, limit: 500 },
        { content: "", remnant: 500, limit: 500 },
      ],
      pointing: 0,
      modalOne: false,
      modalTwo: false,
      oneText: "(1) 災害管理課程 (2) 急救訓練 (3) 應變組織作業",
      twoText: "(1) 新進員工、外籍員工(2) 所有員工(3) 所有員工",
      threeText:"(1) 新進員工報到後兩個月內(2) 半年一次 (3) 一年一次",
      fourText: "夜間水災垂直疏散",
      fiveText: "夜間水災垂直疏散",
      sixText: "半年一次",
      sevenText: "2020.06.30演練發現院民／住民疏散撤離耗費時間較預期的多，檢討之後，將行動不便者的房間改至靠近樓梯處。有修訂計畫，修正各班別在疏散撤離時的工作內容，並重新安排人力。",
      modalThree: false,
      modalFour: false,
      modalFive: false,
      modalSix: false,
      modalSeven: false,
    };
  },
  methods: {
    descInput(item, text) {
      var txtVal = text.length;
      item.remnant = item.limit - txtVal;
    },
     closeModal() {
      console.log("close");
      this.modal = false;
      this.modalOne = false;
      this.modalTwo = false;
      this.modalThree = false;
      this.modalFour = false;
      this.modalFive = false;
      this.modalSix = false;
      this.modalSeven = false;
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
    replaceSix() {
      this.items[5].content = this.sixText;
      this.descInput(this.items[5], this.items[5].content);
      this.modalSix = false;
    },
    replaceSeven() {
      this.items[6].content = this.sevenText;
      this.descInput(this.items[6], this.items[6].content);
      this.modalSeven = false;
    },

  },
};
</script>
<style lang="scss" scoped>
.planTopic {
  margin: 30px auto;
}

.planTitle__text {
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
.planTitle__redIcon {
  margin: 0 12px;
}

textarea {
  width: 100%;
}
</style>
