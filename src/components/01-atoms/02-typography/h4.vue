
<template>
  <h4 :class="classes">
    {{text}}
  </h4>
</template>

<script>
  export default {
    name: 'H4',
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
        return `h4 ${this.classList}`;
      },
    },
    methods: {
    }
  }
</script>

<style lang="scss">
  @import "./_h4.scss";
</style>

