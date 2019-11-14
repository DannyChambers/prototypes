
<template>
  <h3 :class="classes">
    {{text}}
  </h3>
</template>

<script>
  export default {
    name: 'H3',
    props: {
      classList:{
        type: String,
        default: "",
      },
      text: {
        type: String,
        required: true
      }
    },
    computed: {
      classes() {
        return `h3 ${this.classList}`;
      },
    },
    methods: {
    }
  }
</script>

<style lang="scss">
  @import "./_h3.scss";
</style>

