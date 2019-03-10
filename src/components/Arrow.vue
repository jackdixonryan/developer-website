<template>
  <button @click="emitComponent()" v-if="value">
    <p v-if="direction==='up'">&#8593;</p>
    <p v-else-if="direction==='right'">&#8594;</p>
    <p v-else-if="direction==='down'">&#8595;</p>
    <p v-else>&#8592;</p>
  </button>
  <!-- Basically, if there is nowhere for the arrow to go, render nothing. -->
  <div v-else></div>
</template>

<script>
export default {
  // the arrow component draws two props, the direction it should be pointing in and its value, eg, the page it directs to. 
  props: ['direction', 'value'],
  methods: {
    emitComponent() {
      this.$emit('redirect', this.value);
    }
  }
}
</script>

<style>

</style>
