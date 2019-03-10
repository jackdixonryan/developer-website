<template>
  <div>
    <p v-if="active===null">Follow the arrows.</p>
    <arrow-navigation :arrowValues="arrowValues" @redirect="catchRedirect($event)" />
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
import ArrowNavigation from '../components/ArrowNavigation.vue'

export default {
  components: {
    MainBlurb, 
    MainContact, 
    MainProjects, 
    MainWritings,
    ArrowNavigation
  },
  data() {
    return {
      active: null,
    }
  },
  computed: {
    arrowValues() {
      return this.$store.state.arrowValues;
    }
  },
  methods: {
    // catches the switch to a different part of the site for simple navigation.
    emitPageChange() {
      // pretty straightforward. If the page has been visited, it's added to the list. If not, it's not added.
      if (!this.$store.state.pagesVisited.includes(this.active)) {
        this.$store.state.pagesVisited.push(this.active);
      }
    },
    // resets the active component to the emitted arrow value thus running the transition, and emits the page change to the vuex store.
    catchRedirect(e) {
      this.active = e;
      this.emitPageChange();
    }
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
    z-index: 100;
  }

  .main-component {
    position: absolute;
    height: 100vh;
    width: 100%;
    padding: 1em;
  }

</style>
