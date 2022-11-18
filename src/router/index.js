import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/home/HomeView.vue";
import AboutView from "../views/Common_questions/AboutView.vue";
import QueroContratarView from "../views/quero_contratar/quero_contratar.vue";
import ContratarView from "@/views/contratar/views/contratar_empresa.vue";
import ContratarPfView from "@/views/contratar/views/contratar_pessoa.vue";
import LoginView from "../views/login/loginView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/perguntas_frequentes",
    name: "perguntas-frequentes",
    component: AboutView,
  },
  {
    path: "/login",
    name: "login",
    component: LoginView,
  },
  {
    path: "/quero_contratar",
    name: "quero_contratar",
    component: QueroContratarView,
  },
  {
    path: "/quero_contratar_empresa",
    name: "quero_contratar_empresa",
    component: ContratarView,
  },
  {
    path: "/quero_contratar_fisica",
    name: "quero_contratar_fisica",
    component: ContratarPfView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
