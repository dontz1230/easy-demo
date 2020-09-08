<template>
  <div class="plan-section plan-section-three-four">
    <TheModal @closeModal="closeModal" v-if="modal">
      <template #header>新增聯絡資訊</template>
      <div class="planTitle">
        <div class="planTitle__text">類別</div>
        <div
          class="planTitle__redIcon"
          data-red="可依據外援單位的功能進行分類，例如：通報單位、救助單位、醫療單位、維生管線修復單位等，以便災時查找。"
        >
          <i class="fas fa-question"></i>
        </div>
      </div>
      <textarea name id cols="30" rows="10"></textarea>

      <div class="planTitle">
        <div class="planTitle__text">單位名稱</div>
        <div class="planTitle__redIcon" data-red="建議填寫單位全名。">
          <i class="fas fa-question"></i>
        </div>
      </div>
      <textarea name id cols="30" rows="10"></textarea>

      <div class="planTitle">
        <div class="planTitle__text">聯絡人</div>
        <div class="planTitle__redIcon" data-red="記下單位窗口姓名，方便災時聯繫。">
          <i class="fas fa-question"></i>
        </div>
      </div>
      <textarea name id cols="30" rows="10"></textarea>

      <div class="planTitle">
        <div class="planTitle__text">電話或其他聯絡方式</div>
        <div class="planTitle__redIcon" data-red="除電話之外，若有傳真、line、e-mail等其他聯絡方式也一併填入。">
          <i class="fas fa-question"></i>
        </div>
      </div>
      <textarea name id cols="30" rows="10"></textarea>

      <div class="planTitle">
        <div class="planTitle__text">備註</div>
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
      <div class="themeColor">緊急聯絡網</div>
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
      <div class="planTitle__text inline">聯絡資料</div>
      <div class="addBtn" @click="modal = !modal">
        <i class="fa fa-plus"></i>
        新增聯絡資訊
      </div>
    </div>

    <table class="blueTable">
      <thead>
        <tr>
          <th style="width: 16%;">類別</th>
          <th style="width: 18%;">單位名稱</th>
          <th>聯絡人</th>
          <th style="width: 20%;">電話或其他聯絡方式</th>
          <th style="width: 18%;">備註</th>
          <th>修改</th>
          <th>刪除</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th style="width: 16%;">通報單位</th>
          <th style="width: 18%;">新北市社會局</th>
          <th>ＯＯＯ</th>
          <th style="width: 20%;">02-XXXXXX</th>
          <th style="width: 18%;">第一優先聯絡</th>
          <th class="underline">修改</th>
          <th class="underline">刪除</th>
        </tr>
        <tr>
          <th style="width: 16%;">通報單位</th>
          <th style="width: 18%;">新北市災害應變中心</th>
          <th>ＯＯＯ</th>
          <th style="width: 20%;">02-XXXXXX</th>
          <th style="width: 18%;">第一優先聯絡</th>
          <th class="underline">修改</th>
          <th class="underline">刪除</th>
        </tr>
        <tr>
          <th style="width: 16%;">救助單位</th>
          <th style="width: 18%;">新北市消防局健康分隊</th>
          <th>ＯＯＯ</th>
          <th style="width: 20%;">02-XXXXXX</th>
          <th style="width: 18%;">第一優先聯絡</th>
          <th class="underline">修改</th>
          <th class="underline">刪除</th>
        </tr>
        <tr>
          <th style="width: 16%;">救助單位</th>
          <th style="width: 18%;">新北市警察局健康分隊</th>
          <th>ＯＯＯ</th>
          <th style="width: 20%;">02-XXXXXX</th>
          <th style="width: 18%;"></th>
          <th class="underline">修改</th>
          <th class="underline">刪除</th>
        </tr>
        <tr>
          <th style="width: 16%;">救助單位</th>
          <th style="width: 18%;">健康區公所</th>
          <th>ＯＯＯ</th>
          <th style="width: 20%;">02-XXXXXX</th>
          <th style="width: 18%;"></th>
          <th class="underline">修改</th>
          <th class="underline">刪除</th>
        </tr>
        <tr>
          <th style="width: 16%;">醫療單位</th>
          <th style="width: 18%;">健康醫院</th>
          <th>ＯＯＯ</th>
          <th style="width: 20%;">02-XXXXXX</th>
          <th style="width: 18%;">特約醫院</th>
          <th class="underline">修改</th>
          <th class="underline">刪除</th>
        </tr>
        <tr>
          <th style="width: 16%;">醫療單位</th>
          <th style="width: 18%;">安心診所</th>
          <th>ＯＯＯ</th>
          <th style="width: 20%;">02-XXXXXX</th>
          <th style="width: 18%;"></th>
          <th class="underline">修改</th>
          <th class="underline">刪除</th>
        </tr>
        <tr>
          <th style="width: 16%;">撤離與安置單位</th>
          <th style="width: 18%;">真的快復康巴士公司</th>
          <th>ＯＯＯ</th>
          <th style="width: 20%;">02-XXXXXX</th>
          <th style="width: 18%;">第一優先聯絡撤離交通工具者</th>
          <th class="underline">修改</th>
          <th class="underline">刪除</th>
        </tr>
        <tr>
          <th style="width: 16%;">撤離與安置單位</th>
          <th style="width: 18%;">快速救護車</th>
          <th>ＯＯＯ</th>
          <th style="width: 20%;">02-XXXXXX</th>
          <th style="width: 18%;">民間救護車</th>
          <th class="underline">修改</th>
          <th class="underline">刪除</th>
        </tr>
        <tr>
          <th style="width: 16%;">維生管線修復單位</th>
          <th style="width: 18%;">自來水公司</th>
          <th>ＯＯＯ</th>
          <th style="width: 20%;">02-XXXXXX</th>
          <th style="width: 18%;"></th>
          <th class="underline">修改</th>
          <th class="underline">刪除</th>
        </tr>
        <tr>
          <th style="width: 16%;">維生管線修復單位</th>
          <th style="width: 18%;">電力公司</th>
          <th>ＯＯＯ</th>
          <th style="width: 20%;">02-XXXXXX</th>
          <th style="width: 18%;"></th>
          <th class="underline">修改</th>
          <th class="underline">刪除</th>
        </tr>
        <tr>
          <th style="width: 16%;">其他協力廠商</th>
          <th style="width: 18%;">安心洗衣公司</th>
          <th>ＯＯＯ</th>
          <th style="width: 20%;">02-XXXXXX</th>
          <th style="width: 18%;">洗衣設備公司</th>
          <th class="underline">修改</th>
          <th class="underline">刪除</th>
        </tr>
        <tr>
          <th style="width: 16%;">其他協力廠商</th>
          <th style="width: 18%;">效能機電</th>
          <th>ＯＯＯ</th>
          <th style="width: 20%;">02-XXXXXX</th>
          <th style="width: 18%;">發電機設備維護廠商</th>
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
      modal: false,
    };
  },
  methods: {
    closeModal() {
      this.modal = false;
    },
    showTemplate() {
      let routeData = this.$router.resolve({ name: "EmergencyTemplate" });
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
