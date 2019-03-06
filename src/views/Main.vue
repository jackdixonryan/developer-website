<template>
  <div>
    <main-blurb />
    <main-contact />
    <main-projects />
    <main-writings />
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
  mounted() {
    console.log("Hello.")
  }
}
</script>

<style>

</style>
