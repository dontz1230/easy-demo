<template>
  <div class="plan-section plan-section-three-four">
    <TheModal @closeModal="closeModal" v-if="modalOne" :group="group">
      <template #header>修改班別名稱</template>
      <p style="margin:40px 0;">
        您選擇的班別：
        <span v-if="group === 5" style="color:#f45454;">五班</span>
        <span v-else style="color:#f45454;">三班</span>
      </p>

      <div v-if="group === 5" class="twoColumn" style="width: 100%;">
        <input type="text" placeholder="通報班" name id />
        <input type="text" placeholder="搶救班" name id />
      </div>
      <div v-if="group === 5" class="twoColumn" style="width: 100%;">
        <input type="text" placeholder="救護班" name id />
        <input type="text" placeholder="避難引導班" name id />
      </div>
      <div v-if="group === 5" class="twoColumn" style="width: 100%;margin-bottom: 60px;">
        <input type="text" placeholder="安全防護班" name id />
      </div>

      <div v-if="group === 3" class="twoColumn" style="width: 100%;">
        <input type="text" placeholder="通報班" name id />
        <input type="text" placeholder="搶救班" name id />
      </div>
      <div v-if="group === 3" class="twoColumn" style="width: 100%;">
        <input type="text" placeholder="避難引導班" name id />
      </div>
      <div v-if="group === 3" class="twoColumn" style="width: 100%;margin-bottom: 60px;"></div>

      <template #footer>確定送出</template>
    </TheModal>

    <TheModal @closeModal="closeModal" v-if="modalTwo">
      <template #header>新增應變工作</template>
      <div @click="showTemplate" class="templateBtn">
        <img src="~@/assets/img/planList/templateBtn.png" alt />
        <span>參考撰寫範本</span>
      </div>
      <div class="planTitle" style="margin-top:20px;">
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
      <select name id style="margin-bottom: 12px;">
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

    <TheModal @closeModal="closeModal" v-if="modalThree">
      <template #header>新增應變時序</template>

      <div class="planTitle">
        <div class="planTitle__text">應變時序</div>
        <div
          class="planTitle__redIcon"
          data-red="請詳述工作內容，確保每一位工作人員皆能明確了解工作細節，例如：1. 觀看中央氣象局網站發佈之地震速報，瞭解地震位置與震度分布。2. 以收音機或電視掌握地震造成的災情。
撰寫過程請一併設想電力中斷、設備故障，或是其他突發狀況發生時的替代方案。"
        >
          <i class="fas fa-question"></i>
        </div>
      </div>
      <div class="textContainer">
        <img v-if="pointing === 3" src="~@/assets/img/planList/point.png" />
        <textarea
          @focus="pointing= 3"
          placeholder="協助住民穩定重心"
          @input="descInput(items[3],items[3].content);"
          v-model="items[3].content"
          class
          name
          id
          maxlength="500"
        ></textarea>
      </div>

      <template #footer>確定送出</template>
    </TheModal>

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
      <div class="themeColor">(三)應變工作</div>
      <div
        class="planTitle__redIcon"
        style="
    display: inline-block;
    text-align: center;
    line-height: 34px;
    font-size: 16px;"
        data-red="填寫機構內所有應變人員姓名、聯絡電話。機構內所有人員均應納入應變編制內。"
      >
        <i class="fas fa-question"></i>
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
        data-red="填寫機構內所有應變人員姓名、聯絡電話。機構內所有人員均應納入應變編制內。"
      >
        <i class="fas fa-question"></i>
      </div>
    </div>
    <p>
      您選擇的應變流程是：
      <span v-if="!upload" style="color:#f45454!important;">使用範本</span>
      <span v-else style="color:#f45454!important;">自行上傳流程圖</span>
    </p>
    <div class="addBtn" v-if="upload" style="float:none;" @click="modalThree = !modalThree">
      <i class="fa fa-plus"></i>
      新增應變時序
    </div>

    <table class="blueTable" style="width: 564px;">
      <thead>
        <tr>
          <th style="width: 60%;">應變時序</th>
          <th>修改</th>
          <th>刪除</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th style="width: 80%;color: #777;">1a. 確保人員安全</th>
          <td class="underline">修改</td>
          <td class="underline">刪除</td>
        </tr>
        <tr>
          <th style="width: 80%;">1b. 動員機構人員</th>
          <td class="underline">修改</td>
          <td class="underline">刪除</td>
        </tr>
        <tr>
          <th style="width: 80%;">2. 收集資訊</th>
          <td class="underline">修改</td>
          <td class="underline">刪除</td>
        </tr>
        <tr>
          <th style="width: 80%;">3. 判斷避難模式</th>
          <td class="underline">修改</td>
          <td class="underline">刪除</td>
        </tr>
        <tr>
          <th style="width: 80%;">(1) 就地避難</th>
          <td class="underline">修改</td>
          <td class="underline">刪除</td>
        </tr>
        <tr>
          <th style="width: 80%;">(2) 機構內或就近避難</th>
          <td class="underline">修改</td>
          <td class="underline">刪除</td>
        </tr>
        <tr>
          <th style="width: 80%;">(3) 異地撤離</th>
          <td class="underline">修改</td>
          <td class="underline">刪除</td>
        </tr>
      </tbody>
    </table>

    <div class="planJob" style="margin-top: 20px;display: flex;">
      <div class="planTitle__text inline" style="width:180px;">應變小組班別</div>
      <div
        class="planTitle__redIcon"
        style="
    display: inline-block;
    text-align: center;
    line-height: 34px;
    font-size: 16px;"
        data-red="可依據機構員工人力多寡分為五班或三班。
