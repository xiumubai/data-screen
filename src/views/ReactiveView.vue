<template>
  <div>
    <p>name:{{userInfo.name}}</p>
    <p>age: {{userInfo.age}}</p>
  </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue'
interface IUserInfo {
  name: string;
  age: number;
}
const userInfo = reactive<IUserInfo>({
  name: 'xiumubai',
  age: 18,
});
</script>
