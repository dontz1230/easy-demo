<template>
  <div class="plan-section">
    <div class="planHeader">
      <div class="planHeader__title"  style="margin-right: 20px;">災害風險評估</div>
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
      <div class="themeColor">(一)天然災害風險檢查系統評估結果
        <div class="planTitle__redIcon" style="
    display: inline-block;
    text-align: center;
    line-height: 34px;
    font-size: 16px;
" data-red="先至「防災易起來網站-長照機構防災」填答長照機構天然災害風險檢查（https://easy2do.ncdr.nat.gov.tw/ssa/survey）系統，此部分由系統自動帶入結果。">
        <i class="fas fa-question"></i>
      </div>
      </div>
      <p
        class="textDarkGrey"
      >以下內容為直接帶入「長照機構天然災害風險檢查」系統之評估結果，依據受災經驗與機構周遭環境初步評估風險，如為空白表示您未曾填報過，請至https://easy2do.ncdr.nat.gov.tw/ssa/survey進行填答。若上次評估時間超過三年，建議重新填報。</p>
    </div>
    <div class="threeColumn">
      <div class="textContainer">
        <img v-if="pointing === 1" src="~@/assets/img/planList/point.png" />
        <input class="greyInput" @focus="pointing= 1" placeholder="地震風險" type="text" />
      </div>
      
      <div class="textContainer">
        <img v-if="pointing === 2" src="~@/assets/img/planList/point.png" />
        <input class="greyInput" @focus="pointing= 2" placeholder="低" type="text" />
      </div>
      <div class="textContainer">
        <img v-if="pointing === 3" src="~@/assets/img/planList/point.png" />
        <input class="greyInput" @focus="pointing= 3" placeholder="XXXX(不放建議)" type="text" />
      </div>
    </div>
    <div class="threeColumn">
      <div class="textContainer">
        <img v-if="pointing === 4" src="~@/assets/img/planList/point.png" />
        <input class="greyInput" @focus="pointing= 4"  placeholder="坡地災害風險" type="text" />
      </div>
      <div class="textContainer">
        <img v-if="pointing === 5" src="~@/assets/img/planList/point.png" />
        <input class="greyInput" @focus="pointing= 5"  placeholder="高" type="text" />
      </div>
      <div class="textContainer">
        <img v-if="pointing === 6" src="~@/assets/img/planList/point.png" />
        <input class="greyInput" @focus="pointing= 6"  placeholder="XXXX(不放建議)" type="text" />
      </div>
    </div>
    <div class="threeColumn">
    <div class="textContainer">
        <img v-if="pointing === 7" src="~@/assets/img/planList/point.png" />
        <input class="greyInput" @focus="pointing= 4"  placeholder="水災風險" type="text" />
      </div>
      <div class="textContainer">
        <img v-if="pointing === 8" src="~@/assets/img/planList/point.png" />
        <input class="greyInput" @focus="pointing= 5"  placeholder="高" type="text" />
      </div>
      <div class="textContainer">
        <img v-if="pointing === 9" src="~@/assets/img/planList/point.png" />
        <input class="greyInput" @focus="pointing= 6"  placeholder="XXXX(不放建議)" type="text" />
      </div>
    </div>
    <p style="text-align:right;color:#767676;">評估時間:108.08.03 15:05:20</p>
  </div>
</template> 
<script>
export default {
  data() {
    return {
      pointing:0
    };
  }
};
</script>
<style lang="scss" scoped>
  .planTopic .themeColor {
    margin: 23px 0;
  }
  input {
    width:100%;
  }
</style>