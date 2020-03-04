
<template>
  <div>
    <div :class="styles.title">{{msg}}</div>
    <slot></slot>
    <Form :clear="clear" :save="save">
      <Field label="姓名">
        <Input v-model="model.name" :validator="validator" />
      </Field>
      <Field label="年龄">
        <Input v-model="model.age" :validator="validator" />
      </Field>
    </Form>
    <div>wwwww{{model}}</div>
    <div :style="{width: '200px'}">
      <Select :dataSource="peoples" v-slot="{item}">
        <div>{{item.value}}</div>
      </Select>
    </div>
  </div>
</template>

<script>
import styles from "./style.less";
import { mapActions } from "vuex";

import Input from "../../components/Input.vue";
import Form from "../../components/Form.vue";
import Field from "../../components/Field.vue";
import Select from "../../components/Select.vue";

export default {
  name: "Home",
  components: {
    Input,
    Form,
    Field,
    Select
  },
  props: {
    msg: String
  },
  data: () => ({
    styles,
    model: {
      name: "",
      age: "",
      select: "1"
    }
  }),
  methods: {
    clear() {
      this.model = {};
    },
    save() {},
    validator(value, cb) {
      if (value !== "卢本伟很帅") {
        cb("请输入卢本伟很帅");
      } else {
        cb();
      }
    },
    ...mapActions(["getPeoples"])
  },
  created() {
    this.getPeoples();
  },
  computed: {
    peoples() {
      return this.$store.state.peoples;
    }
  }
};
</script>


