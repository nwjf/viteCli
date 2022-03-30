<script lang="ts" setup>
import Logo from './Logo.vue';
import User from './User.vue';
</script>

<template>
  <div class="navbar">
    <div class="navbar-content">
      <Logo />
      <User />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.navbar {
  width: 100%;
  height: 60px;
  background: #fff;
  color: #2E3033;
  font-size: 20px;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 99;
  .navbar-content {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 24px;
  }
}
</style>
