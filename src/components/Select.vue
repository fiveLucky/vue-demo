<template>
  <div class="select" @click="toggle">
    <div class="input">{{label}}</div>
    <ul class="drop-container" :class="actived ? 'show' : 'hide'">
      <li class="drop-item"  v-for="(item, index) in dataSource" :key="index" @click="select(item)" 
      :class="{'actived' : (item.value === curValue) }">
        <slot :item="item">{{ item.label || '' }}</slot>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Select",
  props: {
    value: {
      type: String,
      default: ""
    },
    showLabel: {
      type: Function
    },
    dataSource: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      curValue: "",
      actived: false
    };
  },
  computed: {
    inputValue() {
      return this.value;
    },
    label() {
      if (typeof this.showLabel === "function") {
        return this.showLabel(this.curValue);
      }
      return (this.dataSource.find(i => i.value === this.curValue) || {}).label;
    }
  },
  methods: {
    toggle() {
      this.actived = !this.actived;
    },
    select(item) {
      this.$emit("change", item.value);
      this.curValue = item.value;
    }
  },
  created() {
    this.curValue = this.value;
  }
};
</script>

<style lang="less" scoped>
.select {
  position: relative;
  .input{
    width: 100%;
    height: 42px;
    border: 1px solid #ccc;
    border-radius: 4px;
  }
  .drop-container{
    position: absolute;
    top: -100px;
    left: 0;
    width: 100%;
    background: #ccc;
    border-radius: 4px;
    margin: 0;
    padding: 0;
    height: 0;
    transition: all 1s;

.actived{
      background: blue
    }
    .drop-item{
      &:hover{
        .actived;
      }
    }
    
  }
  .show{
    display: block;
    top: 48px;
    // transition: all 1s;

  }
  .hide{
    display: none;
        top: -100px;

    // transition: all 1s;

  }
}
</style>
