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

    <div class="teamClass">
      <div class="styleBlock__text">
        <input type="radio" value name="style" id @change="uploadThing" v-model="upload" />
        <label for="style">使用範本流程圖</label>
      </div>
      <div class="styleBlock__text">
        <input type="radio" value="upload" name="style" @change="uploadThing" id v-model="upload" />
        <label for="style">自行上傳流程圖</label>
      </div>
    </div>

    <div class="uploadImg" v-if="upload === 'upload'">
      <span class="greyText">上傳圖片</span>
      <input @change="fileHandler" type="file" name id />
    </div>
    <div class="greyText" style="margin:20px 0;">目前已上傳的圖片：</div>
    <img src="~@/assets/img/planList/lightsout.jpg" alt />

    <div class="planTitle">
      <div class="planTitle__text">應變工作</div>
      <div class="planTitle__redIcon" data-red="思考災害管理計畫的意義與功能、對機構之效用。">
        <i class="fas fa-question"></i>
      </div>
      <div class="planTitle__greenIcon" @click="modalOne = !modalOne">
        <i class="fas fa-pencil-alt"></i>
      </div>
    </div>
    <div class="textContainer">
      <img v-if="pointing === 1" src="~@/assets/img/planList/point.png" />
      <textarea
        @focus=" pointing= 1"
        v-model="items[0].content"
        @input="descInputOne"
        class="lgTxt"
        name
        id
        maxlength="3000"
      ></textarea>
      <p style="text-align:right;margin:0;font-size:14px;">{{items[0].remnant}} / {{items[0].limit}}</p>
    </div>
  </div>
</template>
<script>
import TheTemplate from "./TheTemplate";
export default {
  components: {
    TheTemplate: TheTemplate,
  },
  props: {
    eq: {
      type: Boolean,
      default: true,
    },
  },
  data() {
    return {
      modal: false,
      upload: false,
      one: "",
      modalOne:'',
      pointing: 0,
      items: [{ content: "", remnant: 3000, limit: 3000 }],
      oneText:'1.啟動應變：一發生停電立即啟動應變，聯繫應變小組人員並運作。2.(1)檢查設施設備：a.檢視緊急照明設備是否正常運作，並以頭燈、手電筒輔助照明。b.檢查不斷電系統及發電機是否正常運作。c.確認維生管線是否正常運作。2.(2)確認院民/住民狀況，安撫院民/住民情緒，並注意維生或醫療設備運作情形；檢視電梯是否有人員受困。3.確認停電原因及評估停電時間：檢查電源總開關、向電力公司了解停電原因與電力修復時間。4.盤點機構物資及設備：a.盤點水、食物、發電機油料、藥品儲備狀況。b.拔除易損壞電器電源，避免復電時電壓過高，造成設備燒毀。5.判斷避難模式：依據預估停電時間及機構物資儲量及設備運作情形，決定是否需要啟動避難。5.(1)就地避難：留意火災受信總機及門禁功能是否正常，並加強巡視門禁及院民/住民狀況。5.(2)異地撤離：a.聯絡安置單位告知相關訊息，包含預計安置人數、預計撤離時間，確認安置單位狀況。b.確認移動工具及撤離人力。c.攜帶避難所需物品，包含院民／住民的衣物、藥物、病例、證件等。6.(1)聯繫通報：a.通報主管機關：說明機構的應變情況並尋求必要之協助與行政支援，通報內容包含機構災情、應變處置作為、院民／住民後送安置處所，以及現場情況等。b.連絡相關單位：視情況聯繫物資開口契約廠商、特約醫療單位等，請求提供協助。c.通知院民／住民家屬：聯繫家屬，告知機構目前的處置狀況。d.通知機構內人員包含機構工作人員與院民／住民）：定期公布災害應變資訊，使機構內人員了解目前機構的災害應變作為。6.(2)清點人數：異地撤離完後務必清點院民／住民及員工人數。6.(3)照護院民/住民身心健康：注意院民／住民的身心狀況，並適時給予情緒上的安撫。7.災後注意事項：a.機構環境檢查：檢查設備、維生管線是否損壞並進行修復。b.確認機構環境安全無虞可恢復日常運作後，協助院民／住民返回機構。c.記錄本次應變處置，並針對不足之處擬定改善策略。'
    };
  },
  methods: {
    descInputOne() {
      var txtVal = this.items[0].length;
      this.items[0].remnant = 3000 - txtVal;
    },
    fileHandler(element) {
      let fileSize = element.target.files[0].size;
      if (fileSize / 1024 / 1024 >= 5) {
        alert("檔案大小超過5MB，請壓縮或選擇其他檔案重新上傳。");
      }
    },
    closeModal() {
      this.modalOne = false;
    },
  
    uploadThing() {
      this.$emit("uploadThing", this.upload);
    },
     replaceFirst() {
      this.items[0].content = this.oneText;
      this.descInputOne();
      this.modalOne = false;
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
