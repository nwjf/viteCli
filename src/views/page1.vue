<template>
  <div style="height: 300px;border: 1px solid #ccc;">
    <button @click="$router.push('/page1');">page1</button>
    <button @click="$router.push('/page2');">page2</button>
    <el-button>Default</el-button>
    <el-button type="primary">Primary</el-button>
    <el-button type="success">Success</el-button>
    <el-button type="info">Info</el-button>
    <el-button type="warning">Warning</el-button>
    <el-button type="danger">Danger</el-button>
    <el-button>中文</el-button>
  </div>
</template>