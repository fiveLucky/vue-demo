<template>
  <div class="form">
    <slot></slot>
    <button @click="save">保存</button>
    <button @click="clear">清空</button>
  </div>
</template>

<script>
export default {
  name: "Form",
  props: {
    model: {
      type: Object,
      default: {}
    }
  },
  data() {
    return {
      validators: []
    };
  },
  methods: {
    validate(cb) {},
    save() {
      console.log(this.validators);
      this.validators.forEach(va => {
        va.validator(this.model[va.field]);
      });
    },
    clear() {
      this.model = {};
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
