<template>
  <div>
    <h3>我是parent组件</h3>
    <p>接收到的Child传递的数据: {{ age }}</p>
    <button @click="handleGetCount">获取child中的属性和方法</button>
    <p>来自Child的属性count的值：{{ childRef?.count }}</p>
    <hr />
    <!-- v-model:modelValue简写为v-model -->
    <Child
      ref="childRef"
      name="janney"
      @handleEmit="handleEmit"
      v-model="msg"
      v-model:title="title"
    />
  </div>
</template>

<script setup lang="ts">
import { ref, provide } from "vue";
import Child from "./Child.vue";
const age = ref(18);
const sex = ref("男");
const msg = ref("我是父组件传过来的msg");
const title = ref("我是父组件传过来的title");
const handleEmit = (value: number) => {
  age.value = value;
};
const childRef = ref<InstanceType<typeof Child>>();
const handleGetCount = () => {
  childRef.value?.handleChangeCount();
  console.log(childRef.value?.count);
};
provide("sex", sex);
</script>
