<template>
  <div class="plan-page">
    <loading v-if="isLoading" />
    <div class="saveBtn">儲存</div>
    <PlanPanel />
    <div class="planContent">
      <PlanCatelogue @changeStep="changeStep" v-if="step!==0" />
      <PlanEdit v-if="step===0" />
      <PlanOne v-if="step===1" />
      <PlanTwo v-if="step===2" />
      <PlanThreeOne v-if="step===3" />
      <PlanThreeTwo v-if="step===4" />
      <PlanThreeThree v-if="step === 5" />
      <PlanThreeFour v-if="step===6" />

      <PlanFourOne v-if="step===7" />
      <PlanFourTwo @uploadThing="uploadThing" v-if="step===8 || step ===12" />
      <PlanFourThree :upload="upload" v-if="step===9|| step ===13" />
      <PlanFourFour v-if="step===10|| step ===14" />
      <PlanFourFive v-if="step===11" />

      <PlanFiveOne v-if="step === 15" />
      <PlanFiveTwo v-if="step === 16" />
      <PlanSixOne v-if="step === 17" />
      <PlanSixTwo v-if="step === 18" />
      <PlanSeven v-if="step===19" />
      <PlanSixThree v-if="step===20" />
    </div>

    <!-- <PreviousNext @prevNext="prevNext(step)" :step="step" /> -->
    <div class="historyBtn">
      <div class="historyBtn__pre pointer" v-if="step !==0" @click="prevNext(-1)">上一步</div>
      <div class="historyBtn__Next pointer" v-if="step !== 7" @click="prevNext(1)">下一步</div>
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
import PlanFiveTwo from "@/components/PlanPage/PlanFiveTwo";
import PlanSixOne from "@/components/PlanPage/PlanSixOne";
import PlanSixTwo from "@/components/PlanPage/PlanSixTwo";
import PlanSixThree from "@/components/PlanPage/PlanSixThree";
import PlanSeven from "@/components/PlanPage/PlanSeven";
// import PreviousNext from '@/components/PlanPage/PreviousNext'
import PlanCatelogue from "@/components/PlanPage/PlanCatelogue";

export default {
  data: function () {
    return {
      isLoading: false,
      step: 0,
      upload: false,
    };
  },
  computed: {},
  methods: {
    prevNext(type) {
      console.log(type);
      if (type == +1) {
        this.step = this.step + 1;
      } else if (type == -1) {
        this.step = this.step - 1;
      } else {
        console.log("else");
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
  },
};
</script>
<style lang="scss">
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
</style>
