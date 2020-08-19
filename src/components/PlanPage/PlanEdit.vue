<template>
  <div class="plan-edit" style="width: 100%;">
    <div class="planHeader">
      <div class="planHeader__title">長照機構災管計畫 編輯封面</div>
      <div class="planHeader__option">
        <img src="~@/assets/img/planList/advice.png" alt />
        <span>撰寫原則或建議</span>
      </div>
      <div class="planHeader__option">
        <img src="~@/assets/img/planList/template.png" alt />
        <span>參考撰寫範本</span>
      </div>
    </div>
    <div class="planTitle">
      <div class="planTitle__text">機構名稱</div>
      <div class="planTitle__redIcon" data-red="思考災害管理計畫的意義與功能、對機構之效用。">
        <i class="fas fa-question"></i>
      </div>
    </div>
    <div class="textContainer">
      <img v-if="pointing === 1" src="~@/assets/img/planList/point.png" />
      <textarea
        @focus="pointing= 1"
        placeholder="平安是福長期照顧中心"
        @input="descInput(items[0],items[0].content);"
        v-model="items[0].content"
        class
        name
        id
        maxlength="60"
      ></textarea>
      <p style="text-align:right;margin:0;font-size:14px;">{{items[0].remnant}} / {{items[0].limit}}</p>
    </div>

    <div class="planTitle">
      <div class="planTitle__text">計劃名稱</div>
      <div class="planTitle__redIcon" data-red="顯示於封面主題第2列。">
        <i class="fas fa-question"></i>
      </div>
    </div>
    <div class="textContainer">
      <img v-if="pointing === 2" src="~@/assets/img/planList/point.png" />
      <textarea
        @focus="pointing= 2"
        placeholder="天然災害管理計畫"
        @input="descInput(items[1],items[1].content);"
        v-model="items[1].content"
        class
        name
        id
        maxlength="50"
      ></textarea>
      <p style="text-align:right;margin:0;font-size:14px;">{{items[1].remnant}} / {{items[1].limit}}</p>
    </div>

    <div class="planTitle">
      <div class="planTitle__text">撰寫者</div>
      <div class="planTitle__redIcon" data-red="列出本計畫撰寫人員資訊（職稱 姓名），建議撰寫過程可邀集相關成員（員工、住民）共同討論計畫內容。">
        <i class="fas fa-question"></i>
      </div>
    </div>
    <div class="textContainer">
      <img v-if="pointing === 3" src="~@/assets/img/planList/point.png" />
      <textarea
        @focus="pointing= 3"
        placeholder="行政管理師 郝峖權、護理長 顧德豪"
        @input="descInput(items[2],items[2].content);"
        v-model="items[2].content"
        class
        name
        id
        maxlength="50"
      ></textarea>
      <p style="text-align:right;margin:0;font-size:14px;">{{items[2].remnant}} / {{items[2].limit}}</p>
    </div>

    <div class="planTitle">
      <div class="planTitle__text">核定者</div>
      <div class="planTitle__redIcon" data-red="列出本計畫核定人員資訊（職稱 姓名），建議為機構內部最高主管">
        <i class="fas fa-question"></i>
      </div>
    </div>
    <div class="textContainer">
      <img v-if="pointing === 4" src="~@/assets/img/planList/point.png" />
      <textarea
        @focus="pointing= 4"
        placeholder="院長 曾安馨"
        @input="descInput(items[3],items[3].content);"
        v-model="items[3].content"
        class
        name
        id
        maxlength="50"
      ></textarea>
      <p style="text-align:right;margin:0;font-size:14px;">{{items[3].remnant}} / {{items[3].limit}}</p>
    </div>

    <div class="planTitle">
      <div class="planTitle__text">更新頻率</div>
      <div class="planTitle__redIcon" data-red="計畫務必定期更新，建議每一年更新一次，可視需求調整，須經常更新之資料項目可放於附件，以利抽換及彙整。">
        <i class="fas fa-question"></i>
      </div>
    </div>
    <div class="textContainer">
      <img v-if="pointing === 5" src="~@/assets/img/planList/point.png" />
      <textarea
        @focus="pointing= 5"
        placeholder="一年一次"
        @input="descInput(items[4],items[4].content);"
        v-model="items[4].content"
        class
        name
        id
        maxlength="50"
      ></textarea>
      <p style="text-align:right;margin:0;font-size:14px;">{{items[4].remnant}} / {{items[4].limit}}</p>
    </div>

    <div class="planTitle">
      <div class="planTitle__text">封面樣式</div>
      <div
        class="planTitle__redIcon"
        data-red="註明不同類型（如老人福利機構為長照、養護、失智，以及安養；身心障礙福利機構為成人日間照顧、全日型、早療日間照顧、夜間型住宿等）的核定床位數或是服務量。"
      >
        <i class="fas fa-question"></i>
      </div>
    </div>
    <div class="styleList">
      <div class="styleBlock">
        <div class="styleBlock__text">
          <input type="radio" name="style" id />
          <label for="style">樣式A</label>
        </div>
        <img src="~@/assets/img/planList/typea.jpg" alt />
        <div class="styleBlock__btn">
          <i class="fas fa-eye"></i>
          預覽
        </div>
      </div>
      <div class="styleBlock">
        <div class="styleBlock__text">
          <input type="radio" name="style" id />
          <label for="style">樣式B</label>
        </div>
        <img src="~@/assets/img/planList/typeb.jpg" alt />
        <div class="styleBlock__btn">
          <i class="fas fa-eye"></i>
          預覽
        </div>
      </div>
      <div class="styleList__right">
        <div class="styleBlock" style="float: left;">
          <div class="styleBlock__text">
            <input type="radio" name="style" id />
            <label for="style">我要自行上傳</label>
          </div>
          <img src="~@/assets/img/planList/typec.jpg" alt />
          <div class="styleBlock__btn">
            <i class="fas fa-eye"></i>
            預覽
          </div>
        </div>
        <div class="uploadBlock">
          <span for="upload">上傳圖片</span>

          <input type="file" id="upload" name="upload" accept="image/png, image/jpeg" />
          <div>目前已上傳的圖片：</div>
          <img src="~@/assets/img/planList/demo.jpg" alt />
          <div class="deleteBtn">刪除</div>
        </div>
      </div>
    </div>
  </div>
