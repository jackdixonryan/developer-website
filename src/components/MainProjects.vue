<template>
  <div id="projects-page">
    <p>A COMPREHENSIVE LIST OF PROJECTS</p>
    <div v-for="arrow in arrowValues"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      arrowValues: {
        up: 'main',
        left: null,
        right: null,
        down: null,
      }
    }
  },
  mounted() {
    // gist: We are now below the main content and at the end of navigation, so we change the arrows in our Vuex to reflect where we are on the site. 
    this.$store.state.arrowValues = this.arrowValues;
  }
}
</script>

<style scoped>
  #projects-page {
    display: absolute;
    animation-name: slideDown;
    border-bottom: 2px purple solid;
    top: 0%;
    animation-duration: 5s;
    background-color: tan;
  }

  @keyframes slideDown {
    0% {
      top: -105%;
    }
    100% {
      top: 0%;
    }
  }
</style>
