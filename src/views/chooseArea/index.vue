<template>
  <div>
    <m-choose-area @change="handleChange"></m-choose-area>
  </div>
</template>

<script lang="ts" setup>
// import mChooseArea from '../../components/chooseArea/src/index.vue'

type AreaProp = 'area' | 'city' | 'province'

export interface Area {
  AreaProp: {
    code: string
    name: string
  }
}

const handleChange = (item: Area) => {
  console.log(item)
}
</script>
