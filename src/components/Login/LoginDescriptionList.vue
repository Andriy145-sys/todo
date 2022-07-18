<template>
  <div
    style="
      display: flex;
      flex-direction: column;
      width: auto;
      margin-left: 15px;
    "
  >
    <div
      style="display: flex; align-items: flex-start; margin-block-end: 15px; width: 95%;"
      v-for="item in list"
      :key="item.id"
    >
      <img src="@/assets/Vector.svg" alt="check" style="margin-top: 3px" />
      <div
        style="
          display: flex;
          flex-direction: column;
          font-weight: 400;
          font-size: 14px;
          color: black;
          margin-left: 15px;
        "
        class="align_text"
      >
        <strong style="font-size: 16px; margin-bottom: 10px">{{
          item.title
        }}</strong>
        <span> {{ item.description }}</span>
      </div>
    </div>
  </div>
</template>

<script scoped>
export default {
  data: () => ({
    list: [
      {
        id: 1,
        title: "Interactive Reporting",
        description:
          "In just a few clicks, you can connect your data from 1C, CRM (Bitrix24, AmoCRM, ZohoCRM), E-commerce (PROM.UA, Rozetka, ebay), Logistic (Nova Poshta), Google Analytics and many more systems that reflect different aspects of business activities.",
      },
      {
        id: 2,
        title: "Automated data updates",
        description:
          "The application automatically updates and structures the data in just 60 seconds, saving you time and money.",
      },
      {
        id: 3,
        title: "Data Security",
        description:
          "The Bank guarantees the safety of your personal data, ensuring their integrity and confidentiality.",
      },
    ],
  }),
};
</script>

<style>
@media only screen and (max-width: 768px) {
  .align_text {
    text-align: start;
  }
}
@media only screen and (min-width: 768px) {
  .align_text {
    text-align: center;
  }
}
</style>