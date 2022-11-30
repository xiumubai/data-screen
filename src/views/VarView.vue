<script setup lang="ts">
import { ref, computed } from "vue";
const bgColor = ref("blue");
const declareColor = computed(() => `--bg-color: ${bgColor.value}`);
const handleChangeBgColor = () => {};
</script>

<template>
  <div>
    <!-- <div style="--bg-color: red" class="bg-color"></div> -->
    <!-- 声明成计算属性 -->
    <div :style="declareColor" class="bg-color"></div>
    <input type="text" placeholder="输入颜色值" v-model="bgColor" />
    <button @click="handleChangeBgColor">切换背景颜色</button>
  </div>
</template>
<style>
.bg-color {
  /* --bg-color: red; */
  height: 40px;
  background: var(--bg-color);
}
</style>
