<template>
  <div class="input">
    <input class="input-normal" :class="{'input-error':message }" @input="input" :value="value">
    <div class="error-message" v-show="!!message">
      <span>{{message}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "Input",
  model: {
    prop: "value",
    event: "input"
  },
  props: {
    validator: {
      type: Function,
      default: () => {}
    },
    field: String
  },
  data() {
    return {
      value: "",
      message: ""
    };
  },
  methods: {
    input(e) {
      const value = e.target.value;
      this.value = value;
      this.$emit("input", value);
      this.validatorInit(value);
    },
    validatorInit(value) {
      this.validator(value, message => {
        this.message = message;
      });
    }
  },
  mounted() {
    this.$bus.$on("inject-validator", validators => {
      validators.push({
        field: this.field,
        validator: this.validatorInit
      });
    });
  }
};
</script>

<style lang="less" scoped>
.input {
  position: relative;
  .input-normal {
    height: 24px;
    border-radius: 4px;
    outline: none;
    padding: 0px 4px;
    border: 1px solid #ccc;
    width: 100%;
  }
  .input-error {
    border: 1px solid red;
  }
  .error-message {
    position: absolute;
    bottom: -20px;
    left: 0;
    font-size: 12px;
    color: red;
  }
}
</style>
