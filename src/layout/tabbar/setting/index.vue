<template>
  <el-button
    size="small"
    icon="Refresh"
    circle
    @click="updateRefresh"
  ></el-button>
  <el-button size="small" icon="FullScreen" circle></el-button>
  <el-button size="small" icon="setting" circle></el-button>
  <!-- 下拉菜单 -->
  <el-dropdown style="margin-left: 10px">
    <span class="el-dropdown-link">
      Cauchy
      <el-icon class="el-icon--right">
        <arrow-down />
      </el-icon>
    </span>
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item>退出登录</el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
</template>

<script setup lang="ts">
import { nextTick } from 'vue'
import useLayoutSettingStore from '@/store/modules/setting'
let layoutStore = useLayoutSettingStore()

const updateRefresh = () => {
  layoutStore.refresh = true
  nextTick(() => {
    layoutStore.refresh = false
  })
}
</script>

<style scoped></style>
