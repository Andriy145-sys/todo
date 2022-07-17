<template>
  <div style="color: red">
    <span class="material-icons" style="vertical-align: middle">close</span>
    <span> {{ message }}</span>
  </div>
</template>

<script>
export default {
  props: {
    message: {
      require: true,
    },
  },
};
</script>

<style>
</style>