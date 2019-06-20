
<template>
  <div>
    <div :class="styles.title">{{msg}}</div>
    <slot></slot>
    <input placeholder="text" @input="input" v-model="model.input">
    <select name="s" id="s" v-model="model.select" @change="changeInput">
      <option value="1">1-a</option>
      <option value="2">2-a</option>
      <option value="3">3-a</option>
    </select>
    <div>wwwww{{model}}</div>
  </div>
</template>

<script>
import styles from "./style.less";

export default {
  name: "Home",
  props: {
    msg: String
  },
  data: () => ({
    styles,
    model: {
      input: "",
      select: "1"
    }
  }),
  methods: {
    changeInput(arg) {
      console.log(arg, "change");
    },
    input(arg) {
      console.log(arg);
    }
  }
};
</script>


