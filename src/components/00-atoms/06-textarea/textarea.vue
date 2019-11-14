<template>
  <textarea :class="classes" :id="inputID" />
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
      }
    },
    computed: {
      classes() {
        return `textarea ${this.classList}`;  
      },
    },
    methods: {
      onClick() {
      }
    }
  }
</script>

<style lang="scss">
  @import "./_textarea.scss";
</style>
