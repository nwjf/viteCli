<script lang="ts" setup>
import { computed } from 'vue';
import { useStore } from 'vuex';
import Logo from './Logo.vue';
import User from './User.vue';
const $store = useStore();
const openSidebar = computed(() => $store.state.setting.openSidebar);
// 展开收起
const openSidebarEvent = () => {
  $store.dispatch('setting/setOpenSidebar', !openSidebar.value);
};
</script>

<template>
  <div class="navbar">
    <div class="navbar-content">
      <div class="navbar-logo">
        <Logo />
        <el-icon class="navbar-logo-icon" @click="openSidebarEvent">
          <fold v-if="openSidebar" />
          <expand v-else />
        </el-icon>
      </div>
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
    .navbar-logo {
      height: 100%;
      display: flex;
      align-items: center;
      .navbar-logo-icon {
        cursor: pointer;
        margin-left: 10px;
      }
    }
  }
}
</style>
