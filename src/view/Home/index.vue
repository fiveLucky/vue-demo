
<template>
  <div :class="$styles.home">this is home</div>
</template>

<script>
export default {
  name: "home",
  props: {}
};
</script>

<style module>
@import url("./style.css");
.home {
  height: 100px;
  width: 100px;
  background: red;
}
</style>

