<template>
  <div class="form">
    <slot></slot>
    <button @click="onSave">保存</button>
    <button @click="clear">清空</button>
  </div>
</template>

<script>
const noop = () => {};
export default {
  name: "Form",
  props: {
    clear: {
      type: Function,
      default: noop
    },
    save: {
      type: Function,
      default: noop
    }
  },
  data() {
    return {
      validators: []
    };
  },
  methods: {
    validate(cb = () => {}) {
      Promise.all(this.validators.map(va => va())).then(messages => {
        if (messages.every(msg => msg === undefined)) {
          cb();
        }
      });
    },
    onSave() {
      this.save();
      this.validate();
    }
  },
  mounted() {
    this.$bus.$emit("inject-validator", this.validators);
  }
};
</script>

<style lang="less" scoped>
.form {
  border: 1px solid #666666;
  border-radius: 6px;
  width: 500px;
  padding: 20px;
}
</style>
