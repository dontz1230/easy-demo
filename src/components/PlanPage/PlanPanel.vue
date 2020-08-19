<template>
  <div class="plan-panel">
     <TheModal
      @closeModal="closeModal"
      v-if="modal"
      :list="true"
      :test="true"
    >
      <template #header>提醒</template>
      <div class="modalContent">
        <p
          style="padding: 30px 20px 0 20px;  color:#777;  font-size: 16px !important;"
        >匯出Word檔後如需手動增減計畫內容，</p>
        <p
          style="margin: 30px 0 30px 20px; color:#777;   font-size: 16px !important;"
        >請記得更改目錄及頁碼。</p>
        <div class="confirmBtn modalBtn" @click="closeModal">確定</div>
        <div class="cancelBtn modalBtn" @click="closeModal">取消</div>
      </div>
      <template #footer v-show="false"></template>
    </TheModal>
    <div class="panelContainer">
      <div class="panelContainer__left">
        <div><router-link to="planlist">回清單</router-link></div>
        <div class="panelContainer__left--btn" @click="modal = true">匯出WORD檔</div>
      </div>
      <div class="panelContainer__right">
        <div class="panelContainer__right--time">
          <i class="fa fa-clock"></i>
          <span>
            自動登出：
            <span class="_font--warning">29:46</span>
          </span>
        </div>
        <div class="panelContainer__right--logout">
          <i class="fas fa-sign-out-alt"></i>
          <span>登出</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data(){
    return {
      modal: false
    }
  },
  methods:{
   closeModal() {
      this.modal = false;
    },
  },
  components:{
    TheModal: () => import("../PlanPage/TheModal"),
  }
}
</script>
<style lang="scss">
.panelContainer__left div a {
  color: #787878;
}


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
}

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
  
</style>