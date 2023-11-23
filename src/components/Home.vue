<template>
  <div class="grid grid-cols-4 gap-12">
    <card v-for="item in links" :key="item.id" :link="item"></card>
  </div>
</template>

<script setup>
import Card from './Card.vue';
import { ref } from 'vue';
const links = ref([
  {
    id: 1,
    link: 'www.baidu.com',
    title: '百度ddd'
  },
  {
    id: 2,
    link: 'www.biying.com',
    title: '必应'
  },
  {
    id: 3,
    link: 'www.baidu.com',
    title: '百度'
  },
  {
    id: 4,
    link: 'www.biying.com',
    title: '必应'
  },
  {
    id: 5,
    link: 'www.baidu.com',
    title: '百度'
  },
  {
    id: 6,
    link: 'www.biying.com',
    title: '必应'
  },
  {
    id: 7,
    link: 'www.baidu.com',
    title: '百度'
  },
  {
    id: 8,
    link: 'www.biying.com',
    title: '必应'
  },
  {
    id: 9,
    link: 'www.baidu.com',
    title: '百度'
  },
  {
    id: 10,
    link: 'www.biying.com',
    title: '必应'
  },
  {
    id: 11,
    link: 'www.baidu.com',
    title: '百度'
  },
  {
    id: 12,
    link: 'www.biying.com',
    title: '必应'
  },
])
const props = defineProps({});
</script>

<style scoped>

</style>
