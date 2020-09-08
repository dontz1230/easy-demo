<template>
  <div class="modalContainer">
    <div class="modal" :class="{'listCss' : list}">
      <header class="modalHeader">
        <slot name="header"></slot>
        <div style="float:right" @click="closeModal">
          <i class="fa fa-times"></i>
        </div>
      </header>
      <div class="content">
        <slot>默认值</slot>
      </div>
      <footer v-if="!test" class="modalFooter" @click="replace">
        <slot name="footer"></slot>
      </footer>
    </div>
    <div class="whitedrop"></div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      show: true,
    };
  },
  props: {
    test: {
      type: Boolean,
      default: false,
    },
    list: {
      type: Boolean,
      default: false,
    },
    // oneText:{

    // }
  },
  methods: {
    closeModal() {
      console.log("clicked");
      this.$emit("closeModal");
    },
    replace() {
      this.$emit("replace");
    },
  },
  mounted() {
    if (this.$route.path === "/planlist") {
      this.show = false;
    }
  },
};
</script>
<style lang="scss" scoped>
.modal {
  position: fixed;
  background: #fff;
  width: 916px;
  overflow-y: scroll;
  border-bottom: 10px solid #66cdb6;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  z-index: 99999;
  left: 50%;
  transform: translateX(-50%);
  position: fixed;
  top: 5%;
  max-height: 90%;
  height: auto;
  header {
    background: #66cdb6;
    color: #fff;
    padding: 12px 12px;
    text-align: left;
    font-size: 1.5rem;
  }

  .content {
    padding: 12px 54px;
  }

  footer {
    width: 40%;
    text-align: center;
    background: #66cdb6;
    margin: auto;
    padding: 12px;
    color: #fff;
    margin-bottom: 12px;
    margin-bottom: 36px;
    border-radius: 4px;
  }
}

.modal::-webkit-scrollbar {
  display: none;
}

.whitedrop {
  position: absolute;
  background: #fff;
  opacity: 0.8;
  top: 0;
  left: 0;
  z-index: 3;
  width: 100vw;
  height: 100vh;
}

.modalContainer {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 999999;
}

.listCss {
  top: 50% !important;
  transform: translate(-50%, -50%) !important;
  width: 525px !important;
}
</style>