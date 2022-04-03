<template>
  <el-button @click="handleClick" type="primary">
    <slot></slot>
  </el-button>
  <div class="m-choose-icon-dialog-body-height">
    <el-dialog :title="title" v-model="dialogVisible">
      <div class="container">
        <div
          v-for="(item, index) in Object.keys(ElIcons)"
          :key="index"
          @click="clickItem(item)"
          class="item"
        >
          <div class="icon">
            <component :is="`el-icon-${toLine(item)}`"></component>
          </div>
          <div class="text">
            {{ item }}
          </div>
        </div>
      </div>
    </el-dialog>
  </div>
</template>

<script lang="ts" setup>
import { watch, ref } from 'vue'

import * as ElIcons from '@element-plus/icons'
import { toLine } from '../../../utils'
import { useCopy } from '../../../hooks'

const props = defineProps<{
  title: string
  visible: boolean
}>()

const emits = defineEmits(['update:visible'])

const handleClick = () => {
  emits('update:visible', !props.visible)
}

const clickItem = (item: string) => {
  const text = `<el-icon-${toLine(item)} />`
  useCopy(text)
  emits('update:visible', !props.visible)
}

let dialogVisible = ref<boolean>(props.visible)

watch(
  () => props.visible,
  (val) => {
    // console.log(val)
    dialogVisible.value = val
    // emits('update:visible', val)
  }
)

watch(
  () => dialogVisible.value,
  (val) => {
    emits('update:visible', val)
  }
)
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
}
.item {
  display: flex;
  flex-direction: column;
  width: 20%;
  height: 50px;
  align-items: center;
  cursor: pointer;
  margin-bottom: 20px;
  &:hover {
    color: var(--el-color-primary);
  }
  .icon {
    padding: 8px;
    svg {
      width: 2rem;
      height: 2rem;
    }
  }
}
</style>
