<template>
  <div id="projects-page">
    <p>A COMPREHENSIVE LIST OF PROJECTS</p>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
  #projects-page {
    display: absolute;
    animation-name: slideDown;
    border-bottom: 2px purple solid;
    top: 0%;
    animation-duration: 10s;
  }

  @keyframes slideDown {
    0% {
      top: -100%;
    }
    100% {
      top: 0%;
    }
  }
</style>
