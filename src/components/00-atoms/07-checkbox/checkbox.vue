<template>

  <div :class="classes" >
    <input type="checkbox" :name="groupname" />
    <em></em>
  </div>

</template>

<script>
  export default {
    name: 'Checkbox',
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
        return `checkbox ${this.classList}`;  
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
