<template>
  <div class="plan-section plan-section-three-four">
    <TheModal @closeModal="closeModal" v-if="modal">
      <template #header>新增設備資訊</template>
      <div class="planTitle">
        <div class="planTitle__text">設備名稱</div>
        <div
          class="planTitle__redIcon"
          data-red="可依據外援單位的功能進行分類，例如：通報單位、救助單位、醫療單位、維生管線修復單位等，以便災時查找。"
        >
          <i class="fas fa-question"></i>
        </div>
      </div>
      <textarea name id cols="30" rows="10"></textarea>

      <div class="planTitle">
        <div class="planTitle__text">數量</div>
        <div class="planTitle__redIcon" data-red="建議填寫單位全名。">
          <i class="fas fa-question"></i>
        </div>
      </div>
      <textarea name id cols="30" rows="10"></textarea>

      <div class="planTitle">
        <div class="planTitle__text">放置地點</div>
        <div class="planTitle__redIcon" data-red="記下單位窗口姓名，方便災時聯繫。">
          <i class="fas fa-question"></i>
        </div>
      </div>
      <textarea name id cols="30" rows="10"></textarea>

      <div class="planTitle">
        <div class="planTitle__text">維護廠商名稱</div>
        <div class="planTitle__redIcon" data-red="除電話之外，若有傳真、line、e-mail等其他聯絡方式也一併填入。">
          <i class="fas fa-question"></i>
        </div>
      </div>
      <textarea name id cols="30" rows="10"></textarea>

      <div class="planTitle">
        <div class="planTitle__text">維護廠商聯絡方式</div>
        <div class="planTitle__redIcon" data-red="可填入外援單位在災時可提供之特殊協助，或是註明何者為第一優先聯絡對象。">
          <i class="fas fa-question"></i>
        </div>
      </div>
      <textarea name id cols="30" rows="10"></textarea>

      <div class="planTitle">
        <div class="planTitle__text">檢查日期</div>
        <div class="planTitle__redIcon" data-red="可填入外援單位在災時可提供之特殊協助，或是註明何者為第一優先聯絡對象。">
          <i class="fas fa-question"></i>
        </div>
      </div>
      <textarea name id cols="30" rows="10"></textarea>

      <template #footer>確定送出</template>
    </TheModal>
    <div class="planHeader">
      <div class="planHeader__title">附件</div>
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
      <div class="themeColor">災害應變設備</div>
      <div @click="showTemplate" class="templateBtn">
        <img src="~@/assets/img/planList/templateBtn.png" alt />
        <span>參考撰寫範本</span>
      </div>
      <div
        class="planTitle__redIcon"
        style="
    display: inline-block;
    text-align: center;
    line-height: 34px;
    font-size: 16px;"
        data-red="遇到大規模災害時，119可能無法撥通，且多數地方災害應變中心會優先處理社會福利機構、長照機構或特定需求機構之需求，機構人員務必掌握地方災害應變中心之聯絡方式。
平時和機構已建立合作關係之單位亦可列入，例如社會局處／衛生局處、鄉鎮公所、村里長、消防分隊、民間團體、復康巴士、醫院、水電公司、其他機構、協力廠商等。
須了解外援單位與機構間之關係、聯絡方式，以及可提供之協助。"
      >
        <i class="fas fa-question"></i>
      </div>
    </div>

    <div class="planJob">
      <div class="planTitle__text inline">災害應變設備清單</div>
      <div class="addBtn" @click="modal = !modal">
        <i class="fa fa-plus"></i>
        新增設備資訊
      </div>
    </div>

    <table class="blueTable">
      <thead>
        <tr>
          <th style="width: 15%;">設備名稱</th>
          <th style="width: 10%;">數量</th>
          <th style="width: 15%;">放置地點</th>
          <th style="width: 30%;">維護廠商名稱</th>
          <th>維護廠商聯絡方式</th>
          <th>檢查日期</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th style="width: 15%;">儲水槽</th>
          <th style="width: 10%;">1個</th>
          <th style="width: 15%;">機構頂樓天台</th>
          <th style="width: 20%;">
            泉源水塔
            <br />OOO
          </th>
          <th style="width: 20%;">02-XXXXXXXX</th>
          <th>2020.07.01</th>
        </tr>
        <tr>
          <th style="width: 15%;">發電機</th>
          <th style="width: 10%;">2台</th>
          <th style="width: 15%;">一樓交誼廳旁固定式1台、二樓倉庫移動式1台</th>
          <th style="width: 20%;">效能機電</th>
          <th style="width: 20%;">02-XXXXXXXX</th>
          <th>2020.06.30</th>
        </tr>
        <tr>
          <th style="width: 15%;">頭燈</th>
          <th style="width: 10%;">8個</th>
          <th style="width: 15%;">二樓倉庫</th>
          <th style="width: 20%;">
            安康輔具中心
            <br />OOO
          </th>
          <th style="width: 20%;">02-XXXXXXXX</th>
          <th>2020.07.01</th>
        </tr>
        <tr>
          <th style="width: 15%;">緩降機</th>
          <th style="width: 10%;">1台</th>
          <th style="width: 15%;">二樓陽台</th>
          <th style="width: 20%;">
            安康輔具中心
            <br />OOO
          </th>
          <th style="width: 20%;">02-XXXXXXXX</th>
          <th>2020.07.01</th>
        </tr>
        <tr>
          <th style="width: 15%;">樓梯升降椅</th>
          <th style="width: 10%;">1台</th>
          <th style="width: 15%;">樓梯間</th>
          <th style="width: 20%;">
            安康輔具中心
            <br />OOO
          </th>
          <th style="width: 20%;">02-XXXXXXXX</th>
          <th>2020.07.01</th>
        </tr>
        <tr>
          <th style="width: 15%;">可上下階梯之電動輪椅</th>
          <th style="width: 10%;">1台</th>
          <th style="width: 15%;">二樓倉庫</th>
          <th style="width: 20%;">
            安康輔具中心
            <br />OOO
          </th>
          <th style="width: 20%;">02-XXXXXXXX</th>
          <th>2020.07.01</th>
        </tr>
        <tr>
          <th style="width: 15%;">履帶式爬梯機</th>
          <th style="width: 10%;">1台</th>
          <th style="width: 15%;">二樓倉庫</th>
          <th style="width: 20%;">
            安康輔具中心
            <br />OOO
          </th>
          <th style="width: 20%;">02-XXXXXXXX</th>
          <th>2020.07.01</th>
        </tr>
        <tr>
          <th style="width: 15%;">抽痰機</th>
          <th style="width: 10%;">3台</th>
          <th style="width: 15%;">一樓院民房間</th>
          <th style="width: 20%;">
            心安醫療用品
            <br />OOO
          </th>
          <th style="width: 20%;">02-XXXXXXXX</th>
          <th>2020.07.07</th>
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
    };
  },
  methods: {
    closeModal() {
      this.modal = false;
    },
    showTemplate() {
      let routeData = this.$router.resolve({ name: "FacilityTemplate" });
      window.open(routeData.href, "_blank");
    },
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
  width: 100% !important;
}
</style>
