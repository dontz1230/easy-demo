<template>
  <div class="plan-section plan-section-three-four">
    <TheModal @closeModal="closeModal" v-if="modal">
      <template #header>新增應變小組負責人員</template>
      <div class="planJob">
        <div class="planTitle__text inline">應變人員</div>
        <div
          class="planTitle__redIcon"
          style="
    display: inline-block;
    text-align: center;
    line-height: 34px;
    font-size: 16px;"
          data-red="填寫機構內所有應變人員姓名、聯絡電話。
機構內所有人員均應納入應變編制內。"
        >
          <i class="fas fa-question"></i>
        </div>
        <div class="addBtn" style="display: inline-block;
    float: right;
    clear: both;">
          <i class="fa fa-plus"></i>
          新增應變人員
        </div>
      </div>

      <div class="twoColumn" style="width: 100%;">
        <div class="textContainer">
          <img v-if="pointing === 1" src="~@/assets/img/planList/point.png" />
          <textarea
            @focus="pointing= 1"
            placeholder="應變人員姓名"
            @input="descInput(items[0],items[0].content);"
            v-model="items[0].content"
            class
            name
            id
            maxlength="60"
          ></textarea>
        </div>

        <div class="textContainer">
          <img v-if="pointing === 2" src="~@/assets/img/planList/point.png" />
          <textarea
            @focus="pointing= 2"
            placeholder="應變人員姓名"
            @input="descInput(items[1],items[1].content);"
            v-model="items[1].content"
            class
            name
            id
            maxlength="60"
          ></textarea>
        </div>
      </div>
      <div class="twoColumn" style="width: 100%;">
        <div class="textContainer">
          <img v-if="pointing === 3" src="~@/assets/img/planList/point.png" />
          <textarea
            @focus="pointing= 3"
            placeholder="應變人員姓名"
            @input="descInput(items[2],items[2].content);"
            v-model="items[2].content"
            class
            name
            id
            maxlength="60"
          ></textarea>
        </div>
        <div class="textContainer">
          <img v-if="pointing === 4" src="~@/assets/img/planList/point.png" />
          <textarea
            @focus="pointing= 4"
            placeholder="應變人員姓名"
            @input="descInput(items[3],items[3].content);"
            v-model="items[3].content"
            class
            name
            id
            maxlength="60"
          ></textarea>
        </div>
      </div>
      <div class="twoColumn" style="width: 100%;">
        <div class="textContainer">
          <img v-if="pointing === 5" src="~@/assets/img/planList/point.png" />
          <textarea
            @focus="pointing= 5"
            placeholder="應變人員姓名"
            @input="descInput(items[4],items[4].content);"
            v-model="items[4].content"
            class
            name
            id
            maxlength="60"
          ></textarea>
        </div>
        <div class="textContainer">
          <img v-if="pointing === 6" src="~@/assets/img/planList/point.png" />
          <textarea
            @focus="pointing= 6"
            placeholder="應變人員姓名"
            @input="descInput(items[5],items[5].content);"
            v-model="items[5].content"
            class
            name
            id
            maxlength="60"
          ></textarea>
        </div>
      </div>
      <div class="twoColumn" style="width: 100%;">
        <div class="textContainer">
          <img v-if="pointing === 7" src="~@/assets/img/planList/point.png" />
          <textarea
            @focus="pointing= 7"
            placeholder="應變人員姓名"
            @input="descInput(items[6],items[6].content);"
            v-model="items[6].content"
            class
            name
            id
            maxlength="60"
          ></textarea>
        </div>
        <div class="textContainer">
          <img v-if="pointing === 8" src="~@/assets/img/planList/point.png" />
          <textarea
            @focus="pointing= 8"
            placeholder="應變人員姓名"
            @input="descInput(items[7],items[7].content);"
            v-model="items[7].content"
            class
            name
            id
            maxlength="60"
          ></textarea>
        </div>
      </div>

      <template #footer>確定送出</template>
    </TheModal>

    <div class="planHeader">
      <div class="planHeader__title">天然災害應變流程</div>
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
      <div class="themeColor">應變人員資料設定</div>
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
      <div class="addBtn" style="position: absolute;
    right: 0;" @click="modal = !modal">
        <i class="fa fa-plus"></i>
        新增應變人員
      </div>
    </div>

    <table class="blueTable">
      <thead>
        <tr>
          <th>姓名</th>
          <th style="width: 60%;">聯絡電話</th>
          <th style="width: 10%;">修改</th>
          <th style="width: 10%;">刪除</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>ＯＯＯ</td>
          <td style="width: 60%;">09XX-XXX-XXX</td>
          <td class="underline" style="width: 10%;">修改</td>
          <td class="underline" style="width: 10%;">刪除</td>
        </tr>
        <tr>
          <td>ＯＯＯ</td>
          <td style="width: 60%;">09XX-XXX-XXX</td>
          <td class="underline" style="width: 10%;">修改</td>
          <td class="underline" style="width: 10%;">刪除</td>
        </tr>
        <tr>
          <td>ＯＯＯ</td>
          <td style="width: 60%;">09XX-XXX-XXX</td>
          <td class="underline" style="width: 10%;">修改</td>
          <td class="underline" style="width: 10%;">刪除</td>
        </tr>
        <tr>
          <td>ＯＯＯ</td>
          <td style="width: 60%;">09XX-XXX-XXX</td>
          <td class="underline" style="width: 10%;">修改</td>
          <td class="underline" style="width: 10%;">刪除</td>
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
      pointing: 0,
      items: [
        { content: "", remnant: 60, limit: 60 },
        { content: "", remnant: 50, limit: 50 },
        { content: "", remnant: 50, limit: 50 },
        { content: "", remnant: 50, limit: 50 },
        { content: "", remnant: 50, limit: 50 },
        { content: "", remnant: 50, limit: 50 },
        { content: "", remnant: 50, limit: 50 },
        { content: "", remnant: 50, limit: 50 },
        { content: "", remnant: 50, limit: 50 },
        { content: "", remnant: 50, limit: 50 },
      ],
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

input {
  border: 1px solid #d4d4d4;
}

.twoColumn {
  grid-template-columns: 1fr 1fr;
}
</style>