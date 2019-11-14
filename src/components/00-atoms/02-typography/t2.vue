
<template>
  <p :class="classes">
    {{text}}
  </p>
</template>

<script>
  export default {
    name: 'T2',
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
        return `t2 ${this.classList}`;
      },
    },
    methods: {
    }
  }
</script>

<style lang="scss">
  @import "./_t2.scss";
</style>

