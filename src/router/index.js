import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/home/HomeView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/perguntas_frequentes",
    name: "perguntas-frequentes",
    component: () => import("../views/Common_questions/AboutView.vue"),
  },
  {
    path: "/login",
    name: "login",
    component: () => import("../views/login/loginView.vue"),
  },
  {
    path: "/quero_contratar",
    name: "quero_contratar",
    component: () => import("../views/quero_contratar/quero_contratar.vue"),
  },
  {
    path: "/quero_contratar_empresa",
    name: "quero_contratar_empresa",
    component: () => import("../views/contratar_empresa/contratar_empresa.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
