import { createRouter, createWebHistory } from "vue-router";
import Home from "../Pages/HomePage.vue";
import OurStoryPage from "../Pages/OurStoryPage.vue";
import ProductsPage from "../Pages/ProductPage.vue";
import BusinessOpportunityPage from "../Pages/BusinessOpportunityPage.vue";
import WellnessTestPage from "../Pages/WellnessTestPage.vue";
import Layout from "../layouts/MainLayout.vue";
import ShopShift from "../Pages/ShopShift.vue";
import AddtoCartPage from "../Pages/AddtoCartPage.vue";

const routes = [
  {
    path: "/",
    component: Layout,
    children: [
      {
        path: "",
        name: "Home",
        component: Home,
      },
      {
        path:"shope-shift",
        name:"ShopeShift",
        component:ShopShift,
      },
      {
        path:"add-cart",
        name:"AddCart",
        component:AddtoCartPage,
      },
      {
        path: "ourstory",
        name: "OurStoryPage",
        component: OurStoryPage,
      },
      {
        path: "products",
        name: "ProductsPage",
        component: ProductsPage,
      },
      {
        path: "business-opportunity",
        name: "BusinessOpportunityPage",
        component: BusinessOpportunityPage,
      },
      {
        path: "wellness-test",
        name: "WellnessTestPage",
        component: WellnessTestPage,
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
