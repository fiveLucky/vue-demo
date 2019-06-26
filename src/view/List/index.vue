
<template>
  <div :class="styles.container">
    <div>container</div>
    <div :class="styles.parent">
      <div :class="styles.body1">body1</div>
      <div :class="styles.body2">body2</div>
    </div>
  </div>
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


