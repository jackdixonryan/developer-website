<template>
  <div id="construction-page">
    <div id="content">
      <h1>COMING SOON</h1>
      <p>Development Site for Jack Ryan. Soon, projects, skills, and more will be displayed on this page. Stay tuned!</p>
    </div>
    <div id="floating-balls">
      <div class="floating-ball" v-for="ball in floatingBalls" :key="ball.left" :style="{ animationDelay: `${ball.delay}s`, left: `${ball.left}%`, animationDuration:`${ball.speed}s`, height: `${ball.size}em`, width: `${ball.size}em`, zIndex: ball.size * 10}">
      </div>
    </div>
    <div class="info-ball" v-for="ball in infoBalls" :key="ball.left" :style="{ animationDelay: `${ball.delay}s`, left: `${ball.left}%`, animationDuration:`${ball.speed}s`}"><p style="margin-top: 1.5em;">{{ball.content}}</p></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      floatingBalls: [
        { left: 10, delay: 0, speed:9, size: 1},
        { left: 35, delay: 1, speed:19, size: 1},
        { left: 60, delay: 0, speed:13, size: 1.5},
        { left: 85, delay: 1, speed:8, size: 2},
        { left: 13, delay: 2, speed:15, size: 1},
        { left: 40, delay: 3, speed:10, size: 1.5},
        { left: 66, delay: 2, speed:21, size: 1.5},
        { left: 92, delay: 4, speed:12, size: 1},
        { left: 38, delay: 2, speed:16, size: 1.3},
        { left: 50, delay: 3, speed:17, size: 1},
        { left: 13, delay: 5, speed:11, size: 2},
        { left: 31, delay: 7, speed:10, size: 1},
        { left: 46, delay: 5, speed:23, size: 1.5},
        { left: 75, delay: 6, speed:5, size: 1},
        { left: 97, delay: 7, speed:13, size: 1.5},
        { left: 56, delay: 6, speed:22, size: 1},
      ], 
      infoBalls: [
        {
          left: 13,
          delay: 1,
          speed: 25,
          content: "Projects"
        },
        {
          left: 50,
          delay: 4,
          speed: 27,
          content: 'Samples'
        },
        {
          left: 68,
          delay: 8,
          speed: 23,
          content: 'Articles'
        },
        {
          left: 40,
          delay: 30,
          speed: 32,
          content: "But Not Yet"
        },
        {
          left: 32,
          delay: 60,
          speed: 55,
          content: "Bye Now",
        }, 
        {
          left: 20,
          delay: 120,
          speed: 60,
          content: "Get Out"
        }
      ]
    }
  }
}
</script>

<style scoped>
  html {
    height: 100vh;
  }

  h1, p {
    font-family: "IBM Plex Sans", sans-serif;
    text-align: center;
  }

  h1 {
    margin-top: 1.5em;
  }

  #construction-page {
    height: 100vh;
    background: #AA076B; 
    background: -webkit-linear-gradient(#AA076B, #61045F); 
    background: linear-gradient(#AA076B, #61045F); 
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
    z-index: 25;
    animation-name: content-float-up;
    animation-duration: 10s;
  }

  .floating-ball {
    position: absolute;
    top: 100%;
    animation: float-up;
    border: 2px purple solid;
    border-radius: 50%;
    animation-iteration-count: infinite;
    background: #FFFFFF; 
  }

  .info-ball {
    position: absolute;
    top: 100%;
    animation: float-up;
    border: 2px purple solid;
    border-radius: 50%;
    animation-iteration-count: infinite;
    background: #FFFFFF; 
    height: 5em;
    width: 5em;
    z-index: 24
  }

  @keyframes float-up {
    0% {
      top: 100%;
    }
    100% {
      top: -25%;
    }
  }

  @keyframes content-float-up {
    0% {
      top: 100%;
    }
    100% {
      top: 25%;
    }
  }

</style>
