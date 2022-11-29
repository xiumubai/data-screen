<template>
  <div class="teleport-wrap">
    <button class="teleport">
      我是Teleport屏幕width: <span>{{ width }}</span
      >, height: <span>{{ height }}</span>
    </button>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import useWindowSize from "../../hooks/useWindowResize";
const { width, height} = useWindowSize();
const color = ref('red');
</script>
<style scoped>
.teleport-wrap {
  position: fixed;
  right: 2em;
  bottom: 4em;
}

span {
  color: v-bind("color");
}
</style>
