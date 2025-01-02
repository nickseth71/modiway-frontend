<script setup>
import Navbar from '../components/Navbar.vue';
import Footer from "../components/Footer.vue";
</script>

<template>
    <div>
        <div class="sticky top-0 z-50 bg-white "><Navbar/></div>
        <div>
            <router-view/>  
        </div>

        <div><Footer/></div>
    </div>
</template>
