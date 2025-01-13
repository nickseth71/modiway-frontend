import { reactive, computed, provide, inject } from "vue";
import MealReplacementImg from "../assets/ProductImg.png";
import Fliplock from "../assets/Flip-lock.png";

const state = reactive({
  isSearchOpen: false,
  query: "",
  products: [
    {title:"Banana Caramel Flavour",
      name: "Shape Shift Meal Replacement Powder 500g",
      price: "1,252.00",
      image: MealReplacementImg,
    },
    {
      name: "SoulChef Fliplock Airtight 4 Piece Stackable Containers",
      price: "1,252.00",
      image: Fliplock,
    },
    {title:"Banana Caramel Flavour",
      name: "Shope Shift Meal Replacement Powder 500g",
      price: "1,252.00",
      image: MealReplacementImg,
    },
    {
      name: "SoulChef Fliplock Airtight 4 Piece Stackable Containers",
      price: "1,252.00",
      image: Fliplock,
    },
    // Add more products here
  ],
  filteredProducts: [],
});

export function useSearchPopup() {
  const toggleSearch = () => {
    state.isSearchOpen = !state.isSearchOpen;
    if (!state.isSearchOpen) {
      state.query = "";
      state.filteredProducts = [];
    }
  };

  const searchProducts = () => {
    const searchTerm = state.query.toLowerCase();
    
    
    if (searchTerm === "") {
      state.filteredProducts = [];
    } else {
      state.filteredProducts = state.products.filter((product) =>
        product.name.toLowerCase().includes(searchTerm)
      );
    }
  };

  return {
    isSearchOpen: computed(() => state.isSearchOpen),
    toggleSearch,
    query: computed({
      get: () => state.query,
      set: (value) => (state.query = value),
    }),
    filteredProducts: computed(() => state.filteredProducts),
    searchProducts,
  };
}

export function provideSearchPopup() {
  provide("searchPopup", useSearchPopup());
}

export function injectSearchPopup() {
  const searchPopup = inject("searchPopup");
  if (!searchPopup) {
    throw new Error("No searchPopup provided!");
  }
  return searchPopup;
}
