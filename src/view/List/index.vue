
<template>
  <div :class="styles.title">{{msg}}</div>
</template>

<script>
import styles from "./style.less";

export default {
  name: "List",
  props: {
    msg: String
  },
  data: () => ({ styles })
};
</script>


