<template>
  <div>
    <header-vue />
    <main>
      <center>
        <login-component-vue />
      </center>
    </main>
  </div>
</template>

<script>
import HeaderVue from "@/components/Header.vue";
import LoginComponentVue from "@/components/Login/LoginComponent.vue";
export default {
  name: "LoginView",
  components: {
    LoginComponentVue,
    HeaderVue,
  },
};
</script>

<style>
</style>