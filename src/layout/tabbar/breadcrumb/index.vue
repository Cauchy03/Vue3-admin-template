<template>
  <el-icon
    class="fold"
    style="margin-right: 10px; cursor: pointer"
    @click="changeIcon"
  >
    <component :is="!layoutStore.fold ? 'Fold' : 'Expand'"></component>
  </el-icon>
  <el-breadcrumb separator="/">
    <el-breadcrumb-item
      :to="{ path: item.path }"
      v-for="(item, index) in route.matched"
      :key="index"
      v-show="item.meta.title"
    >
      {{ item.meta.title }}
    </el-breadcrumb-item>
  </el-breadcrumb>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router'
import useLayoutSettingStore from '@/store/modules/setting'
let layoutStore = useLayoutSettingStore()
const changeIcon = function () {
  layoutStore.fold = !layoutStore.fold
}

let route = useRoute()
</script>

<style scoped lang="scss">
.fold {
  width: 60px;
  height: 100%;

  &:hover {
    background: rgba(0, 0, 0, 0.025);
  }
}
</style>
