<script lang="ts" setup>
const year = new Date().getFullYear();
</script>

<template>
  <div class="footer">
    腾讯音乐娱乐集团 | 技术支持: TME企业IT<br>
    Copyright © 2016 - {{ year }} TME. All Rights Reserved.
  </div>
</template>

<style lang="scss" scoped>
.footer {
  width: 100%;
  height: 86px;
  background: #fff;
  text-align: center;
  font-size: 12px;
  color: #8A9099;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 24px;
}
</style>