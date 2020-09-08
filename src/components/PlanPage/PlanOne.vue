<template>
  <div class="plan-section">
    <TheTemplate @closeModal="closeModal" v-if="modal" @replace="replace">
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

     <TheTemplate @closeModal="closeModal" v-if="modalTwo" @replace="replaceTwo">
      <template #header>參考範本</template>
      <div class="modalContent">
        <p style="padding: 30px 20px 0px;color:#777;font-size:1.25rem;">請選擇您要使用的範本文字</p>
          <input type="radio" v-model="subtitlesTemplate" :value="subtitlesTemplate" />
          <p style="text-align:left;" v-for="item in subtitlesTemplate" :key="item.content">{{item.content}}</p>
      </div>
      <template #footer>確定送出</template>
    </TheTemplate>

    <div class="planHeader">
      <div class="planHeader__title">計畫說明</div>
      <div class="planHeader__option">
        <img src="~@/assets/img/planList/advice.png" alt />
        <span>撰寫原則或建議</span>
      </div>
      <div @click="modal = !modal" class="planHeader__option">
        <img src="~@/assets/img/planList/template.png" alt />
        <span>參考撰寫範本</span>
      </div>
    </div>
    <div class="planTitle">
      <div class="planTitle__text">計畫目的</div>
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
        maxlength="50"
      ></textarea>
      <p style="text-align:right;margin:0;font-size:14px;">{{remnant}} / 50</p>
    </div>

    <div class="planTitle">
      <div class="planTitle__text">計畫架構</div>
      <div class="planTitle__redIcon" data-red="闡述計畫大綱，簡要說明計畫章節及各章節主要內容，幫助計畫之使用者快速掌握各章節之撰寫重點。">
        <i class="fas fa-question"></i>
      </div>
      <div
        class="planTitle__greenIcon"
        @click="modalTwo = !modalTwo"
      >
        <i class="fas fa-pencil-alt"></i>
      </div>
    </div>
    <div class="planRow" v-for="(item,index) in subtitles" :key="index">
      <div class="planSubtitle">{{item.title}}</div>
      <!-- <textarea v-model="item.content" class name id maxlength="500"></textarea> -->
      <div class="textContainer">
        <img v-if="pointing === item.title" src="~@/assets/img/planList/point.png" />
        <textarea
          @focus="pointing= item.title"
          @input="descInput(item,item.content);"
          v-model="item.content"
          class
          name
          id
          maxlength="50"
        ></textarea>
        <p style="text-align:right;margin:0;font-size:14px;">{{item.remnant}} / 50</p>
      </div>
    </div>
  </div>
</template> 
<script>
import TheTemplate from "./TheTemplate";
export default {
  components: {
    TheTemplate: TheTemplate,
  },
  methods: {
    descInput(item, text) {
      var txtVal = text.length;
      item.remnant = 50 - txtVal;
    },
    descInputOne() {
      var txtVal = this.one.length;
      this.remnant = 50 - txtVal;
    },
    closeModal() {
      this.modal = false;
    },
    replace() {
      this.one = this.oneText;
      this.descInputOne()
      this.modal = false;
    },
    replaceTwo() {
      this.subtitles = this.subtitlesTemplate
      for(let i;i<9;i++){
        this.descInput(this.subtitlesTemplate[i],this.subtitlesTemplate[i].content)
      }
      this.modalTwo = false;
    },
  },
  data() {
    return {
      remnant: 50,
      modal: false,
      modalTwo: false,
      pointing: 0,
      one: "",
      seven: "",
      oneText: "思考災害管理計畫的意義與功能、對機構之效用。",
      subtitlesTemplate:[
        { title: "一、計畫說明", content: "說明本計畫之撰寫目的及主要章節內容。", remnant: 50 },
        { title: "二、機構基本資料", content: "羅列機構基本資訊。", remnant: 50 },
        { title: "三、災害風險評估", content: "藉由機構天然災害風險檢查評估結果、受災經驗，以及災害潛勢等，綜合研判機構之災害風險。", remnant: 50 },
        { title: "四、地震災害應變流程", content: "機構於地震應變時的啟動時機、操作步驟、注意事項，以及負責人力。", remnant: 50 },
        { title: "五、颱洪災害應變流程", content: "機構於颱洪災害應變時的啟動時機、操作步驟、注意事項，以及負責人力。", remnant: 50 },
        { title: "六、停電應變流程", content: "機構於停電應變時的操作步驟與工作內容。", remnant: 50 },
        { title: "七、避難收容", content: "說明機構就近避難、垂直撤離、異地撤離的場所資訊、避難路線，以及避難移動工具。", remnant: 50 },
        { title: "八、教育訓練/演練", content: "說明機構教育訓練或演練內容、施行頻率，與檢討紀錄。", remnant: 50 },
        { title: "九、附件", content: "災害管理流程實行所需相關資料，包含物資清單、災害應變設備清單、緊急聯絡網等。", remnant: 50 },
      ],
      subtitles: [
        { title: "一、計畫說明", content: "", remnant: 50 },
        { title: "二、機構基本資料", content: "", remnant: 50 },
        { title: "三、災害風險評估", content: "", remnant: 50 },
        { title: "四、地震災害應變流程", content: "", remnant: 50 },
        { title: "五、颱洪災害應變流程", content: "", remnant: 50 },
        { title: "六、停電應變流程", content: "", remnant: 50 },
        { title: "七、避難收容", content: "", remnant: 50 },
        { title: "八、教育訓練/演練", content: "", remnant: 50 },
        { title: "九、附件", content: "", remnant: 50 },
      ],
    };
  },
};
</script>
<style lang="scss">
input[type="radio"] {
  display: inline-block;
  left: unset;
  position: relative;
  border-radius: 50em;
  -webkit-appearance: auto;
  margin-right: 8px;
  position: absolute;
  left: -25px;
  top: 14px;
}

.modalContent input[type="radio"] {
  display: inline-block;
  left: unset;
  position: relative;
  width: 30px;
  height: 30px;
  border-radius: 50em;
  -webkit-appearance: auto;
  margin-right: 8px;
  top: 0 !important;
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
</style>