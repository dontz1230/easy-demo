<template>
  <div class="plan-section plan-section-three-four">
    <TheModal @closeModal="closeModal" v-if="modal">
      <template #header>新增物資</template>
      <div class="planTitle">
        <div class="planTitle__text">物資分類</div>
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
          maxlength="50"
        ></textarea>
        <p style="text-align:right;margin:0;font-size:14px;">{{items[0].remnant}} / 50</p>
      </div>
      <div class="planTitle">
        <div class="planTitle__text">物資名稱</div>
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
          maxlength="50"
        ></textarea>
        <p style="text-align:right;margin:0;font-size:14px;">{{items[1].remnant}} / 50</p>
      </div>

      <div class="planTitle">
        <div class="planTitle__text">必要數量</div>
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
          maxlength="50"
        ></textarea>
        <p style="text-align:right;margin:0;font-size:14px;">{{items[2].remnant}} / 50</p>
      </div>

      <div class="planTitle">
        <div class="planTitle__text">現有數量</div>
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
          maxlength="50"
        ></textarea>
        <p style="text-align:right;margin:0;font-size:14px;">{{items[3].remnant}} / 50</p>
      </div>

      <div class="planTitle">
        <div class="planTitle__text">保管場所</div>
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
          maxlength="50"
        ></textarea>
        <p style="text-align:right;margin:0;font-size:14px;">{{items[4].remnant}} / 50</p>
      </div>

      <div class="planTitle">
        <div class="planTitle__text">有效期限</div>
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
          maxlength="50"
        ></textarea>
        <p style="text-align:right;margin:0;font-size:14px;">{{items[5].remnant}} / 50</p>
      </div>

      <div class="planTitle">
        <div class="planTitle__text">供應商名稱</div>
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
          maxlength="50"
        ></textarea>
        <p style="text-align:right;margin:0;font-size:14px;">{{items[6].remnant}} / 50</p>
      </div>

      <div class="planTitle">
        <div class="planTitle__text">供應商聯絡方式</div>
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
          maxlength="50"
        ></textarea>
        <p style="text-align:right;margin:0;font-size:14px;">{{items[7].remnant}} / 50</p>
      </div>

      <template #footer>確定送出</template>
    </TheModal>
    <div class="planHeader">
      <div class="planHeader__title" style="font-size:40px;">附件</div>
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
      <div class="themeColor">物資清單</div>
      <div
        class="planTitle__redIcon"
        style="
    display: inline-block;
    text-align: center;
    line-height: 34px;
    font-size: 16px;"
        data-red="如需加入其他附件，例如員工名冊、院民需求清冊、院民家屬聯繫名冊等，可自行利用匯出之Word檔新增。"
      >
        <i class="fas fa-question"></i>
      </div>
    </div>

    <div class="planJob">
      <div
        class="planTitle__text inline"
        style="text-align: left;
    padding-left: 20px;
    width: 164px;"
      >物資儲備標準</div>
    </div>
    <div class="textContainer">
      <img v-if="pointing === 10" src="~@/assets/img/planList/point.png" />
      <textarea
        placeholder="2020.05.23"
        style="width:184px;"
        @focus="pointing= 10"
        class
        name
        id
        maxlength="50"
      ></textarea>
    </div>

    <div class="planJob">
      <div
        class="planTitle__text inline"
        style="padding: 0 20px;
    text-align: left;
    width: auto;"
      >儲備物資</div>
      <div
        class="planTitle__redIcon"
        style="
    display: inline-block;
    text-align: center;
    line-height: 34px;
    font-size: 16px;"
        data-red="依據災害可能影響的時間、機構所處的環境等，預估物資所需儲備量，建議以3到7天為儲備標準，如果機構位於山區或易形成孤島地區則可以14天為儲備天數。"
      >
        <i class="fas fa-question"></i>
      </div>
      <div class="addBtn" style="font-size:24px;margin-bottom: 10px;" @click="modal = !modal">
        <i class="fa fa-plus"></i>
        新增物資
      </div>
    </div>

    <table class="blueTable">
      <thead>
        <tr>
          <th>類別</th>
          <th>名稱</th>
          <th>必要數量</th>
          <th>現有數量</th>
          <th style="width: 12%;">保管場所</th>
          <th style="width: 12%;">有效期限</th>
          <th style="width: 12%;">供應商名稱</th>
          <th style="width: 12%;">供應商聯絡方式</th>
          <th>修改</th>
          <th>刪除</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th>食物</th>
          <th>飲用水</th>
          <th></th>
          <th></th>
          <th style="width: 12%;"></th>
          <th style="width: 12%;"></th>
          <th style="width: 12%;"></th>
          <th style="width: 12%;"></th>
          <td class="underline">修改</td>
          <td class="underline">刪除</td>
        </tr>
        <tr>
          <th>食物</th>
          <th>白米</th>
          <th></th>
          <th></th>
          <th style="width: 12%;"></th>
          <th style="width: 12%;"></th>
          <th style="width: 12%;"></th>
          <th style="width: 12%;"></th>
          <td class="underline">修改</td>
          <td class="underline">刪除</td>
        </tr>
        <tr>
          <th>食物</th>
          <th>罐頭</th>
          <th></th>
          <th></th>
          <th style="width: 12%;"></th>
          <th style="width: 12%;"></th>
          <th style="width: 12%;"></th>
          <th style="width: 12%;"></th>
          <td class="underline">修改</td>
          <td class="underline">刪除</td>
        </tr>
        <tr>
          <th>食物</th>
          <th>奶粉</th>
          <th></th>
          <th></th>
          <th style="width: 12%;"></th>
          <th style="width: 12%;"></th>
          <th style="width: 12%;"></th>
          <th style="width: 12%;"></th>
          <td class="underline">修改</td>
          <td class="underline">刪除</td>
        </tr>
        <tr>
          <th>醫療用品</th>
          <th>退燒藥</th>
          <th></th>
          <th></th>
          <th style="width: 12%;"></th>
          <th style="width: 12%;"></th>
          <th style="width: 12%;"></th>
          <th style="width: 12%;"></th>
          <td class="underline">修改</td>
          <td class="underline">刪除</td>
        </tr>
        <tr>
          <th>醫療用品</th>
          <th>紗布</th>
          <th></th>
          <th></th>
          <th style="width: 12%;"></th>
          <th style="width: 12%;"></th>
          <th style="width: 12%;"></th>
          <th style="width: 12%;"></th>
          <td class="underline">修改</td>
          <td class="underline">刪除</td>
        </tr>
        <tr>
          <th>醫療用品</th>
          <th>胰島素</th>
          <th></th>
          <th></th>
          <th style="width: 12%;"></th>
          <th style="width: 12%;"></th>
          <th style="width: 12%;"></th>
          <th style="width: 12%;"></th>
          <td class="underline">修改</td>
          <td class="underline">刪除</td>
        </tr>
        <tr>
          <th>生活用品</th>
          <th>紙尿布</th>
          <th></th>
          <th></th>
          <th style="width: 12%;"></th>
          <th style="width: 12%;"></th>
          <th style="width: 12%;"></th>
          <th style="width: 12%;"></th>
          <td class="underline">修改</td>
          <td class="underline">刪除</td>
        </tr>
        <tr>
          <th>生活用品</th>
          <th>內衣褲</th>
          <th></th>
          <th></th>
          <th style="width: 12%;"></th>
          <th style="width: 12%;"></th>
          <th style="width: 12%;"></th>
          <th style="width: 12%;"></th>
          <td class="underline">修改</td>
          <td class="underline">刪除</td>
        </tr>
        <tr>
          <th>生活用品</th>
          <th>衛生紙</th>
          <th></th>
          <th></th>
          <th style="width: 12%;"></th>
          <th style="width: 12%;"></th>
          <th style="width: 12%;"></th>
          <th style="width: 12%;"></th>
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
      modal: false,
      items: [
        { content: "", remnant: 50 },
        { content: "", remnant: 50 },
        { content: "", remnant: 50 },
        { content: "", remnant: 50 },
        { content: "", remnant: 50 },
        { content: "", remnant: 50 },
        { content: "", remnant: 50 },
        { content: "", remnant: 50 },
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
      item.remnant = 50 - txtVal;
    },
  },
};
</script>
<style lang="scss" scoped>
.planTopic {
  margin: 10px auto;
}

.planTitle__text {
  width: 200px;
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
</style>
