<template>
  <el-button class="bg-[#FFFFFF] rounded-lg" @click="handleClick">
    {{ link.title }}
  </el-button>
</template>

<script setup>
import { ref } from 'vue';
const props = defineProps(['link']);

const handleClick = function() {
  
}
</script>

<style scoped>
.el-button {
  padding: 3.5rem;
}
.el-button:hover {
  box-shadow: 0 3px 8px 0 rgba(0,0,0,.2);
}
</style>
