<template>
  <div class="field">
    <div class="label">{{label}}:</div>
    <div class="wrapper">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "Field",
  props: {
    label: {
      type: String,
      default: ""
    }
  }
};
</script>

<style lang="less" scoped>
.field {
  display: flex;
  margin-bottom: 24px;
  .label {
    flex: 1;
  }
  .wrapper {
    flex: 2;
  }
}
</style>
