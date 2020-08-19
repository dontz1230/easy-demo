<template>
  <div class="plan-section plan-section-three-four">
    <div class="planHeader">
      <div class="planHeader__title">地震災害應變流程</div>
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
      <div class="themeColor">(一)地震災害應變流程</div>
      <div
        class="planTitle__redIcon"
        style="
    display: inline-block;
    text-align: center;
    line-height: 34px;
    font-size: 16px;"
        data-red="天然災害應變流程應考慮機構本身的地理環境、設備，以及人力等實際情況進行規劃。
可依據機構需求自行上傳流程圖，或是採用本系統提供的範本。
目前範本上為預先設定的應變步驟，實際的災害應變流程並非一成不變，機構人員要依照現場情況調整應變步驟。"
      >
        <i class="fas fa-question"></i>
      </div>
    </div>

    <div class="planJob">
      <div class="planTitle__text inline">應變工作小組檢核表</div>
      <div
        class="planTitle__redIcon"
        style="
    display: inline-block;
    text-align: center;
    line-height: 34px;
    font-size: 16px;"
        data-red="檢核表的主要作用在於協助機構人員檢查以下事項：
1. 災前：協助機構人員了解自己於應變各階段所需要進行的工作，避免工作過於集中於某些應變小組。
2. 災中應變：檢查應變過程中，是否有遺漏的重要事項。
此工作檢核表記載應變小組在各階段的主要工作，但實際應變時，指揮官可依各組別的工作量而調整工作內容。"
      >
        <i class="fas fa-question"></i>
      </div>
    </div>

    <table class="blueTable">
      <thead>
        <tr>
          <th style="width: 25%;">應變時序</th>
          <th style="width: 25%;">工作項目</th>
          <th>指揮官</th>
          <th>通報</th>
          <th>搶救</th>
          <th>救護</th>
          <th>避難引導</th>
          <th>安全防禦</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th style="width: 25%;">1a. 確保人員安全</th>
          <td style="width: 25%;">協助住民穩住重心</td>
          <td class="checkIcon">&#10003;</td>
          <td></td>
          <td></td>
          <td></td>
          <td class="checkIcon">&#10003;</td>
          <td class="checkIcon">&#10003;</td>
        </tr>
        <tr>
          <th style="width: 25%;">1a. 確保人員安全</th>
          <td style="width: 25%;">統計傷患、安排送醫</td>
          <td></td>
          <td></td>
          <td></td>
          <td class="checkIcon">&#10003;</td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <th style="width: 25%;">1b. 動員機構人員</th>
          <td style="width: 25%;">召回應變人員</td>
          <td></td>
          <td class="checkIcon">&#10003;</td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <th style="width: 25%;">1b. 動員機構人員</th>
          <td style="width: 25%;">指揮應變小組運作</td>
          <td class="checkIcon">&#10003;</td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <th style="width: 25%;">2. 收集資訊</th>
          <td style="width: 25%;">收集災害資訊</td>
          <td></td>
          <td class="checkIcon">&#10003;</td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <th style="width: 25%;">2. 收集資訊</th>
          <td style="width: 25%;">環視機構周邊設施</td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td class="checkIcon">&#10003;</td>
        </tr>
        <tr>
          <th style="width: 25%;">2. 收集資訊</th>
          <td style="width: 25%;">收集機構災情</td>
          <td></td>
          <td></td>
          <td></td>
          <td class="checkIcon">&#10003;</td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <th style="width: 25%;">2. 收集資訊</th>
          <td style="width: 25%;">盤點機構物資</td>
          <td></td>
          <td></td>
          <td class="checkIcon">&#10003;</td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <th style="width: 25%;">2. 收集資訊</th>
          <td style="width: 25%;">收集疏散避難資訊</td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td class="checkIcon">&#10003;</td>
          <td></td>
        </tr>
        <tr>
          <th style="width: 25%;">3. 判斷避難模式</th>
          <td style="width: 25%;">依現場情況決定避難模式</td>
          <td class="checkIcon">&#10003;</td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <th style="width: 25%;">3. 判斷避難模式</th>
          <td style="width: 25%;">通知機構內人員</td>
          <td></td>
          <td class="checkIcon">&#10003;</td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
};
</script>
<style lang="scss" scoped>
.planTopic {
  margin: 30px auto;
}

.planTitle__text {
  width: 200px;
}

.planJob {
  margin: 30px auto;
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
