<template>
  <div class="nav-header">
    <span @click="toggle">
      <el-icon-expand v-if="collapse" />
      <el-icon-fold v-else />
    </span>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps<{
  collapse: boolean
}>()

let emits = defineEmits(['update:collapse'])
const toggle = () => {
  emits('update:collapse', !props.collapse)
}
</script>

<style lang="scss" scoped>
.nav-header {
  height: 60px;
  padding: 0 20px;
  display: flex;
  align-items: center;
}
</style>
