<template>
  <div>
    <div class="login_form">
      <form class="form">
        <span class="label">Name</span>
        <div style="text-align: start">
          <input
            class="input"
            type="username"
            v-model.trim="user.name"
            @blur="$v.user.name.$touch()"
          />
          <error-message :message="nameError[0]" v-if="nameError.length" />
          <span class="label">Password</span>
          <input
            class="input"
            type="password"
            v-model.trim="user.password"
            @blur="$v.user.password.$touch()"
          />
          <error-message :message="passwordError[0]" v-if="passwordError.length" />
        </div>
        <button class="btn_login" @click.prevent="Login">LOGIN</button>
      </form>
      <a>Forgot Password</a>
      <div class="register_now_btn">
        <span>Register now</span>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import { validationMixin } from "vuelidate";
import { required } from "vuelidate/lib/validators";
import errorMessage from "@/components/UI/error-message";
export default {
  mixins: [validationMixin],
  components: {
    errorMessage,
  },
  data: () => ({
    user: {},
  }),
  validations: {
    user: {
      name: {
        required,
      },
      password: {
        required,
      },
    },
  },
  methods: {
    ...mapActions(["updateInfoLogged"]),
    Login() {
      this.$v.$touch();
      if (!this.$v.$invalid) {
        this.user.name == "Admin" && this.user.password == "12345"
          ? this.updateInfoLogged({
              name: this.user.name,
            }) && this.$router.go({ name: "/" })
          : alert("Username or password entered incorrectly");
      }
    },
  },
  computed: {
    nameError() {
      const errors = [];
      if (!this.$v.user.name.$dirty) {
        return errors;
      }
      !this.$v.user.name.required && errors.push("Name field is required");
      return errors;
    },
    passwordError() {
      const errors = [];
      if (!this.$v.user.password.$dirty) {
        return errors;
      }
      !this.$v.user.password.required &&
        errors.push("Password field is required");
      return errors;
    },
  },
};
</script>

<style>
@media only screen and (max-width: 768px) {
  .login_form {
    width: 80%;
    height: 464px;
    background: #ffffff;
    box-shadow: 2px 2px 15px 2px rgba(0, 0, 0, 0.1);
    display: grid;
    padding-inline: 20px;
    margin-top: 10px;
    text-align: center;
  }
  .btn_login {
    width: auto;
    height: 53px;
    color: white;
    margin-top: 40px;
    background: #0076c0;
    border: 0;
    cursor: pointer;
  }
  .input {
    box-sizing: border-box;
    width: auto;
    height: 53px;
    margin: 0;
    background: #ffffff;
    border: 1px solid #9a9a9a;
    font-size: 20px;
  }
  .register_now_btn {
    width: auto;
    height: 63px;
    background: #f6f6f6;
    font-weight: 400;
    font-size: 25px;
    display: flex;
    justify-content: center;
    align-items: center;
    align-self: flex-end;
    color: #333333;
    margin-top: 10px;
  }
}
@media only screen and (min-width: 768px) {
  .login_form {
    position: absolute;
    width: 481px;
    height: 464px;
    background: #ffffff;
    box-shadow: 2px 2px 15px 2px rgba(0, 0, 0, 0.1);
    display: grid;
    margin-left: 30px;
    margin-top: 30px;
  }
  .btn_login {
    width: 421px;
    height: 53px;
    color: white;
    margin-top: 40px;
    background: #0076c0;
    border: 0;
    cursor: pointer;
  }
  .input {
    box-sizing: border-box;
    width: 421px;
    height: 53px;
    margin: 0;
    background: #ffffff;
    border: 1px solid #9a9a9a;
    padding: 10px;
    font-size: 20px;
  }
  .register_now_btn {
    width: 481px;
    height: 63px;
    background: #f6f6f6;
    font-weight: 400;
    font-size: 25px;
    display: flex;
    justify-content: center;
    align-items: center;
    align-self: flex-end;
    color: #333333;
  }
}

.form {
  display: grid;
  justify-content: center;
}
.label {
  font-weight: 300;
  font-size: 18px;
  display: flex;
  margin-top: 40px;
  margin-bottom: 0;
  color: #333333;
}

.btn_login:hover {
  border: 2px solid #0076c0;
  background: white;
  color: #0076c0;
}

a {
  text-decoration: none;
  color: #0076c0;
  margin-top: 20px;
  cursor: pointer;
}
</style>