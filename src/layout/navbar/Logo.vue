<script lang="ts" setup>
import { computed } from 'vue';
import { useStore } from 'vuex';
const $store = useStore();
const openSidebar = computed(() => $store.state.setting.openSidebar);
</script>

<template>
  <div class="logo">
    <img src="@/assets/logo.png" alt="">
    <div
      v-if="openSidebar"
      class="logo-name"
    >
      TME管理系统
    </div>
  </div>
</template>

<style lang="scss" scoped>
.logo {
  display: flex;
  align-items: center;
  img {
    height: 20px;
  }
  .logo-name {
    margin-left: 8px;
  }
}
</style>
