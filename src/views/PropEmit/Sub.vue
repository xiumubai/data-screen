<template>
  <div>
    <h3>我是sub组件</h3>
    <p>我是child的子组件，我收到了来自Parent的属性sex：{{ sex}}</p>
    <button @click="handleChangeSex">改变性别</button>
  </div>
</template>

<script setup lang="ts">
import { inject, Ref, ref } from "vue";

const sex = inject<Ref<string>>("sex", ref("女"));

const handleChangeSex = () => {
  sex.value = "女";
};
</script>
