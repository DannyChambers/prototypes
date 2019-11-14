
<template>
  <p :class="classes">
    {{text}}
  </p>
</template>

<script>
  export default {
    name: 'T1',
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
        return `t1 ${this.classList}`;
      },
    },
    methods: {
    }
  }
</script>

<style lang="scss">
  @import "./_t1.scss";
</style>

