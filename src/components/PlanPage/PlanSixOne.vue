<template>
  <div class="plan-section plan-section-three-four">
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
        data-green="(1) 災害管理課程
(2) 急救訓練
(3) 應變組織作業"
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
        data-green="(1) 新進員工、外籍員工
(2) 所有員工
(3) 所有員工"
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
        data-green="(1) 新進員工報到後兩個月內
(2) 半年一次
(3) 一年一次"
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
        data-green="夜間水災垂直疏散"
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
        data-green="本計畫旨在引導機構進行災前整備、災中應變，以及災後復原工作，使機構具備災害應變能力、降低災害衝擊、保障住民及員工之生命安全，且讓機構可持續運作。"
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
        data-green="夜間值班員工"
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
        data-green="2020.06.30演練發現院民疏散撤離耗費時間較預期的多，檢討之後，將行動不便者的房間改至靠近樓梯處。有修訂計畫，修正各班別在疏散撤離時的工作內容，並重新安排人力。"
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
    <textarea class name id maxlength="500"></textarea>
  </div>
</template>
<script>
export default {
  data() {
    return {
      modal: false,
      items: [
        { content: "", remnant: 500 },
        { content: "", remnant: 500 },
        { content: "", remnant: 500 },
        { content: "", remnant: 500 },
        { content: "", remnant: 500 },
        { content: "", remnant: 500 },
        { content: "", remnant: 500 },
      ],
      pointing: 0,
    };
  },
  methods: {
    descInput(item, text) {
      var txtVal = text.length;
      item.remnant = 500 - txtVal;
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
