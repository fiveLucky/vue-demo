
<template>
  <div>
    <div :class="styles.title">{{msg}}</div>
    <slot></slot>
  </div>
</template>

<script>
import styles from "./style.less";

export default {
  name: "Home",
  props: {
    msg: String
  },
  data: () => ({ styles })
};
</script>


