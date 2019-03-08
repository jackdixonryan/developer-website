<template>
  <div id="main">
    <router-view />
  </div>
</template>

<script>
export default {
  name: "app",
};
</script>

<style>
  html, body {
    margin: 0px;
    padding: 0px;
  }

  #main {
    height: 100vh !important;
  }
</style>
