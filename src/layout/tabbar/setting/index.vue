<template>
  <el-button
    size="small"
    icon="Refresh"
    circle
    @click="updateRefresh"
  ></el-button>
  <el-button
    size="small"
    icon="FullScreen"
    circle
    @click="fullScreen"
  ></el-button>
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
// 刷新
const updateRefresh = () => {
  layoutStore.refresh = true
  nextTick(() => {
    layoutStore.refresh = false
  })
}
// 全屏
const fullScreen = () => {
  // DOM对象的一个属性 用来判断当前是否为全屏模式
  let full = document.fullscreenElement
  if (!full) {
    // 文档根节点的requestFullscreen方法直接实现全屏
    document.documentElement.requestFullscreen()
  } else {
    // 退出全屏
    document.exitFullscreen()
  }
}
</script>

<style scoped></style>
