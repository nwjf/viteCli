<script lang="ts" setup>
</script>

<template>
  <div class="error">
    <div class="error-content">
      <div class="error-box">
        <img class="error-img" src="@/assets/error/4.png" alt="">
        <img class="error-img" src="@/assets/error/0.png" alt="">
        <img class="error-img" src="@/assets/error/4.png" alt="">
        <!--  -->
        <img class="error-cloud-1" src="@/assets/error/cloud_light.png" alt="">
        <img class="error-cloud-2" src="@/assets/error/cloud_large.png" alt="">
        <img class="error-cloud-3" src="@/assets/error/cloud_mini.png" alt="">
        <img class="error-cloud-button" src="@/assets/error/cloud_shadow.png" alt="">
      </div>
      <div class="error-text margin-t">
        <span class="error-msg">该页面不存在</span>
      </div>
      <div class="error-text margin-t">
        <span class="error-bank" @click="$router.go(-1)">返回上一页</span>
      </div>
    </div>
    <img class="error-footer-logo" src="@/assets/error/tme_logo.png" alt="">
  </div>
</template>

<style lang="scss" scoped>
.error {
  background: #fff;
  overflow: hidden;
  .error-content {
    .error-box {
      width: 25vw;
      height: 22vh;
      display: flex;
      align-items: center;
      margin: 30vh auto 0;
      position: relative;
      .error-img {
        width: 33.333%;
        position: relative;
        z-index: 2;
      }
      .error-cloud-1 {
        position: absolute;
        top: -40px;
        right: -30px;
      }
      .error-cloud-2 {
        position: absolute;
        top: -40px;
        right: -80px;
        animation: myfirst 2s infinite;
      }
      .error-cloud-3 {
        position: absolute;
        left: -40px;
        bottom: -0px;
        animation: myfirst 2s infinite;
      }
      .error-cloud-button {
        width: 100%;
        position: absolute;
        left: 0;
        bottom: 0;
        z-index: 1;
      }
    }
    .error-text {
      text-align: center;
      .error-msg {
        font-size: 2.6vh;
      }
      .error-bank {
        color: #1672fa;
        font-size: 1.6vh;
      }
    }
    .margin-t { margin-top: 5.4vh; }
  }
  .error-footer-logo {
    display: block;
    height: 2vh;
    margin: 6vh auto 2vh;
  }
  @keyframes myfirst{
    0% { transform: translateY(0%); }
    50% { transform: translateY(-30%); }
    100% { transform: translateY(0%); }
  }
}
</style>