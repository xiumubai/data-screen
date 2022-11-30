import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import RefView from "../views/RefView.vue";
import ReactiveView from "../views/ReactiveView.vue";
import WatchView from "../views/WatchView.vue";
import PropView from "../views/PropEmit/Parent.vue";
import SlotView from "../views/SlotView/Parent.vue";
import VarView from "../views/VarView.vue";
import TodoView from "../views/TodoView/index.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/ref",
      name: "ref",
      component: RefView,
    },
    {
      path: "/reactive",
      name: "reactive",
      component: ReactiveView,
    },
    {
      path: "/watch",
      name: "watch",
      component: WatchView,
    },
    {
      path: "/props",
      name: "props",
      component: PropView,
    },
    {
      path: "/slot",
      name: "slot",
      component: SlotView,
    },
    {
      path: "/var",
      name: "var",
      component: VarView,
    },
    {
      path: "/todo",
      name: "Todo",
      component: TodoView,
    },
  ],
});

export default router;
