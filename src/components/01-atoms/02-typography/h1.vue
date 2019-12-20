
<template>
	<h1 :class="classes">
    {{text}}
  </h1>
</template>

<script>
  export default {
    name: 'H1',
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
        return `h1 ${this.classList}`;
      },
    },
    methods: {
    }
  }
</script>

<style lang="scss">
  @import "./_h1.scss";
</style>

