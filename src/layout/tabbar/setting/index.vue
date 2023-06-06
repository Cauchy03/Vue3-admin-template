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
  <img
    :src="userStore.avatar"
    style="width: 24px; height: 24px; margin: 0px 10px; border-radius: 50%"
  />
  <!-- 下拉菜单 -->
  <el-dropdown style="margin-left: 10px">
    <span class="el-dropdown-link">
      {{ userStore.username }}
      <el-icon class="el-icon--right">
        <arrow-down />
      </el-icon>
    </span>
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item @click="logout">退出登录</el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
</template>

<script setup lang="ts">
import { nextTick } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import useLayoutSettingStore from '@/store/modules/setting'
import useUserStore from '@/store/modules/user'
import { ElMessage } from 'element-plus'
let userStore = useUserStore()
let layoutStore = useLayoutSettingStore()
let router = useRouter()
let route = useRoute()
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
// 退出
const logout = () => {
  userStore.userLogout().then(() => {
    router.push({ path: '/login', query: { redirect: route.path } })
    ElMessage({
      message: '退出成功',
      type: 'success'
    })
  })
}
</script>

<style scoped></style>
