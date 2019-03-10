<template>
  <div>
    <button 
      id="arrow-up"
      @click="active='main-blurb'"
    >^</button>
    <button 
      id="arrow-right"
      @click="active='main-contact'"
    >></button>
    <button 
      id="arrow-down"
      @click="active='main-projects'"
    >v</button>
    <button 
      id="arrow-left"
      @click="active='main-writings'"
    >this way</button>
    <main-blurb 
      v-if="active==='main-blurb'"
      class="main-component"
    />
    <main-contact
      v-if="active==='main-contact'"
      class="main-component"
    />
    <main-projects 
      v-if="active==='main-projects'"
      class="main-component"
    />
    <main-writings 
      v-if="active==='main-writings'"
      class="main-component"
    />
  </div>
</template>

<script>
import MainBlurb from '../components/MainBlurb.vue';
import MainContact from '../components/MainContact.vue';
import MainProjects from '../components/MainProjects.vue';
import MainWritings from '../components/MainWritings.vue';

export default {
  components: {
    MainBlurb, 
    MainContact, 
    MainProjects, 
    MainWritings
  },
  data() {
    return {
      active: null,
    }
  },
  methods: {
  }
}
</script>

<style scoped>

  #arrow-up {
    position: absolute;
    left: 50%;
  }

  #arrow-right {
    position: absolute;
    left: 95%;
    top: 45%;
  }

  #arrow-down {
    position: absolute;
    left: 50%;
    top: 95%;
  }

  #arrow-left {
    position: absolute;
    top: 45%;
  }

  button {
    cursor: pointer;
    background: none;
    outline: none;
    border: none;
    color: purple;
    font-size: 1.4em;
  }

  .main-component {
    position: absolute;
    height: 100vh;
    width: 100%;
    padding: 1em;
  }

</style>
