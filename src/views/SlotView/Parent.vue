<template>
  <div>
    <Child>
      <template v-slot:content="{ msg }">
        <p>{{ msg }}</p>
      </template>
    </Child>

    <!-- 简写 -->
    <Child>
      <template #content="{ msg }">
        <p>{{ msg }}</p>
      </template>
    </Child>
    <Suspense timeout="0">
      <template #default>
        <!-- 异步加载的组件 -->
        <AsyncComponent />
      </template>
      <template #fallback>
        <p>我是异步组件还没加载完展示的loading....</p>
      </template>
    </Suspense>

    <DirectiveView />

    <Teleport to="body">
      <TeleportView></TeleportView>
    </Teleport>
  </div>
</template>

<script setup lang="ts">
import { defineAsyncComponent } from "vue";
import Child from "./Child.vue";
import TeleportView from "./TeleportView.vue";
import DirectiveView from "./DirectiveView.vue";
const AsyncComponent = defineAsyncComponent(
  () => import("./AsyncComponent.vue")
);
</script>
