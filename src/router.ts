import { createRouter, createWebHistory } from "vue-router";
import type { RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  { path: "/", redirect: "/test-main" },
  {
    path: "/test-main",
    name: "TestMain",
    component: () => import("./view/TestMain.vue"),
  },
  {
    path: "/test-main2",
    name: "TestMain2",
    component: () => import("./view/TestMain2.vue"),
  },
];
export let router = createRouter({
  history: createWebHistory(),
  routes,
});
