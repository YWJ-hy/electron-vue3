<template>
   <div class="main_wrapper">
    <BarTop />
    <h2>test main</h2>
    <button @click="jumpToMain2">jumpToMain2</button>
    <div>{{ time }}</div>
   </div>
</template>

<script lang='ts' setup>
import { ipcRenderer } from "electron";
import { ref, onBeforeUnmount, onMounted } from "vue";
import { useRouter } from "vue-router"
import BarTop from "../components/BarTop.vue"

const { push } = useRouter();

const time = ref(new Date().toISOString());
const timer = setInterval(() => {
  time.value = new Date().toISOString();
}, 1000)
onBeforeUnmount(() => {
  clearInterval(timer)
})

const jumpToMain2 = () => {
  push({ name: "TestMain2" })
}

onMounted(() => {
  ipcRenderer.invoke("showWindow");
});
</script>
<style scoped>
.main_wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>