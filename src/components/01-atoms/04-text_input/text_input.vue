<template>
  <input :type="type" :class="classes" :value="value" />
</template>

<script>
  export default {
    name: 'TextInput',
    props: {
      type: {
        type: String,
        default: "text"
      },
      classList:{
        type: String,
        default: "",
      },
      value: {
        type: String
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
