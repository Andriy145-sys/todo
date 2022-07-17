<template>
  <div id="app" class="app">
    <main>
      <router-view />
    </main>
    <footer-vue />
  </div>
</template>

<script>
import FooterVue from "./components/Footer.vue";
export default {
  name: "App",
  components: {
    FooterVue,
  },
};
</script>

<style>
.app {
  max-width: 1920px;
}
</style>
