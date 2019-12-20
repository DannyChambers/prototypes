
<template>
  <h5 :class="classes">
    {{text}}
  </h5>
</template>

<script>
  export default {
    name: 'H5',
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
        return `h5 ${this.classList}`;
      },
    },
    methods: {
    }
  }
</script>

<style lang="scss">
  @import "./_h5.scss";
</style>

