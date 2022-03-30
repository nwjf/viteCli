<script lang="ts" setup>
// import path from 'path';
import { computed } from 'vue';

const props = defineProps({
  menu: Object,
  parent: String,
});

const parentPath = computed(() => {
  return ((props.parent || '/') + '/' + props.menu.path).replace(/(\/\/\/)|(\/\/)/gi, '/');
});

// 获取子路由列表
const getChildrens = (router) => {
  const children = router.children || [];
  return children;
};

// 获取当前路由title
const getMenuName = (router) => {
  const meta = router.meta || {};
  const title = meta.title || router.name || router.path;
  return title;
};

</script>

<template>
  <div class="side">
    <el-sub-menu v-if="getChildrens(menu).length > 1">
      <template #title>
        {{ getMenuName(menu) }} {{ parentPath }}
      </template>
      <Side
        v-for="(item, index) in getChildrens(menu)"
        :key="index"
        :menu="item"
        :parent="parentPath" />
    </el-sub-menu>
    <el-menu-item
      v-else
      :index="parentPath">
      {{ getMenuName(menu) }} - {{ parentPath }}
    </el-menu-item>
  </div>
</template>