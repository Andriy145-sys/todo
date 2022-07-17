<template>
  <div>
    <header class="login_header"></header>
    <img src="@/assets/Фон.svg" alt="Фон" class="background_img" />
    <div class="main_div">
      <center>
         <div class="main">
        <div class="main_text">
          <span
            >Welcome to<br />
            Business Analytics Online</span
          >
          <login-description />
        </div>
        <login-form-vue />
      </div>
      </center>
    </div>
  </div>
</template>

<script>
import LoginFormVue from "./LoginForm.vue";
import LoginDescription from "@/components/Login/LoginDescription";
export default {
  components: {
    LoginFormVue,
    LoginDescription,
  },
};
</script>

<style>
.login_header {
  min-height: 93px;
  height: auto;
  background: linear-gradient(180deg, #00afed 0%, #00569a 100%);
}

@media only screen and (max-width: 768px) {
  .main_div {
    position:absolute;
    top: 160px;
  }
  .main {
    display: block;
  }
  .main_text {
    font-weight: 400;
    font-size: 22px;
    max-width: 629px;
    display: flex;
    color: white;
    display: block;
    text-align: center;
  }
}
@media only screen and (min-width: 768px) {
  .main {
    display: flex;
    width: 80%
  }
  .main_text {
    font-weight: 400;
    font-size: 55px;
    max-width: 629px;
    display: flex;
    color: white;
    display: block;
    text-align: start;
  }
}

.background_img {
  width: 100%;
}

</style>