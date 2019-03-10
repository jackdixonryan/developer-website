<template>
  <div>
    <div v-for="direction in directionNames" :key="direction">
      <arrow 
        :direction="direction" 
        :value="arrowValues[direction]"
        @redirect="passAlong($event)" />
    </div>
  </div>
</template>

<script>
import Arrow from './Arrow';
export default {
  // rather than program this every single time, let's just stick it right in a bloody component.
  props: ['arrowValues'],
  components: { Arrow },
  computed: {
    directionNames() {
      return Object.keys(this.arrowValues);
    }
  },
  methods: {
    passAlong(event) {
      console.log(event);
      this.$emit('redirect', event);
    }
  }
}
</script>

<style>

</style>
