<script lang="ts" setup>
import { routes } from '@/router';
import { useRouter, useRoute } from 'vue-router';
import Side from './Side.vue';
import { computed } from 'vue';
import { useStore } from 'vuex';
const $router = useRouter();
const $route = useRoute();
const $store = useStore();
const openSidebar = computed(() => $store.state.setting.openSidebar);
const currentPath = computed(() => $route.path);

// 切换路由
const selectMenu = (path) => {
  $router.push(path);
};
</script>

<template>
  <transition name="width">
    <div
      v-if="openSidebar"
      class="sidebar"
    >
      <el-menu
        mode="vertical"
        :default-active="currentPath"
        @select="selectMenu"
      >
        <Side
          v-for="(item, index) in routes"
          :key="index"
          :menu="item"
        />
      </el-menu>
    </div>
  </transition>
</template>

<style lang="scss" scoped>
.sidebar {
  width: 230px;
  height: auto;
  background: #fff;
}
</style>