</template> 
<script>
export default {
  data() {
    return {
      pointing: 0,
      items: [
        { content: "", remnant: 60, limit: 60 },
        { content: "", remnant: 50, limit: 50 },
        { content: "", remnant: 50, limit: 50 },
        { content: "", remnant: 50, limit: 50 },
        { content: "", remnant: 50, limit: 50 },
      ],
    };
  },
  methods: {
    descInput(item, text) {
      var txtVal = text.length;
      item.remnant = item.limit - txtVal;
    },
  },
};
</script>
<style lang="scss" scoped>
.planTitle {
}

.styleList {
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 2fr;
  grid-gap: 20px;
  padding-bottom: 10px;
  &__left {
    display: flex;
    justify-content: space-between;
    border-right: 3px solid #d4d4d4;
    padding-right: 8px;
    margin-right: 8px;
  }
  &__right {
    box-shadow: 3px 3px 6px rgba(0, 0, 0, 0.1);
    & .styleBlock {
      box-shadow: none;
    }
  }
}

.styleBlock {
  display: flex;
  align-items: center;
  flex-direction: column;
  background: #fff;
  padding: 18px 36px;
  box-shadow: 3px 3px 6px rgba(0, 0, 0, 0.1);
  &__right {
    background: #fff;
  }
  &__text {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    width: 182px;
    margin-bottom: 2px;
    color: #777;
  }
  img {
    margin: 6px auto;
  }
  &__btn {
    border: 1px solid #d4d4d4;
    border-radius: 4px;
    width: 86px;
    height: 32px;
    line-height: 32px;
    font-size: 16px;
    padding: 0;
    text-align: center;
    margin-top: 12px;
    color: #777;
  }
}

input[type="radio"] {
  display: inline-block;
  left: unset;
  position: relative;
  width: 30px;
  height: 30px;
  border-radius: 50em;
  -webkit-appearance: auto;
  margin-right: 8px;
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 30px;
    height: 30px;
    border-radius: 50em;
    border: 4px solid #d4d4d4;
  }
}
input[type="radio"]:checked::before {
  background: #66cdb6;
}

.styleBlock__text input[type="radio"] {
  top: 0 !important;
}

.deleteBtn {
  width: 50px;
  height: 28px;
  line-height: 28px;
  text-align: center;
  background: #f45454;
  color: #fff;
  border-radius: 4px;
}

.uploadBlock {
  width: 50%;
  display: inline-block;
  color: #777;
  align-self: stretch;
  position: relative;
  padding: 30px 0 30px 30px;
  height: 100%;
  &::before {
    content: "";
    height: 348px;
    width: 6px;
    background: #eaeaea;
    position: absolute;
    top: 50%;
    left: 0;
    transform: translateY(-50%);
  }
}

.styleList__right {
  background: #fff;
}
</style>