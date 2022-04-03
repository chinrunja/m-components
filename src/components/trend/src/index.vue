<template>
  <div class="trend">
    <div class="text">{{ text }}</div>
    <div class="icon">
      <el-icon-arrowup :style="{ color: upIconColor }" v-if="type === 'up'" />
      <el-icon-arrowdown :style="{ color: downIconColor }" v-else />
    </div>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps({
  type: {
    type: String,
    default: 'up',
  },
  text: {
    type: String,
    default: '文字',
  },
  upIconColor: {
    type: String,
    default: 'red',
  },
  downIconColor: {
    type: String,
    default: 'green',
  },
})
</script>

<style lang="scss" scoped>
.trend {
  display: flex;
  align-items: center;
  margin-right: 10px;
  .text {
    margin-right: 8px;
  }
  .icon {
    margin-top: 6px;
  }
}
</style>
