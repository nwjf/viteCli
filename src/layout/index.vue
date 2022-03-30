<script lang="ts" setup>
import Navbar from './navbar/index.vue';
import Sidebar from './sidebar/index.vue';
import Footer from './Footer.vue';
</script>

<template>
  <div class="layout">
    <Navbar />
    <div class="layout-content">
      <Sidebar />
      <div class="content">
        <!-- <slot /> -->
        <router-view />
        <Footer />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.layout {
  .layout-content {
    display: flex;
    min-height: calc(100vh - 60px);
    margin-top: 60px;
    .content {
      flex: 1;
      padding: 24px;
    }
  }
}
</style>