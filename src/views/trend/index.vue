<template>
  <div>
    <div class="flex">
      <m-trend text="营业额"></m-trend>
      <m-trend text="销售额" type="down"></m-trend>
    </div>
    <div class="flex">
      <m-trend text="营业额" upIconColor="green"></m-trend>
      <m-trend text="销售额" type="down" downIconColor="red"></m-trend>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.flex {
  display: flex;
}
</style>
