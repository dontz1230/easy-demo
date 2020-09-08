<template>
  <div class="plan-page">
    <TheModal @closeModal="closeModal" v-if="modal" :list="true" :test="true">
      <template #header>提醒</template>
      <div class="modalContent">
        <p
          style="padding: 30px 20px 0 20px;  color:#777;  font-size: 16px !important;"
        >匯出Word檔後如需手動增減計畫內容，</p>
        <p style="margin: 30px 0 30px 20px; color:#777;   font-size: 16px !important;">請記得更改目錄及頁碼。</p>
        <div class="confirmBtn modalBtn" @click="closeModal">確定</div>
        <div class="cancelBtn modalBtn" @click="closeModal">取消</div>
      </div>
      <template #footer v-show="false"></template>
    </TheModal>

    <loading v-if="isLoading" />
    <div class="saveBtn">儲存</div>
    <PlanPanel />
    <div class="planContent">
      <PlanCatelogue @changeStep="changeStep" v-if="step!==0" :pageStep="step" />
      <PlanEdit v-if="step===0" />
      <PlanOne v-if="step===1" />
      <PlanTwo v-if="step===2" />
      <PlanThreeOne v-if="step===3" />
      <PlanThreeTwo v-if="step===4" />
      <PlanThreeThree v-if="step === 5" />
      <PlanThreeFour v-if="step===6" />

      <!-- 第三章最後Ｓ -->
      <PlanFourOne v-if="step===7" />
      <!-- 第三章最後Ｅ -->

      <!-- 第四章地震Ｓ -->

      <EarthStart :eq="true" v-if="step===8" />
      <PlanFourTwo :eq="true" @uploadThing="uploadThing" v-if="step===9" />
      <PlanFourThree :eq="true" :upload="upload" v-if="step===10" />
      <PlanFourFour :eq="true" v-if="step===11" />

      <!-- 第五章台虹 -->
      <EarthStart :eq="false" v-if="step===12" />
      <PlanFourTwo :eq="false" @uploadThing="uploadThing" v-if="step ===13" />
      <PlanFourThree :eq="false" :upload="upload" v-if="step ===14" />
      <PlanFourFour :eq="false" v-if="step ===15 || step ===16" />
      <!-- <PlanFourFour :eq="false" v-if="step ===16" /> -->
      <!-- <PlanFourFive v-if="step===11" /> -->

      <!-- 六 停電 -->
      <LightsOut v-if="step === 17" />

      <!-- 七 避難 -->
      <PlanFiveOne v-if="step === 18" />
      <PlanFiveOneSecond v-if="step === 19" />
      <PlanFiveTwo v-if="step === 20" />

      <PlanSixOne v-if="step === 21" />
      <PlanSixTwo v-if="step === 22" />
      <PlanSeven v-if="step===23" />
      <PlanSixThree v-if="step===24" />
    </div>

    <!-- <PreviousNext @prevNext="prevNext(step)" :step="step" /> -->
    <div class="historyBtn">
      <div class="historyBtn__pre pointer" v-if="step !==0" @click="prevNext(-1)">上一步</div>
      <div class="historyBtn__Next pointer" v-if="step !==24" @click="prevNext(1)">下一步</div>
      <div class="historyBtn__Next pointer" v-if="step ===24" @click="modal=true">匯出word檔</div>
    </div>
  </div>
</template>

<script>
//import axios from 'axios'
import PlanEdit from "@/components/PlanPage/PlanEdit";
import PlanPanel from "@/components/PlanPage/PlanPanel";
import PlanOne from "@/components/PlanPage/PlanOne";
import PlanTwo from "@/components/PlanPage/PlanTwo";
import PlanThreeOne from "@/components/PlanPage/PlanThreeOne";
import PlanThreeTwo from "@/components/PlanPage/PlanThreeTwo";
import PlanThreeThree from "@/components/PlanPage/PlanThreeThree";
import PlanThreeFour from "@/components/PlanPage/PlanThreeFour";
import PlanFourOne from "@/components/PlanPage/PlanFourOne";
import PlanFourTwo from "@/components/PlanPage/PlanFourTwo";
import PlanFourThree from "@/components/PlanPage/PlanFourThree";
import PlanFourFour from "@/components/PlanPage/PlanFourFour";
import PlanFourFive from "@/components/PlanPage/PlanFourFive";
import PlanFiveOne from "@/components/PlanPage/PlanFiveOne";
import PlanFiveOneSecond from "@/components/PlanPage/PlanFiveOneSecond";
import PlanFiveTwo from "@/components/PlanPage/PlanFiveTwo";
import PlanSixOne from "@/components/PlanPage/PlanSixOne";
import PlanSixTwo from "@/components/PlanPage/PlanSixTwo";
import PlanSixThree from "@/components/PlanPage/PlanSixThree";
import PlanSeven from "@/components/PlanPage/PlanSeven";
// import PreviousNext from '@/components/PlanPage/PreviousNext'
import PlanCatelogue from "@/components/PlanPage/PlanCatelogue";
import EarthStart from "@/components/PlanPage/EarthStart";
import LightsOut from "@/components/PlanPage/LightsOut";

export default {
  data: function () {
    return {
      isLoading: false,
      step: 0,
      upload: false,
      modal: false,
    };
  },
  computed: {},
  methods: {
    closeModal() {
      this.modal = false;
    },
    prevNext(type) {
      console.log(type);
      if (type == +1 && this.step === 15) {
        this.step = 17;
      }  else if (type == -1 && this.step === 17) {
        this.step = 15;
      } else if (type == -1) {
        this.step = this.step - 1;
      } else if (type == +1) {
        this.step = this.step + 1;
      }
    },
    changeStep(step) {
      this.step = step;
    },
    uploadThing(status) {
      if (status === "upload") {
        this.upload = true;
      } else {
        this.upload = false;
      }
      console.log(this.upload);
    },
  },
  components: {
    PlanPanel: PlanPanel,
    PlanOne: PlanOne,
    PlanTwo: PlanTwo,
    PlanCatelogue: PlanCatelogue,
    PlanThreeOne: PlanThreeOne,
    PlanThreeTwo: PlanThreeTwo,
    PlanThreeThree: PlanThreeThree,
    PlanThreeFour: PlanThreeFour,
    PlanFourOne: PlanFourOne,
    PlanFourTwo: PlanFourTwo,
    PlanFourThree: PlanFourThree,
    PlanFourFour: PlanFourFour,
    PlanFourFive: PlanFourFive,
    PlanFiveOne: PlanFiveOne,
    PlanFiveTwo: PlanFiveTwo,
    PlanSixOne: PlanSixOne,
    PlanSixTwo: PlanSixTwo,
    PlanSixThree: PlanSixThree,
    PlanEdit: PlanEdit,
    PlanSeven: PlanSeven,
    PlanFiveOneSecond: PlanFiveOneSecond,
    EarthStart: EarthStart,
    LightsOut: LightsOut,
    TheModal: () => import("../components/PlanPage/TheModal"),
  },
};
</script>
<style lang="scss" scoped>
.saveBtn {
  background: #f45454;
  border-radius: 4px;
  padding: 12px;
  text-align: center;
  position: fixed;
  right: 10px;
  z-index: 9999;
  color: #fff;
  font-size: 24px;
  font-weight: bold;
  bottom: 20px;
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
