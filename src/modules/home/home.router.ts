import type { RouteRecordRaw } from "vue-router";

const route: RouteRecordRaw = {
  name: "Home",
  path: "/",
  component: () => import("./home.view.vue"),
};

export default route;
