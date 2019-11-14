
<template>
  <p :class="classes">
    {{text}}
  </p>
</template>

<script>
  export default {
    name: 'T3',
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
        return `t3 ${this.classList}`;
      },
    },
    methods: {
    }
  }
</script>

<style lang="scss">
  @import "./_t3.scss";
</style>

