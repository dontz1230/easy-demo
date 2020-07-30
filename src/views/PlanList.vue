<template>
  <div class="plan-list">
    <loading v-if="isLoading" />
    <TheModal
      @closeModal="closeModal"
      v-if="modalDelete"
      @submitForm="submitForm"
      :list="true"
      :test="true"
    >
      <template #header>刪除</template>
      <div class="modalContent">
        <p
          style="padding: 30px 20px 0 20px;  color:#777;  font-size: 30px !important;"
        >按下確定後，計畫書就立即刪除無法找回～</p>
        <p
          style="    margin: 30px 0 30px 20px; color:#777;   font-size: 30px !important;"
        >您確定要刪除您的計劃書嗎？</p>
        <div class="confirmBtn modalBtn">確定</div>
        <div class="cancelBtn modalBtn" @click="closeModal">取消</div>
      </div>
      <template #footer v-show="false"></template>
    </TheModal>

    <TheModal @closeModal="closeModal" v-if="modalAdd" :list="true" :test="false">
      <template #header>
        <i class="fa fa-plus"></i> 新增計畫
      </template>
      <div class="modalContent">
        <p style="padding: 30px 20px 0px 0; color:#777;font-weight:bold;">請選擇您要新增計畫的方式</p>
        <p style="font-size: 1.25rem !important;color:#777;margin: 10px 0px 10px 30px;">
          <input type="radio" /> 使用計畫範本(空白)
        </p>
        <p style="font-size: 1.25rem !important;color:#777;margin: 10px 0px 10px 30px;">
          <input type="radio" /> 從現有計畫中複製修改
        </p>
        <select>
          <option>2017.11.01</option>
        </select>
      </div>
      <template #footer>確定送出</template>
    </TheModal>

    <div class="plan-list__title">
      <h1>長照機構災管計畫工具</h1>
    </div>
    <div class="plan-list__content">
      <div class="plan-block" @click="modalAdd = true">
        <div class="plan-block__content">
          <img src="~@/assets/img/planList/plus.png" />
          <span>建立新計畫</span>
        </div>
      </div>
      <div class="plan-block new-plan" v-for="(plan,index) in plans" :key="index">
        <div class="new-plan__header">
          <span>{{plan.year}}</span>
          <span @click="modalDelete = true" class="new-plan__header__close">
            <i class="fa fa-times" @click="modalDelete = true"></i>
          </span>
        </div>
        <div class="new-plan__content">
          <div class="plan-options">
            <div class="plan-options__btn">
              <i class="fas fa-edit"></i>
              <span>修改</span>
            </div>
            <div class="plan-options__btn">
              <i class="fas fa-eye"></i>
              <span>預覽</span>
            </div>
          </div>
          <div class="plan-img">
            <img src="~@/assets/img/planList/pdf.png" alt />
          </div>
          <span>編修日期：{{plan.createTime}}</span>
        </div>
        <div class="new-plan__footer">
          <img src="~@/assets/img/planList/docIcon.png" alt />
          <a :href="plan.downloadLink">下載計畫書</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
//import axios from 'axios';

export default {
  data: function () {
    return {
      isLoading: false,
      modalDelete: false,
      modalAdd: false,
      plans: [
        {
          year: 2020,
          photo:
            "https://miro.medium.com/max/1088/1*ZxRo2Tzei-wZOlotb5vzSw.png",
          createTime: "2020.05.16",
          downloadLink: "https://google.com",
        },
        {
          year: 2020,
          photo:
            "https://miro.medium.com/max/1088/1*ZxRo2Tzei-wZOlotb5vzSw.png",
          createTime: "2020.05.16",
          downloadLink: "https://google.com",
        },
        {
          year: 2020,
          photo:
            "https://miro.medium.com/max/1088/1*ZxRo2Tzei-wZOlotb5vzSw.png",
          createTime: "2020.05.16",
          downloadLink: "https://google.com",
        },
        {
          year: 2020,
          photo:
            "https://miro.medium.com/max/1088/1*ZxRo2Tzei-wZOlotb5vzSw.png",
          createTime: "2020.05.16",
          downloadLink: "https://google.com",
        },
      ],
    };
  },
  computed: {},
  methods: {
    closeModal() {
      this.modalDelete = false;
      this.modalAdd = false;
    },
    submitForm() {
      console.log("submit");
      this.$router.push({
        path: "planpage",
      });
    },
  },
  components: {
    TheModal: () => import("../components/PlanPage/TheModal"),
  },
};
</script>
<style lang="scss" scoped>
.modal {
  color: #787878;
}
.plan-list__content {
  width: 100%;
  margin: 0;
  display: grid !important;
  grid-template-columns: 1fr 1fr 1fr 1fr !important;
}
.modal {
  height: auto !important;

  // .modalFooter {
  //   display: none !important;
  // }
}
// .modalFooter {
//   display:none!important;
// }

.modalContent {
  text-align: center;
}

.modalBtn {
  display: inline-block;
  padding: 0 24px;
  margin: 0 12px;
  color: #fff;
}

.content {
  padding: 34px 58px !important;
}

.cancelBtn {
  background: #66cdb6;
  padding: 0;
  width: 168px;
  height: 52px;
  line-height: 52px;
  border-radius: 4px;
  text-align: center !important;
  font-size: 24px;
}

.confirmBtn {
  padding: 0;
  width: 168px;
  height: 52px;
  line-height: 52px;
  border-radius: 4px;
  text-align: center !important;
  background: #bcbcbc;
  font-size: 24px;
}

p {
  text-align: left;
  font-size: 1.25rem !important;
}

.modal {
  width: 524px !important;
  height: 445px !important;
}

select {
  width: calc(100% - 24px);
  height: 59px;
  margin-left: 24px;
  font-size: 1.25rem;
  color: #777;
  padding-left: 12px;
}
input[type="radio"] {
  width: 20px;
  appearance: auto;
}
</style>