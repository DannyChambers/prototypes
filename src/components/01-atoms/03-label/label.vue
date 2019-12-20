<template>
  <label :class="classes">
    <span class="label_text">{{text}}</span>
    <slot></slot>
  </label>
</template>

<script>
  export default {
    name: 'Label',
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
        return `label ${this.classList}`;  
      },
    },
    methods: {
      onClick() {
      }
    }
  }
</script>

<style lang="scss">
  @import "./_label.scss";
</style>
