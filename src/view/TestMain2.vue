<template>
  <div>
   <h2>test main222</h2>
   <div>{{ time }}</div>
  </div>
</template>

<script lang='ts' setup>
import { ref, onBeforeUnmount } from "vue";

const time = ref(new Date().toLocaleTimeString());
const timer = setInterval(() => {
 time.value = new Date().toLocaleTimeString();
}, 1000)
onBeforeUnmount(() => {
 clearInterval(timer)
})
</script>
<style lang='less'>
</style>