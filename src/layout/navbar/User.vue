<script lang="ts" setup>
</script>

<template>
  <el-dropdown class="user">
    <div class="user-portrait">
      <img src="https://img2.kuwo.cn/star/starheads/500/6/44/516088623.jpg" alt="">
      <div class="user-name">未知用户</div>
    </div>
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item>退出登陆</el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
</template>

<style lang="scss" scoped>
.user {
  .user-portrait {
    display: flex;
    align-items: center;
    color: #2E3033;
    img {
      width: 36px;
      height: 36px;
      border-radius: 18px;
      border: 1px solid #F5F6F7;
      box-shadow: 0 2px 4px 0 rgba(207,216,230,0.14),
        0 4px 5px 0 rgba(207,216,230,0.12),
        0 1px 10px 0 rgba(207,216,230,0.2);
    }
    .user-name {
      margin-left: 8px;
    }
  }
}
</style>