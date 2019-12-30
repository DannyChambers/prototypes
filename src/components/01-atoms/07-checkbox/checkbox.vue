<template>

  <label :class="classes">
    <span class="label_text">{{text}}</span>
    <input type="checkbox" />
    <em></em>
  </label>

</template>

<script>
  export default {
    name: 'Checkbox',
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
        return `label checkbox ${this.classList}`;  
      },
    },
    methods: {
      onClick() {
      }
    }
  }
</script>

<style lang="scss">
  @import "./_checkbox.scss";
</style>
