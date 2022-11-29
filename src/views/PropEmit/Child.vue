<template>
  <div>
    <h3>我是child组件</h3>
    <p>接收到的父组件的name: {{ name }}</p>
    <button @click="handleChangeAge">修改父组件的值</button>
    <h3>绑定多个v-model</h3>
    <p>{{ modelValue }}, {{ title }}</p>
    <button @click="handleChangeModalValue">修改model的值</button>
    <hr />
    <Sub />
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import Sub from "./Sub.vue";

const count = ref(0);
// 设置属性默认值
withDefaults(
  defineProps<{
    name?: string;
    modelValue: string;
    title: string;
  }>(),
  {
    name: "xiumubai",
  }
);

const emits = defineEmits(["handleEmit", "update:modelValue", "update:title"]);
const handleChangeAge = () => {
  emits("handleEmit", 19);
};
const handleChangeCount = () => {
  count.value++;
};
const handleChangeModalValue = () => {
  emits("update:modelValue", "我变身为子组件传过来的msg");
  emits("update:title", "我变身为子组件传过来的title");
};
// 将方法、变量暴露给父组件使用，父组件可通过 ref API拿到子组件暴露的数据
defineExpose({
  count,
  handleChangeCount,
});
</script>
