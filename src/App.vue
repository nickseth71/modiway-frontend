<template>
  <router-view />
  <SearchPopup />
</template>

<script>
import { provideSearchPopup } from './compossable/useSearchPopup';
import SearchPopup from './components/SearchPopup.vue';

export default {
  setup() {
    provideSearchPopup();
  }
}
</script>
