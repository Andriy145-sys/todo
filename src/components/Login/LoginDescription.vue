<template>
  <div>
    <p class="description_text">
      <strong>Business Analytics</strong> — a new, convenient tool for managing
      and forecasting your business performance, which will help analyze your
      own finances and cash flows, visualize your reporting, business processes,
      KPI's
    </p>
    <login-description-list-vue />
  </div>
</template>

<script>
import LoginDescriptionListVue from "./LoginDescriptionList.vue";
export default {
  components: {
    LoginDescriptionListVue,
  },
};
</script>

<style>

@media only screen and (max-width: 768px) {
  .description_text {
  width: auto;
  margin-top: 20px;
  margin-left: 5px;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  color: #333333;
  padding: 10px;
  text-align: start;
}
}
@media only screen and (min-width: 768px) {
  .description_text {
  max-width: 629px;
  margin-top: 110px;
  margin-left: 10px;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  color: #333333;
}
}
</style>