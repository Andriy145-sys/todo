<template>
  <div>
    <div
      style="
        background: linear-gradient(180deg, #00afed 0%, #00569a 100%);
        padding-top: 10px;
      "
    >
      <header class="login_header">
        <img src="@/assets/logo.svg" class="header_logo" />
      </header>
    </div>
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
@media only screen and (max-width: 768px) {
  .main_div {
    background-image: url(@/assets/Фон.svg);
    background-repeat: no-repeat;
    padding-top: 10px;
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
  .login_header {
    height: auto;
    text-align: start;
    margin-left: 10px;
  }
  .header_logo {
    height: 50px;
    width: 70px;
  }
}
@media only screen and (min-width: 768px) {
  .main_div {
    background-image: url(@/assets/Фон.svg);
    background-repeat: no-repeat;
    padding-top: 12%;
  }
  .main {
    display: flex;
    width: 80%;
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
  .login_header {
    min-height: 96px;
    height: auto;
    width: 80%;
    text-align: start;
  }
  .header_logo {
    height: 66px;
    width: 103px;
  }
}
</style>