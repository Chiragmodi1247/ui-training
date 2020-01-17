<template>
  <h3>
    Hi, Chirag component is working.
    <br />
    The name is {{usernamerefactored}} and age is {{age}} and it's double is {{ doubleOfNumber }}
    <button
      @click="increaseFavNumber"
    >Increase</button>
  </h3>
</template>

<script>
export default {
  name: "Chirag",
  data: () => {
    return {
      name: "Chirag_modi",
    };
  },
  props:[''],
  computed: {
    doubleOfNumber() {
      return this.age*2
    },
    usernamerefactored() {
      return this.name.split('_').join(' ');
    }    
  },
  methods: {
    increaseFavNumber: function() {
      this.age++;
    }
  }
};
</script>

<style>
</style>