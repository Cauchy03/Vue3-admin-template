<template>
  <div class="layout_container">
    <!-- 左侧菜单 -->
    <div
      class="layout_slider"
      :class="{ fold: layoutStore.fold ? true : false }"
    >
      <Logo class="logo" />
      <el-scrollbar class="scrollbar">
        <!-- 菜单组件-->
        <el-menu
          background-color="#304156"
          text-color="white"
          active-text-color="yellowgreen"
          :default-active="route.path"
          :collapse="layoutStore.fold"
        >
          <Menu :menuList="userStore.menuRoutes" />
        </el-menu>
      </el-scrollbar>
    </div>

    <!-- 顶部导航 -->
    <div
      class="layout_tabbar"
      :class="{ fold: layoutStore.fold ? true : false }"
    >
      <Tabber />
    </div>
    <!-- 内容展示区域 -->
    <div class="layout_main" :class="{ fold: layoutStore.fold ? true : false }">
      <Main />
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import { useRoute } from 'vue-router'
import Logo from './logo/index.vue'
import Menu from './menu/index.vue'
import Tabber from './tabbar/index.vue'
import Main from './main/index.vue'
import useUerStore from '@/store/modules/user'

import useLayoutSettingStore from '@/store/modules/setting'

let userStore = useUerStore()
let route = useRoute()
let layoutStore = useLayoutSettingStore()

// 挂载获取用户信息
onMounted(() => {
  userStore.userInfo()
})
</script>

<style scoped lang="scss">
.layout_container {
  width: 100%;
  height: 100vh;

  .layout_slider {
    color: white;
    width: $base-menu-width;
    height: 100vh;
    background: $base-menu-background;
    transition: all 0.3s;

    .logo {
      background: $base-menu-logo-background;
    }

    .scrollbar {
      width: 100%;
      height: calc(100vh - $base-menu-logo-height);

      .el-menu {
        border-right: none;
      }
    }

    &.fold {
      width: $base-menu-min-width;
    }
  }

  .layout_tabbar {
    position: fixed;
    width: calc(100% - $base-menu-width);
    height: $base-tabbar-height;
    top: 0px;
    left: $base-menu-width;
    transition: all 0.3s;

    &.fold {
      width: calc(100vw - $base-menu-min-width);
      left: $base-menu-min-width;
    }
  }

  .layout_main {
    position: absolute;
    width: calc(100% - $base-menu-width);
    height: calc(100vh - $base-tabbar-height);
    left: $base-menu-width;
    top: $base-tabbar-height;
    padding: 20px;
    overflow: auto;
    transition: all 0.3s;

    &.fold {
      width: calc(100vw - $base-menu-min-width);
      left: $base-menu-min-width;
    }
  }
}
</style>
