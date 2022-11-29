<template>
  <div>
    <h1>我是有自定义指令的组件</h1>
    <div v-move class="box">
      <div class="header">摁住我移动</div>
    </div>
  </div>
</template>
<script setup lang="ts">
import type { Directive } from "vue";

const vMove: Directive = {
  mounted(el: HTMLElement) {
    // 取box的第一个字元素也就是header作为mouse
    const moveEl = el.firstElementChild as HTMLElement;
    const mouseDown = (e: MouseEvent) => {
      //鼠标点击物体那一刻相对于物体左侧边框的距离=点击时的位置相对于浏览器最左边的距离-物体左边框相对于浏览器最左边的距离
      console.log(e.clientX, e.clientY, "起始位置", el.offsetLeft);
      let X = e.clientX - el.offsetLeft;
      let Y = e.clientY - el.offsetTop;
      const move = (e: MouseEvent) => {
        el.style.left = e.clientX - X + "px";
        el.style.top = e.clientY - Y + "px";
      };
      document.addEventListener("mousemove", move);
      document.addEventListener("mouseup", () => {
        document.removeEventListener("mousemove", move);
      });
    };
    moveEl.addEventListener("mousedown", mouseDown);
  },
};
</script>

<style>
.box {
  width: 200px;
  height: 200px;
  border: 1px solid #ccc;
  position: fixed;
  /* 文本不可选中 */
  -moz-user-select: none;
  -khtml-user-select: none;
  user-select: none;
  font-style: italic;
  background: #fff;
}
.header {
  height: 40px;
  background: black;
  cursor: move;
  color: #fff;
  font-size: 20px;
  text-align: center;
  line-height: 40px;
}
</style>
