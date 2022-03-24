<script setup lang="ts">
</script>

<template>
  <div>
    <button @click="$router.push('/page1');">page1</button>
    <button @click="$router.push('/page2');">page2</button>
    <el-button>button</el-button>
    <router-view />
  </div>
</template>

<style lang="scss">
</style>
