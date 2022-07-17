<template>
  <footer class="footer">
    <center>
      <div style="width: 80%">
        <div
          style="display: flex; align-content: space-between; justify-content: space-between;"
        >
          <img src="@/assets/logo.svg" height="35px" width="56px" />
          <ul>
            <li>Terms & Conditions</li>
            <li>Privacy</li>
            <li>Notice at Collection</li>
            <li>CA Privacy Hub</li>
            <li>Contact Us</li>
            <li>Sitemap</li>
          </ul>
        </div>
        <hr style="margin-top: 30px; margin-bottom: 30px" />
        <span style="display: flex; color: white; font-size: 12px">
          Copyright © 2020 Citigroup Inc. Citibank, N.A. Member FDIC. Equal
          Opportunity Lender.</span
        >
      </div>
    </center>
  </footer>
</template>

<script>
export default {
  name: "App_Footer",
};
</script>

<style>
.footer {
  min-height: 175px;
  background: #333333;
  padding: 30px 3px 30px 0px;
  margin-top: 10%;
}

li {
  display: inline-block;
  padding: 5px;
  color: white;
  align-self: center;
  font-size: 16px;
  cursor: pointer;
}
</style>