可依您機構需求修改班別名稱。
常見班別主要任務：
通報班：彙整災害資訊、聯繫相關單位。
搶救班：管理機構應變物資。
救護班：提供受傷人員的醫療照護。
避難引導班：確認疏散避難的相關資訊。
安全防護班：維護機構周邊環境安全。"
      >
        <i class="fas fa-question"></i>
      </div>
    </div>

    <div class="teamClass" style="width: 480px;margin-top: 20px;">
      <div class="teamClass__block">
        <div class="styleBlock__text">
          <input type="radio" name="style" id />
          <label for="style">三班</label>
        </div>
        <!-- <span>三班</span>
        <input name="thre" type="checkbox" />
        <label for="thre"></label>-->
        <button style="padding: 4px 0;width: 89px;" @click="modalOne = !modalOne;group = 3">修改</button>
      </div>
      <div class="teamClass__block">
        <div class="styleBlock__text">
          <input type="radio" name="style" id />
          <label for="style">五班</label>
        </div>
        <button style="padding: 4px 0;width: 89px;" @click="modalOne = !modalOne;group = 5">修改</button>
      </div>
    </div>

    <div class="planJob" style="margin-top: 20px;">
      <div class="planTitle__text inline">應變工作</div>
      <div
        class="planTitle__redIcon"
        style="
    display: inline-block;
    text-align: center;
    line-height: 34px;
    font-size: 16px;"
        data-red="請依據各應變時序填寫應進行的工作項目與內容。"
      >
        <i class="fas fa-question"></i>
      </div>
      <div class="addBtn" @click="modalTwo = !modalTwo">
        <i class="fa fa-plus"></i>
        新增工作內容
      </div>
    </div>

    <table class="blueTable">
      <thead>
        <tr>
          <th style="width: 20%;">應變時序</th>
          <th style="width: 20%;">工作項目</th>
          <th style="width: 40%;">工作內容</th>
          <th>修改</th>
          <th>刪除</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th style="width: 20%;">1a. 確保人員安全</th>
          <td style="width: 20%;">統計傷患、安排送醫</td>
          <td style="width: 40%;">統計傷患、安排送醫</td>
          <td class="underline">修改</td>
          <td class="underline">刪除</td>
        </tr>
        <tr>
          <th style="width: 20%;">1b. 動員機構人員</th>
          <td style="width: 20%;">召回應變人員</td>
          <td style="width: 40%;">制定人員的召回機制，包含機構的地震、颱洪應變啟動時間、集合地點、訊息通知方式</td>
          <td class="underline">修改</td>
          <td class="underline">刪除</td>
        </tr>
        <tr>
          <th style="width: 20%;">1b. 動員機構人員</th>
          <td style="width: 20%;">指揮應變小組運作</td>
          <td style="width: 40%;">建立良好的資訊獲取管道</td>
          <td class="underline">修改</td>
          <td class="underline">刪除</td>
        </tr>
        <tr>
          <th style="width: 20%;">2. 收集資訊</th>
          <td style="width: 20%;">收集災害資訊</td>
          <td style="width: 40%;">準備兩個以上獲得災害資訊的管道</td>
          <td class="underline">修改</td>
          <td class="underline">刪除</td>
        </tr>
        <tr>
          <th style="width: 20%;">2. 收集資訊</th>
          <td style="width: 20%;">巡視機構周邊設施</td>
          <td style="width: 40%;">檢查建物、重要設施（例如，水、電、瓦斯等維生管線）的損壞情況</td>
          <td class="underline">修改</td>
          <td class="underline">刪除</td>
        </tr>
        <tr>
          <th style="width: 20%;">2. 收集資訊</th>
          <td style="width: 20%;">收集機構災情</td>
          <td style="width: 40%;">了解各種警戒資訊的作用與分級標準</td>
          <td class="underline">修改</td>
          <td class="underline">刪除</td>
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
      modalOne: false,
      modalTwo: false,
      modalThree: false,
      pointing: 0,
      items: [
        { content: "", remnant: 50, limit: 50 },
        { content: "", remnant: 50, limit: 500 },
        { content: "", remnant: 50, limit: 500 },
        { content: "", remnant: 50, limit: 500 },
      ],
      group: 3,
    };
  },
  props: {
    upload: {
      type: Boolean,
      default: false,
    },
    eq: {
      type: Boolean,
      default: true,
    },
  },
  methods: {
    closeModal() {
      this.modalOne = false;
      this.modalTwo = false;
      this.modalThree = false;
    },
    descInput(item, text) {
      var txtVal = text.length;
      item.remnant = item.limit - txtVal;
    },
    showTemplate(){
      if(this.eq) {
        let routeData = this.$router.resolve({ name: "EqWork" });
      window.open(routeData.href, "_blank");
      } else {
        let routeData = this.$router.resolve({ name: "TyphoonWork" });
      window.open(routeData.href, "_blank");
      }
       
    }
  },
};
</script>
<style lang="scss" scoped>
.planTopic {
}

.teamClass {
  display: flex;
  width: 400px;
  justify-content: space-between;
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

input[type="radio"] .planJob {
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

select {
  background-color: #fff;
  border: 1px solid #ccc;
  padding: 12px;
  border-radius: 4px;
  margin: 0 4px;
}

p {
  color: #777;
}

.twoColumn {
  grid-template-columns: 1fr 1fr;
}

input[type="radio"]:checked::before {
  background: #66cdb6;
}

.styleBlock__text {
  margin-top: 12px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: auto;
  color: #777;
  input[type="radio"] {
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
  }
}

.addBtn {
  float: right;
  margin-bottom: 10px;
}

select {
  color: #858585;
}

.templateBtn {
  top: 20px;
  cursor: pointer;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 200px;
  position: absolute;
  right: 20px;
  border: 2px solid #41a48e;
  border-radius: 100px;
  padding: 10px 20px;
  color: #41a48e;
}
</style>
