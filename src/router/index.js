import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import AboutView from "../views/AboutView.vue";
import Categories from "../views/Categories.vue";
import Contact from "../views/Contact.vue";
import ErrorPage from "../views/ErrorPage.vue";
import CarInfo from "../components/cars/carInfo.vue";
import eachCar from "../components/cars/eachCar.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/Home",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    component: AboutView,
  },

  {
    path: "/Categories",
    name: "Categories",
    component: Categories,
  },
  {
    path: "/Contact",
    name: "Contact",
    component: Contact,
  }, 
  {
    path: "/view/car/:carType",
    name: 'eachCar',
    component: eachCar,
  },
  {
    path: "/view/car/:carName/:carFileId",
    name: "carInfo",
    component: CarInfo,
  },
  {
    path: "/:catchAll(.*)",
    name: "ErrorPageView",
    component: ErrorPage,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});
router.beforeEach((to,from, next)=>{

  document.title=`${process.env.VUE_APP_TITLE} | ${to.name}`
if (to.params.pageTitle){
  document.title +=` | ${to.params.pageTitle}`
}
  document.title= document.title;
 
  next();
});

export default router;
