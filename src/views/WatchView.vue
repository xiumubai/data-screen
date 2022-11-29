<template>
  <div>
    <p>1、监听单个ref的值：3s后变为->{{ count }}</p>
    <p>
      2、监听多个ref的值：3s后变为count2->{{ count2 }} count3-> {{ count3 }}
    </p>
    <p>3、监听reactive对象的值：3s后变为age->{{ info.age }}</p>
    <p>4、监听单个reactive对象：3s后变为animalName->{{ animal.name }}</p>
    <p>5、监听reactive引用对象：3s后变为userName->{{ user.mes.name }}</p>
  </div>
</template>

<script setup lang="ts">
import { ref, watch, reactive } from "vue";
const count = ref(0);
const count2 = ref(1);
const count3 = ref(2);
const info = reactive({
  age: 18,
});
const animal = reactive({
  name: "dog",
});
const user = reactive({
  mes: {
    name: "xiumubai",
  },
});

setTimeout(() => {
  count.value = 1;
}, 2000);

setTimeout(() => {
  count2.value = 2;
  count3.value = 3;
}, 3000);

setTimeout(() => {
  info.age = 19;
}, 3000);

setTimeout(() => {
  animal.name = "cat";
}, 3000);

setTimeout(() => {
  user.mes.name = "janney";
}, 3000);

// 1.监听单个ref
watch(count, (newV, oldV) => {
  console.log("监听单个ref", newV, oldV);
});

// 2.监听多个ref
watch([count2, count3], (newV, oldV) => {
  console.log("监听多个ref", newV, oldV);
});

// 3.监听reactive对象
// 当 watch 监听的是一个响应式对象时，会隐式地创建一个深层侦听器，
// 即该响应式对象里面的任何属性发生变化，都会触发监听函数中的回调函数。
// 即当 watch 监听的是一个响应式对象时，默认开启 deep：true
watch(info, (newV, oldV) => {
  console.log("监听reactive对象", newV, oldV);
});

// 4.监听单个响应式对象

// 此写法为错误的写法
// watch(animal.name, (newV, oldV) => {
//   console.log(newV, oldV)
// })

watch(
  () => animal.name,
  (newV, oldV) => {
    console.log("监听单个响应式对象", newV, oldV);
  }
);

// 5.监听引用对象
watch(
  () => user.mes,
  (newV, oldV) => {
    console.log("监听引用对象", newV, oldV);
  },
  {
    deep: true,
  }
);
</script>
