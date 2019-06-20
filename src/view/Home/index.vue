
<template>
  <div>
    <div :class="styles.title">{{msg}}</div>
    <slot></slot>
    <Form :model="model">
      <Field label="姓名">
        <Input v-model="model.name" field="name" :validator="validator"/>
      </Field>
      <Field label="年龄">
        <Input v-model="model.age" field="age" :validator="validator"/>
      </Field>
    </Form>
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
    changeInput(arg) {
      console.log(arg, "change");
    },
    input(arg) {
      console.log(arg);
    },
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


