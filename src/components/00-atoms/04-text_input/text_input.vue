<template>
  <input type="text" :class="classes" :id="inputID" />
</template>

<script>
  export default {
    name: 'TextInput',
    props: {
      classList:{
        type: String,
        default: "",
      },
      inputID: {
        type: String,
        required: true
      },
    },
    computed: {
      classes() {
        return `text_input ${this.classList}`;  
      },
    },
    methods: {
      onClick() {
      }
    }
  }
</script>

<style lang="scss">
  @import "./_text_input.scss";
</style>
