import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import PlanList from "../views/PlanList.vue";
import FoodTemplate from "../views/FoodTemplate.vue";
import FacilityTemplate from "../views/FacilityTemplate.vue";
import PlanPage from "../views/PlanPage.vue";
import PlanProduction from "../views/PlanProduction.vue";
import EmergencyTemplate from "../views/EmergencyTemplate.vue";
import EqWork from "../views/EqWork.vue";
import TyphoonWork from "../views/TyphoonWork.vue";

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'PlanProduction',
    component: PlanProduction
  },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },

    {
      name: "plan-list",
      path: "/planlist",
      component: PlanList
    },
    {
      name: "plan-page",
      path: "/planpage",
      component: PlanPage
    },
    ,
    {
      name: "FoodTemplate",
      path: "/FoodTemplate",
      component: FoodTemplate
    },
    {
      name: "FacilityTemplate",
      path: "/FacilityTemplate",
      component: FacilityTemplate
    },
    {
      name: "EmergencyTemplate",
      path: "/EmergencyTemplate",
      component: EmergencyTemplate
    },
    ,
    {
      name: "EqWork",
      path: "/EqWork",
      component: EqWork
    } ,
    {
      name: "TyphoonWork",
      path: "/TyphoonWork",
      component: TyphoonWork
    },


    
]

const router = new VueRouter({
  mode: 'hash',
    scrollBehavior() {
    return { x: 0, y: 0 };
  },
  base: process.env.BASE_URL,
  routes
})

export default router
