<script lang="ts" setup>
import { routes } from '@/router';
import Side from './Side.vue';
console.log(routes);
</script>

<template>
  <div class="sidebar">
    <el-menu
      mode="vertical">
      <Side
        v-for="(item, index) in routes"
        :key="index"
        :menu="item"/>
    </el-menu>
  </div>
</template>

<style lang="scss" scoped>
.sidebar {
  width: 230px;
  height: auto;
  background: #fff;
}
</style>