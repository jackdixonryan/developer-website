<template>
  <div id="construction-page">
    <div id="content">
      <h1>COMING SOON</h1>
      <p>Development Site for Jack Ryan. Soon, projects, skills, and more will be displayed on this page. Stay tuned!</p>
    </div>
    <div id="floating-balls">
      <div class="floating-ball" v-for="ball in floatingBalls" :key="ball.left" :style="{ animationDelay: `${ball.delay}s`, left: `${ball.left}%`, animationDuration:`${ball.speed}s`}"></div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      floatingBalls: [
        { left: 10, delay: 0, speed:9},
        { left: 35, delay: 1, speed:19},
        { left: 60, delay: 0, speed:13},
        { left: 85, delay: 1, speed:8},
        { left: 13, delay: 2, speed:15},
        { left: 40, delay: 3, speed:10},
        { left: 66, delay: 2, speed:21},
        { left: 92, delay: 4, speed:12},
        { left: 38, delay: 2, speed:16},
        { left: 50, delay: 3, speed:17},
        { left: 13, delay: 5, speed:11},
        { left: 31, delay: 7, speed:10},
        { left: 46, delay: 5, speed:23},
        { left: 75, delay: 6, speed:5},
        { left: 97, delay: 7, speed:13},
        { left: 56, delay: 6, speed:22},
      ]
    }
  }
}
</script>

<style scoped>

  h1, p {
    font-family: "IBM Plex Sans", sans-serif;
    text-align: center;
  }

  h1 {
    margin-top: 1.5em;
  }

  #construction-page {
    height: 100vh;
  }

  #content {
    width: 15em;
    margin: 0 auto;
    border-radius: 50%;
    background-color: white;
    height: 15em;
    padding: 2em;
    border: 2px purple solid;
    position: relative;
    top: 25%;
    z-index: 15;
  }

  .floating-ball {
    position: absolute;
    top: 100%;
    animation: float-up;
    border: 1px black solid;
    height: 1em;
    width: 1em;
    border-radius: 50%;
    animation-iteration-count: infinite;
  }

  @keyframes float-up {
    0% {
      top: 100%;
    }
    100% {
      top: -25%;
    }
  }

</style>
