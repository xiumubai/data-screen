<template>
  <div>
    <p>ref响应式数据:{{ title }}</p>
    <p>
      toRef: 基于响应式对象上的一个属性，创建一个对应的 ref。这样创建的 ref
      与其源属性保持同步：改变源属性的值将更新 ref 的值，反之亦然。<br />
      如果原始对象是非响应式的,数据会变,但不会更新视图
    </p>
    <button @click="changeRef">改变值ref的值</button>
    |
    <button @click="changeObj">改变值obj的值</button>
    <p>toRef的值不变化-{{ state }}</p>
    <p>
      toRefs:相当于对对象内每个属性调用toRef，toRefs返回的对象内的属性使用时需要加.value,主要是方便我们解构使用
    </p>
    <p>name: {{ name }}, age: {{ age }}</p>
    <p>computed: {{ add }}</p>
  </div>
</template>

<script setup lang="ts">
import { ref, toRef, toRefs, reactive, computed } from "vue";
const title = ref<string>("ref");
const obj = {
  num: 18,
};
const person = reactive({
  name: "xiumubai",
  age: 18,
});

const { name, age } = toRefs(person);
console.log(name.value, age.value);

const state = toRef(obj, "num");
const changeRef = () => {
  state.value++;
  console.log("修改ref的值，obj的值同步更新", obj.num);
};
const changeObj = () => {
  obj.num++;
  console.log("修改obj的值，ref的值同步更新", state.value);
};

const count = ref(0);
const add = computed(() => count.value + 1);
</script>
