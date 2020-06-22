import Vue from "vue";
import Router from "vue-router";
import Home from "@/components/Home";
import Single from "@/components/Single";

Vue.use(Router);

const router = new Router({
  routes: [
    {
      path: "/",
      name: "Home",
      component: Home
    },
    {
      path: "/posts/:id",
      name: "Single",
      component: Single,
      props: true
    },
    {
      path: "*",
      redirect: "/"
    }
  ],
  mode: "history"
});

export default router;
