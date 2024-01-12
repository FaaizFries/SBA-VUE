import { createRouter, createWebHistory } from "vue-router";
import Login from "../components/LoginForm.vue";

const routes = [
  {
    path: "/",
    name: "Login",
    component: Login,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;