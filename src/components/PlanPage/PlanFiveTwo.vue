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

    <TheModal @closeModal="closeModal" v-if="modalTwo">
      <template #header>新增物資</template>
      <div class="planTitle">
        <div class="planTitle__text">避難收容地點</div>
        <div class="planTitle__redIcon" data-red="填寫避難收容地點的管理人或聯絡窗口。">
          <i class="fas fa-question"></i>
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
        <p
          style="text-align:right;margin:0;font-size:14px;"
        >{{items[6].remnant}} / {{items[6].limit}}</p>
      </div>

      <div class="planTitle">
        <div class="planTitle__text">避難收容聯絡人</div>
        <div class="planTitle__redIcon" data-red="填寫避難收容地點的管理人或聯絡窗口。">
          <i class="fas fa-question"></i>
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
        <p
          style="text-align:right;margin:0;font-size:14px;"
        >{{items[5].remnant}} / {{items[5].limit}}</p>
      </div>

      <div class="planTitle">
        <div class="planTitle__text">避難收容地址</div>
        <div class="planTitle__redIcon" data-red="避難收容地點的完整地址。">
          <i class="fas fa-question"></i>
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
        <p
          style="text-align:right;margin:0;font-size:14px;"
        >{{items[6].remnant}} / {{items[6].limit}}</p>
      </div>

      <div class="planTitle">
        <div class="planTitle__text">可安置人數</div>
        <div class="planTitle__redIcon" data-red="避難收容地點災時可容納的收容人數。">
          <i class="fas fa-question"></i>
        </div>
      </div>
      <div class="textContainer">
        <img v-if="pointing === 8" src="~@/assets/img/planList/point.png" />
        <textarea
          @focus="pointing= 8"
          @input="descInput(items[7],items[7].content);"
          v-model="items[7].content"
          class
          name
          id
          maxlength="500"
        ></textarea>
        <p
          style="text-align:right;margin:0;font-size:14px;"
        >{{items[7].remnant}} / {{items[7].limit}}</p>
      </div>

      <div class="planTitle">
        <div class="planTitle__text">隨行員工</div>
        <div class="planTitle__redIcon" data-red="列出陪同住民前往避難收容處所的員工姓名。">
          <i class="fas fa-question"></i>
        </div>
      </div>
      <div class="textContainer">
        <img v-if="pointing === 9" src="~@/assets/img/planList/point.png" />
        <textarea
          @focus="pointing= 9"
          @input="descInput(items[8],items[8].content);"
          v-model="items[8].content"
          class
          name
          id
          maxlength="500"
        ></textarea>
        <p
          style="text-align:right;margin:0;font-size:14px;"
        >{{items[8].remnant}} / {{items[8].limit}}</p>
      </div>

      <div class="planTitle">
        <div class="planTitle__text">備註</div>
        <div class="planTitle__redIcon" data-red="可列出避難收容地點欠缺的項目、需要注意的面向等。">
          <i class="fas fa-question"></i>
        </div>
      </div>
      <div class="textContainer">
        <img v-if="pointing === 10" src="~@/assets/img/planList/point.png" />
        <textarea
          @focus="pointing= 10"
          @input="descInput(items[9],items[9].content);"
          v-model="items[9].content"
          class
          name
          id
          maxlength="500"
        ></textarea>
        <p
          style="text-align:right;margin:0;font-size:14px;"
        >{{items[9].remnant}} / {{items[9].limit}}</p>
      </div>

      <template #footer>確定送出</template>
    </TheModal>

    <div class="planHeader">
      <div class="planHeader__title" style="margin-right:20;">避難收容</div>
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
      <div class="themeColor">異地撤離</div>
      <div
        class="planTitle__redIcon"
        style="
    display: inline-block;
    text-align: center;
    line-height: 34px;
    font-size: 16px;"
        data-red="指在機構建物外，須交通工具移動。"
      >
        <i class="fas fa-question"></i>
      </div>
    </div>

    <div class="planJob">
      <div class="planTitle__text inline" style="text-align: center;padding:0;">災害類型</div>
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
    <textarea class name id maxlength="500" style="margin: 0;"></textarea>

    <div class="planJob" style="    margin: 0 0 10px 0;">
      <div class="planTitle__text inline" style="text-align: center;padding:0;">避難路線</div>
      <div
        class="planTitle__redIcon"
        style="
    display: inline-block;
    text-align: center;
    line-height: 34px;
    font-size: 16px;"
        data-red="應將避難路線或交通動線記載於機構建物平面圖、機構附近環境地圖上。
避難路線選擇注意事項：
1.無論是機構內部或外部移動，盡可能設定兩條以上避難路徑。
2.事先評估異地撤離路線的災害潛勢，並建議標記路途所需時間，以作為疏散撤離時機擬定之參考。"
      >
        <i class="fas fa-question"></i>
      </div>
    </div>
    <img src="~@/assets/img/planList/upload.jpg" alt />

    <div class="planJob" style="display: inline-block;    transform: translateY(10px);">
      <div class="planTitle__text inline">避難收容地點</div>
      <div
        class="planTitle__redIcon"
        style="
    display: inline-block;
    text-align: center;
    line-height: 34px;
    font-size: 16px;"
        data-red="填寫避難收容地點名稱。
