<template>
  <div>
    <el-button>Default</el-button>
    <el-button type="primary">Primary</el-button>
    <el-button type="success">Success</el-button>
    <el-button type="info">Info</el-button>
    <el-button type="warning">Warning</el-button>
    <el-button type="danger">Danger</el-button>

    <el-button :icon="Search" circle />
    <el-button type="primary" :icon="Edit" circle />
    <el-button type="success" :icon="Check" circle />
    <el-button type="info" :icon="Message" circle />
    <el-button type="warning" :icon="Star" circle />
    <el-button type="danger" :icon="Delete" circle />
    <SvgIcon name="house"></SvgIcon>
    <Pagination></Pagination>
    <h1>qwqwe</h1>
  </div>
</template>

<script setup lang="ts">
import {
  Check,
  Delete,
  Edit,
  Message,
  Search,
  Star
} from '@element-plus/icons-vue'
</script>

<style scoped lang="scss">
h1 {
  color: $color;
}
</style>
