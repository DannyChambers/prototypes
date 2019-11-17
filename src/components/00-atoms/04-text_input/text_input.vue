<template>
  <input :type="type" :class="classes" :value="value" />
</template>

<script>
  export default {
    name: 'TextInput',
    props: {
      type: {
        type: String,
        required: true,
        default: "text"
      },
      classList:{
        type: String,
        default: "",
      },
      value: {
        type: String,
        required: true,
        default: ""
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