避難收容地點選擇注意事項：
1.考慮避難收容地點之設備，是否符合住民需求。
2.建議考量距離較近之場所，並事先確認避難收容地點是否位於災害潛勢範圍內或針對避難收容地點進行風險評估。
3.考量避難收容地點的收容能量。
4.安置單位第一時間可能無法收容過多住民，建議機構可準備第二、第三個安置單位。"
      >
        <i class="fas fa-question"></i>
      </div>
    </div>
    <div
      class="addBtn"
      style="float: right;display: inline-block;    transform: translateY(10px);"
      @click="modalTwo =  !modalTwo"
    >
      <i class="fa fa-plus"></i>
      新增避難收容場所
    </div>

    <table class="blueTable" style>
      <thead>
        <tr>
          <th style="width: 12%;">
            避難收容
            <br />地點
          </th>
          <th style="width: 12%;">
            避難收容
            <br />聯絡人
          </th>
          <th style="width: 20%;">避難收容地址</th>
          <th style="width: 20%;">可安置人數</th>
          <th style="width: 12%;">隨行員工</th>
          <th style="width: 12%;">備註</th>
          <th>修改</th>
          <th>刪除</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td class="underline">修改</td>
          <td class="underline">刪除</td>
        </tr>
        <tr style="background:#f2f2f2">
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td class="underline">修改</td>
          <td class="underline">刪除</td>
        </tr>
      </tbody>
    </table>

    <!-- <div class="planJob">
      <div class="planTitle__text inline">避難收容聯絡人</div>
      <div
        class="planTitle__redIcon"
        style="
    display: inline-block;
    text-align: center;
    line-height: 34px;
    font-size: 16px;"
        data-red="填寫避難收容地點的管理人或聯絡窗口。"
      ><i class="fas fa-question"></i></div>
    </div>
    <textarea class name id maxlength="500"></textarea>

    <div class="planJob">
      <div class="planTitle__text inline">避難收容地址</div>
      <div
        class="planTitle__redIcon"
        style="
    display: inline-block;
    text-align: center;
    line-height: 34px;
    font-size: 16px;"
        data-red="避難收容地點的完整地址。"
      ><i class="fas fa-question"></i></div>
    </div>
    <textarea class name id maxlength="500"></textarea>

    <div class="planJob">
      <div class="planTitle__text inline">可安置人數</div>
      <div
        class="planTitle__redIcon"
        style="
    display: inline-block;
    text-align: center;
    line-height: 34px;
    font-size: 16px;"
        data-red="避難收容地點災時可容納的收容人數。"
      ><i class="fas fa-question"></i></div>
    </div>
    <textarea class name id maxlength="500"></textarea>

    <div class="planJob">
      <div class="planTitle__text inline">隨行員工</div>
      <div
        class="planTitle__redIcon"
        style="
    display: inline-block;
    text-align: center;
    line-height: 34px;
    font-size: 16px;"
        data-red="列出陪同住民前往避難收容處所的員工姓名。"
      ><i class="fas fa-question"></i></div>
    </div>
    <textarea class name id maxlength="500"></textarea>

    <div class="planJob">
      <div class="planTitle__text inline">備註</div>
      <div
        class="planTitle__redIcon"
        style="
    display: inline-block;
    text-align: center;
    line-height: 34px;
    font-size: 16px;"
        data-red="可列出避難收容地點欠缺的項目、需要注意的面向等。"
      ><i class="fas fa-question"></i></div>
    </div>
    <textarea class name id maxlength="500"></textarea>-->

    <div class="planJob">
      <div class="planTitle__text inline" style="    transform: translateY(10px);">移動工具</div>
      <div
        class="planTitle__redIcon"
        style="
    display: inline-block;
    text-align: center;
    line-height: 34px;
    font-size: 16px;    transform: translateY(10px);"
        data-red="依據工作內容安排日間及夜間負責的應變人員。"
      >
        <i class="fas fa-question"></i>
      </div>
      <div class="addBtn" @click="modal = true">
        <i class="fa fa-plus"></i>
        新增移動工具
      </div>
    </div>

    <table class="blueTable" style="transform: translateY(-10px);">
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
        <tr style="background:#f2f2f2">
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
      pointing: 0,
      modal: false,
      modalTwo: false,
      items: [
        { content: "", remnant: 50, limit: 50 },
        { content: "", remnant: 50, limit: 50 },
        { content: "", remnant: 50, limit: 50 },
        { content: "", remnant: 20, limit: 20 },
        { content: "", remnant: 500, limit: 500 },
        { content: "", remnant: 500, limit: 500 },
        { content: "", remnant: 500, limit: 500 },
        { content: "", remnant: 500, limit: 500 },
        { content: "", remnant: 500, limit: 500 },
        { content: "", remnant: 500, limit: 500 },
        { content: "", remnant: 500, limit: 500 },
        { content: "", remnant: 500, limit: 500 },
        { content: "", remnant: 500, limit: 500 },
      ],
    };
  },
  methods: {
    closeModal() {
      this.modal = false;
      this.modalTwo = false;
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
  margin: 20px 0 25px 0;
  line-height: 1;
}

.planTitle__text {
  width: 164px;
  text-align: left;
  padding-left: 20px;
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

textarea {
  width: 100%;
}

.planHeader__title {
  margin-right: 20px;
}

.planHeader {
  margin-bottom: 0;
}

.planJob {
  margin: 10px 0;
}
</style>
