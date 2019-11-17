<template>

  <div :class="classes" >
    <input type="radio" :name="groupname" />
    <em></em>
  </div>

</template>

<script>
  export default {
    name: 'RadioButton',
    props: {
      classList:{
        type: String,
        default: "",
      },
      groupname: {
        type: String,
        required: true
      }
    },
    computed: {
      classes() {
        return `radio_button ${this.classList}`;  
      },
    },
    methods: {
      onClick() {
      }
    }
  }
</script>

<style lang="scss">
  @import "./_radio_button.scss";
</style>
