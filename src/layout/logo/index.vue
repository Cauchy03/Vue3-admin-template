<template>
  <div class="logo" v-if="setting.logoHidden">
    <img :src="setting.logo" alt="" />
    <p v-if="!layoutStore.fold">{{ setting.title }}</p>
  </div>
</template>

<script setup lang="ts" name="Logo">
//引入设置标题与logo这配置文件
import setting from '@/setting'
import useLayoutSettingStore from '@/store/modules/setting'
let layoutStore = useLayoutSettingStore()
</script>
<style scoped lang="scss">
.logo {
  width: 100%;
  height: $base-menu-logo-height;
  color: white;
  display: flex;
  align-items: center;
  padding: 10px;
  img {
    width: 30px;
    height: 30px;
  }
  p {
    font-size: $base-logo-title-fontSize;
    margin-left: 10px;
    font-weight: 600;
  }
}
</style>
