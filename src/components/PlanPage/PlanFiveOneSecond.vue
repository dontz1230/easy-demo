<template>
  <div class="plan-section plan-section-three-four">
    <TheModal @closeModal="closeModal" v-if="modal">
      <template #header>新增避難移動工具</template>
      <div class="planTitle">
        <div class="planTitle__text">工具名稱</div>
        <div
          class="planTitle__redIcon"
          data-red="評估機構內部移動住民的方式（如單人搬運法、雙人搬運法等）以及外部撤離所需使用到之移動工具。
移動工具包含各類輔具器材（如擔架、輪椅、推床、爬梯機等）。"
        >
          <i class="fas fa-question"></i>
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
        <p
          style="text-align:right;margin:0;font-size:14px;"
        >{{items[1].remnant}} / {{items[1].limit}}</p>
      </div>

      <div class="planTitle">
        <div class="planTitle__text">工具數量</div>
        <div
          class="planTitle__redIcon"
          data-red="詳實記錄機構現有各類移動工具數量或可調度之數量，可調度之移動工具建議於平時與可配合之單位簽訂契約，並確保大規模災害時，資源調度的可行性。"
        >
          <i class="fas fa-question"></i>
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
        <p
          style="text-align:right;margin:0;font-size:14px;"
        >{{items[2].remnant}} / {{items[2].limit}}</p>
      </div>

      <div class="planTitle">
        <div class="planTitle__text">置放場所</div>
        <div class="planTitle__redIcon" data-red="詳實記錄移動工具擺放地點。">
          <i class="fas fa-question"></i>
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
        <p
          style="text-align:right;margin:0;font-size:14px;"
        >{{items[3].remnant}} / {{items[3].limit}}</p>
      </div>

      <div class="planTitle">
        <div class="planTitle__text">備註</div>
        <div class="planTitle__redIcon" data-red="移動工具如為其他可配合單位所有，可於備註欄註記單位聯絡電話。">
          <i class="fas fa-question"></i>
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
        <p
          style="text-align:right;margin:0;font-size:14px;"
        >{{items[4].remnant}} / {{items[4].limit}}</p>
      </div>

      <template #footer>確定送出</template>
    </TheModal>

    <div class="planHeader">
      <div class="planHeader__title">避難收容</div>
      <div class="planHeader__option">
        <img src="~@/assets/img/planList/advice.png" alt />
        <span>撰寫原則或建議</span>
      </div>
      <div class="planHeader__option">
        <img src="~@/assets/img/planList/template.png" alt />
        <span>參考撰寫範本</span>
      </div>
    </div>
    <div class="planTopic" style="margin: 20px 0 25px 0;
    line-height: 1;">
      <div class="themeColor">垂直避難</div>
      <div
        class="planTitle__redIcon"
        style="
    display: inline-block;
    text-align: center;
    line-height: 34px;
    font-size: 16px;"
        data-red="為因應不同災害類型與災害應變情況，平時即應於機構內、外事先選定數個避難收容地點。
選定避難收容地點後，務必與避難收容地點相關人員於平時建立合作關係，並確認該避難地點可在災時提供實際協助。
就近避難指在機構內部或附近避難，但不須交通工具移動，例如至機構門口停車場、機構中庭廣場、機構地震避難平台、機構旁公園空地等，通常適用於地震。"
      >
        <i class="fas fa-question"></i>
      </div>
    </div>

    <div class="planJob">
      <div class="planTitle__text inline">災害類型</div>
      <div
        class="planTitle__redIcon"
        style="
    display: inline-block;
    text-align: center;
    line-height: 34px;
    font-size: 16px;"
        data-red="臺灣常見的天然災害為地震、水災，以及坡地災害，如有需要可自行增補其他災害類別，如海嘯、風災等。
若不同災害類別適用同樣避難類型與相同避難收容地點，可合併填寫一份表格。"
      >
        <i class="fas fa-question"></i>
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

    <div class="planJob">
      <div class="planTitle__text inline">避難路線</div>
      <div
        class="planTitle__redIcon"
        style="
    display: inline-block;
    text-align: center;
    line-height: 34px;
    font-size: 16px;"
        data-red="應將避難路線記載於機構建物平面圖、機構附近環境地圖上。
避難路線選擇注意事項：
1.無論是機構內部或外部移動，盡可能設定兩條以上避難路徑。
2.機構內部之避難路線應隨時保持動線通暢。"
      >
        <i class="fas fa-question"></i>
      </div>
    </div>
    <img src="~@/assets/img/planList/upload.jpg" alt />

    <div class="planJob" style="margin-top:34px;">
      <div class="planTitle__text inline">移動工具</div>
      <div
        class="planTitle__redIcon"
        style="
    display: inline-block;
    text-align: center;
    line-height: 34px;
    font-size: 16px;"
        data-red="填寫移動工具名稱、數量、置放場所，以及備註。"
      >
        <i class="fas fa-question"></i>
      </div>
      <div class="addBtn" @click="modal = true">
        <i class="fa fa-plus"></i>
        新增移動工具
      </div>
    </div>

    <table class="blueTable">
      <thead>
        <tr>
          <th style="width: 23%;">避難移動工具名稱</th>
          <th>數量</th>
          <th style="width: 23%;">置放場所</th>
          <th style="width: 23%;">備註</th>
          <th>修改</th>
          <th>刪除</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th style="width: 23%;">輪椅</th>
          <th>20</th>
          <th style="width: 23%;">
            14台在每一個房間門口
            <br />6台在一樓倉庫
          </th>
          <th style="width: 23%;"></th>
          <th class="underline">修改</th>
          <th class="underline">刪除</th>
        </tr>
        <tr>
          <th style="width: 23%;">擔架</th>
          <th>6</th>
          <th style="width: 23%;">一樓倉庫</th>
          <th style="width: 23%;"></th>
          <th class="underline">修改</th>
          <th class="underline">刪除</th>
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
      items: [
        { content: "", remnant: 50, limit: 50 },
        { content: "", remnant: 50, limit: 50 },
        { content: "", remnant: 20, limit: 20 },
        { content: "", remnant: 500, limit: 500 },
        { content: "", remnant: 500, limit: 500 },
      ],
      pointing: 0,
      modal: false,
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
  margin: 30px auto;
}

.planTitle__text {
  width: 164px;
  text-align: center;
  padding: 0;
}

.planJob {
  margin-bottom: 10px;
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

textarea {
  width: 100%;
}

.planHeader__title {
  margin-right: 20px;
}

.planHeader {
  margin-bottom: 0;
}
</style>
