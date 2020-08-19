<template>
  <div class="plan-catelogue">
    <div class="stepList">
      <div @click="changeStep(0)" class="stepList__dot pointer"></div>
      <div @click="changeStep(0)" class="stepList__index pointer">封面設定</div>
    </div>
    <div class="stepList" v-for="(item,index) in steps" :key="index">
      <div
        @click="changeStep(item.page)"
        class="stepList__dot pointer"
        :class="{'activeDot' : item.page === pageStep, 'ad1' : item.index ===  '三.' && pageStep ===3 ,'ad2' : item.index ===  '三.' && pageStep ===4,'ad3' : item.index ===  '三.' && pageStep ===5,'ad4' : item.index ===  '三.' && pageStep ===6,'ad5' : item.index ===  '四.' && pageStep ===8,'ad6' : item.index ===  '四.' && pageStep ===9,'ad7' : item.index ===  '四.' && pageStep ===10,'ad8' : item.index ===  '四.' && pageStep ===11,'ad9' : item.index ===  '五.' && pageStep ===15,'activeDot' : item.index ===  '七.' && pageStep ===20,'activeDot' : item.index ===  '八.' && pageStep ===21,'activeDot' : item.index ===  '六.', 'activeDot' : item.page === pageStep,'activeDot' : item.index ===  '七.' && pageStep ===19,'ad11' : item.index ===  '七.' && pageStep ===20,'ad12' : item.index ===  '八.' && pageStep ===21,'ad13' : item.index ===  '六.' &&pageStep ===18,'ad14' : item.index ===  '五.' &&pageStep ===12,'ad15' : item.index ===  '五.' &&pageStep ===13
        ,'ad16' : item.index ===  '三.' &&pageStep ===7, 'ad17' : item.index ===  '五.' &&pageStep === 14,'active-2' : item.page ===  2 &&pageStep ===2,'active-1' : item.index ===  '一.' &&pageStep ===1,'active-15' :item.index ==='六.' && pageStep === 17,'ac1' :item.index ==='七.' && pageStep === 18,'ac2' :item.index ==='七.' && pageStep === 19,'ac3' :item.index ==='七.' && pageStep === 20,'ac4' :item.index ==='九.' && pageStep === 22,'ac5' :item.index ==='九.' && pageStep === 23,'ac6' :item.index ==='九.' && pageStep === 24}"
      ></div>
      <div
        class="stepList__index pointer"
        :class="{'active' : pageStep===item.page && pageStep !==3}"
      >{{item.index}}</div>
      <div
        class="stepList__title"
        :class="{'active' : pageStep===item.page && pageStep !==3 &&pageStep!==8 &&pageStep!==9 &&pageStep!==10 &&pageStep!==11 &&pageStep!==12&&pageStep!==13&&pageStep!==14&&pageStep!==15}"
      >
        <span
          @click="changeStep(item.page)"
          class="pointer"
          :class="{'active' : pageStep===item.page && pageStep !==3}"
        >{{item.title}}</span>
        <div v-if="item.index === '三.'" class="subTitle pointer">
          <ul
            v-if="pageStep ===3 || pageStep ===4 || pageStep ===5  ||pageStep ===6 ||pageStep ===7 "
          >
            <li
              :class="{'active' : pageStep===3}"
              class="pointer"
              @click="changeStep(3)"
            >(一)天然災害風險檢查結果</li>
            <li :class="{'active' : pageStep===4}" class="pointer" @click="changeStep(4)">(二)受災經驗</li>
            <li
              :class="{'active' : pageStep===5}"
              class="pointer"
              @click="changeStep(5)"
            >(三)災害潛勢地圖分析</li>
            <li :class="{'active' : pageStep===6}" class="pointer" @click="changeStep(6)">(四)綜合研判結果</li>
            <li
              :class="{'active' : pageStep===7}"
              class="pointer infoSetting"
              @click="changeStep(7)"
            >應變人員資料設定</li>
          </ul>
        </div>
        <div v-if="item.index === '四.'" class="subTitle pointer">
          <ul v-if="pageStep===8 || pageStep===9|| pageStep ===10 || pageStep ===11">
            <li>
              <div :class="{'active' : pageStep===8 }" class="pointer">
                <span @click="changeStep(8)" class="pointer">(一)應變啟動與人員召回</span>
              </div>
              <div :class="{'active' : pageStep===9}" class="pointer">
                <span @click="changeStep(9)" class="pointer">(二)應變流程</span>
              </div>
              <div :class="{'active' :pageStep===10}" class="pointer">
                <span @click="changeStep(10)" class="pointer">(三)應變工作</span>
              </div>
              <div :class="{'active' : pageStep===11}" class="pointer">
                <span @click="changeStep(11)" class="pointer">(四)應變檢核表</span>
              </div>
              <!-- <ul
                v-if="pageStep===8 || pageStep===9 || pageStep ===10"
                class="subTitleContainer pointer"
              >
                <li @click="changeStep(8)" class="pointer">
                  <span v-if=" pageStep ===8" class="activeCircle"></span> 流程圖
                </li>
                <li @click="changeStep(9)" class="pointer">
                  <span v-if=" pageStep ===9" class="activeCircle"></span> 應變工作
                </li>
                <li @click="changeStep(10)" class="pointer">
                  <span v-if=" pageStep ===10" class="activeCircle"></span> 應變檢核表
                </li>
              </ul>-->
            </li>
            <!-- <li :class="{'active' : pageStep===11}" @click="changeStep(11)">(二)颱洪災害應變流程</li> -->
            <!-- <li>
              <div
                :class="{'active' : pageStep===12 ||pageStep===13||pageStep===14||pageStep===11}"
                class="pointer"
              >
                <span @click="changeStep(12)" class="pointer">(二)颱洪災害應變流程</span>
              </div>
              <ul
                v-if="pageStep === 12 || pageStep ===13 || pageStep === 14||pageStep===11"
                class="subTitleContainer pointer"
              >
                <li @click="changeStep(12)" class="pointer">
                  <span v-if=" pageStep ===12" class="activeCircle"></span> 流程圖
                </li>
                <li @click="changeStep(13)" class="pointer">
                  <span v-if=" pageStep ===13" class="activeCircle"></span> 應變工作
                </li>
                <li @click="changeStep(14)" class="pointer">
                  <span v-if=" pageStep ===14" class="activeCircle"></span> 應變檢核表
                </li>
              </ul>
            </li>-->
            <!-- <li :class="{'active' : pageStep===11}" @click="changeStep(11)">(二)颱洪災害應變流程</li> -->
          </ul>
        </div>

        <div v-if="item.index === '五.'" class="subTitle pointer">
          <ul v-if="pageStep ===15||pageStep===12 ||pageStep===13||pageStep===14">
            <li>
              <div :class="{'active' : pageStep===12 }" class="pointer">
                <span @click="changeStep(12)" class="pointer">(一)應變啟動與人員召回</span>
              </div>
              <div :class="{'active' : pageStep===13}" class="pointer">
                <span @click="changeStep(13)" class="pointer">(二)應變流程</span>
              </div>
              <div :class="{'active' :pageStep===14}" class="pointer">
                <span @click="changeStep(14)" class="pointer">(三)應變工作</span>
              </div>
              <div :class="{'active' : pageStep===15}" class="pointer">
                <span @click="changeStep(15)" class="pointer">(四)應變檢核表</span>
              </div>
            </li>
            <!-- <li :class="{'active' : pageStep===11}" @click="changeStep(11)">(二)颱洪災害應變流程</li> -->
          </ul>
        </div>

        <div v-if="item.index === '七.'" class="subTitle pointer">
          <ul
            v-if="pageStep===18|| pageStep===19 ||  pageStep ===20"
            class="subTitleContainer pointer"
          >
            <li @click="changeStep(18)" class="pointer">
              <span v-if=" pageStep ===18" class="activeCircle"></span> 就近避難
            </li>
            <li @click="changeStep(19)" class="pointer">
              <span v-if=" pageStep ===19" class="activeCircle"></span> 垂直避難
            </li>
            <li @click="changeStep(20)" class="pointer">
              <span v-if=" pageStep ===20" class="activeCircle"></span> 異地避難
            </li>
          </ul>
        </div>
        <!-- <div v-if="item.index === '八.'" class="subTitle pointer">
          <ul
            v-if="pageStep===21  || pageStep===23|| pageStep===22"
            class="subTitleContainer pointer"
          >
            <li @click="changeStep(21)" class="pointer">
              <span v-if=" pageStep ===21" class="activeCircle"></span> 教育訓練
            </li>
            <li @click="changeStep(22)" class="pointer">
              <span v-if=" pageStep ===22" class="activeCircle"></span> 災害應變設備
            </li>
            <li @click="changeStep(23)" class="pointer">
              <span v-if=" pageStep ===23" class="activeCircle"></span> 緊急聯絡網
            </li>
          </ul>
        </div> -->
        <div v-if="item.index === '九.'" class="subTitle pointer">
          <ul
            v-if="pageStep===24  || pageStep===23|| pageStep===22"
            class="subTitleContainer pointer"
          >
            <li @click="changeStep(22)" class="pointer">
              <span v-if=" pageStep ===22" class="activeCircle"></span> 物資清單
            </li>
            <li @click="changeStep(23)" class="pointer">
              <span v-if=" pageStep ===23" class="activeCircle"></span> 災害應變設備
            </li>
            <li @click="changeStep(24)" class="pointer">
              <span v-if=" pageStep ===24" class="activeCircle"></span> 緊急聯絡網
            </li>
          </ul>
          <ul
            v-if="pageStep===22|| pageStep===23 || pageStep===24"
            style="background:#FF8A8A;margin-top:4px;"
            class="subTitleContainer"
          >
            <li>
              <span></span> 加入其它附件，
            </li>
            <li>可自行利用匯出</li>
            <li>
              <span></span> 之Word檔新增
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    pageStep: {
      type: Number,
    },
  },
  data() {
    return {
      // pageStep: 1,
      steps: [
        {
          index: "一.",
          page: 1,
          title: "計畫說明",
        },
        {
          inde: "二.",
          page: 2,
          title: "二.機構基本資料",
        },
        {
          index: "三.",
          page: 3,
          title: "災害風險評估",
        },
        {
          index: "四.",
          page: 8,
          title: "地震災害應變流程",
        },
        {
          index: "五.",
          page: 12,
          title: "颱洪災害應變流程",
        },
        {
          index: "六.",
          page: 17,
          title: "停電應變流程",
        },
        {
          index: "七.",
          page: 18,
          title: "避難收容",
        },
        {
          index: "八.",
          page: 21,
          title: "教育訓練/演練",
        },
        {
          index: "九.",
          page: 22,
          title: "附件",
        },
      ],
    };
  },
  methods: {
    changeStep(pageStep) {
      if (pageStep !== 3 || pageStep !== 4) {
        this.$emit("changeStep", pageStep);
        this.pageStep = pageStep;
      }
    },
  },
};
</script>
<style lang="scss" scoped>
.subTitleContainer {
  background: #66cdb6;
  color: #fff;
  border-radius: 10px;
  padding: 10px;
}

.active {
  color: #66cdb6;
}

.activeCircle {
  border-radius: 100%;
  width: 20px;
  height: 20px;
  border: 4px solid #eaeaea;
  background: #66cdb6;
  display: inline-block;
  vertical-align: middle;
}

.stepList {
  &:before {
    content: "";
    position: absolute;
    left: 14px;
    width: 4px;
    background: #d6d6d6;
    height: calc(100% + 35px);
  }
  &:last-of-type {
    &:before {
      content: "";
      position: absolute;
      left: 14px;
      width: 0;
      height: 0 !important;
    }
  }
}

.infoSetting {
  background: #66cdb6;
  border-radius: 10px;
  color: #fff;
  text-align: center;
  padding: 5px 0;
}
</style>