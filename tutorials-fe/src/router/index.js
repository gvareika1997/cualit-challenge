import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    alias: "/tutorials",
    name: "tutorials",
    component: () => import("../views/TutorialsListView.vue"),
  },
  {
    path: "/add",
    name: "add",
    component: () => import("../views/AddTutorialView.vue"),
  },
  {
    path: "/tutorials/:id",
    name: "tutorial-edit",
    component: () => import("../views/EditTutorialView.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
