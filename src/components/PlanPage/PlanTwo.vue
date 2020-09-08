<template>
  <div class="plan-section">
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
      <div class="planTitle__greenIcon" @click="modalOne = !modalOne">
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
      <p style="text-align:right;margin:0;font-size:14px;">{{items[0].remnant}} / {{items[0].limit}}</p>
    </div>

    <div class="planTitle">
      <div class="planTitle__text">機構地址</div>
      <div class="planTitle__redIcon" data-red="機構完整地址包含村里。">
        <i class="fas fa-question"></i>
      </div>
      <div class="planTitle__greenIcon" @click="modalTwo = !modalTwo">
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
      <p style="text-align:right;margin:0;font-size:14px;">{{items[1].remnant}} / {{items[0].limit}}</p>
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
       <div class="planTitle__greenIcon" @click="modalThree = !modalThree">
        <i class="fas fa-pencil-alt"></i>
      </div>
    </div>
    <div class="textContainer">
      <img v-if="pointing === 3" src="~@/assets/img/planList/point.png" />
      <textarea
        @focus="pointing= 3"
        @input="descInput(items[2],items[2].content);"
        v-model="items[2].content"
        class="mdTxt"
        name
        id
        maxlength="500"
      ></textarea>
      <p style="text-align:right;margin:0;font-size:14px;">{{items[2].remnant}} / {{items[2].limit}}</p>
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
   components: {
    TheTemplate:()=> import('./TheTemplate'),
  },
  data() {
    return {
      items: [
        { content: "", remnant: 60, limit: 60 },
        { content: "", remnant: 50, limit: 50 },
        { content: "", remnant: 100, limit: 100 },
      ],
      pointing: 0,
      oneText:'平安是福老人長期照顧中心(養護型) ',
twoText:'新北市健康區安心里長壽路1號1~2樓',
threeText:'養護30床 安養15床',
   modalOne: false,
      modalTwo: false,
      modalThree: false,
    };
  },
  methods: {
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