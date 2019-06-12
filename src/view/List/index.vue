
<template>
  <div :class="styles.title">{{msg}}</div>
</template>

<script>
import styles from "./style.css";

export default {
  name: "List",
  props: {
    msg: String
  },
  data: () => ({ styles })
};
</script>


