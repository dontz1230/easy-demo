<template>
  <div class="nav">
    <div class="navContainer">
      <img src="../assets/img/logo.svg" alt />
      <div class="nav__links">
        <router-link to="/">縣市政府防災</router-link>
        <router-link to="/">長照機構防災</router-link>
        <router-link class="login" to="/" style="font-size:14px;">登入</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.login {
  text-align: center;
  border: 1px solid #fff;
  border-radius: 3px;
  -webkit-transition: all 0.3s ease;
  transition: all 0.3s ease;
  color: #fff;
  background: transparent;
  width: 54px;
  height: 34px;
  font-size: 14px;
  line-height: 34px;
  margin: 0 !important;
}

.nav__links {
  align-items: center;
  a {
    font-size: 16px;
  }
}

.navContainer {
}
</style>
