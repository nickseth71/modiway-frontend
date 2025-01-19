import { createRouter, createWebHistory } from "vue-router";
import Home from "../Pages/HomePage.vue";
import OurStoryPage from "../Pages/OurStoryPage.vue";
import ProductsPage from "../Pages/ProductPage.vue";
import BusinessOpportunityPage from "../Pages/BusinessOpportunity.vue";
import WellnessTestPage from "../Pages/WellnessTestPage.vue";
import Layout from "../layouts/MainLayout.vue";
import ShopShift from "../Pages/ShopShift.vue";
import AddtoCartPage from "../Pages/AddtoCartPage.vue";
import BlogPage from "../Pages/BlogPage.vue"
import CheckoutFormPage from "../Pages/Checkout-formPage.vue"
import Register from "../components/Register.vue"
import PrivacyPolicyPage from  "../Pages/PrivacyPolicyPage.vue"
import Faq from "../Pages/Faq.vue";
import Advisor from "../Pages/Advisor.vue";
import Login from "../components/Login.vue"
import BlogArticlePage from "../Pages/BlogArticlePage.vue"
import Resources from "../Pages/ResourcesPage.vue"
import VideoListing from "../Pages/VideoListingPage.vue"

const routes = [
  {
    path: "/",
    component: Layout,
    children: [
      { path: "", name: "Home", component: Home },
      { path: "shope-shift", name: "ShopeShift", component: ShopShift },
      { path: "blogs", name: "BlogPage", component: BlogPage },
      {path:"blogs-article", name:"BlogArticlePage",component:BlogArticlePage},
      {path:"resources",name:"Resources",component:Resources},
      {path:"video-listing",name:"VideoListingPage",component:VideoListing},
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
        path: "checkout-form",
        name: "CheckOutForm",
        component: CheckoutFormPage,
      },
      { path: "ourstory", name: "OurStoryPage", component: OurStoryPage },
      {
        path: "products",
        name: "ProductsPage",
        component: ProductsPage,
        meta: { requiresAuth: true },
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
        meta: { requiresAuth: true },
      },
      {
        path: "register",
        name: "Register",
        component: Register,
      },
      {
        path: "privacy-policy",
        name: "PrivacyPolicyPage",
        component: PrivacyPolicyPage,
      },
      {
        path: "faq",
        name: "Faq",
        component: Faq,
      },
      {
        path: "find-an-advisor",
        name: "Advisor",
        component: Advisor,
      },
    ],
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    // Reset the scroll position to the top when navigating to a new route
    if (savedPosition) {
      return savedPosition; // For "back" or "forward" button
    } else {
      return { top: 0 }; // Default scroll to top
    }
  },
});

// Uncomment if you need global authentication guard
// router.beforeEach((to, from, next) => {
//   const loggedIn = localStorage.getItem("loggedIn");
//   if (to.matched.some((record) => record.meta.requiresAuth)) {
//     if (!loggedIn) {
//       alert("Please log in to access this page.");
//       return next("/login");
//     }
//   }
//   next();
// });

export default router;
