<template>
  <textarea :class="classes" />
</template>

<script>
  export default {
    name: 'TextInput',
    props: {
      classList:{
        type: String,
        default: "",
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
