
<template>
  <div>
    <div :class="styles.title">{{msg}}</div>
    <slot></slot>
    <Form :model="model" :clear="clear" :save="save">
      <Field label="姓名">
        <Input v-model="model.name" :validator="validator"/>
      </Field>
      <Field label="年龄">
        <Input v-model="model.age" :validator="validator"/>
      </Field>
    </Form>
    <div>wwwww{{model}}</div>
  </div>
</template>

<script>
import styles from "./style.less";

import Input from "../../components/Input";
import Form from "../../components/Form";
import Field from "../../components/Field";

export default {
  name: "Home",
  components: {
    Input,
    Form,
    Field
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
    }
  }
};
</script>


