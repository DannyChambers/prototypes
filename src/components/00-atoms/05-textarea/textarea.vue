<template>
  <textarea rows="1" :class="classes" @keyup="autosize" />
</template>

<script>
  export default {
    name: 'TextInput',
    props: {
      classList:{
        type: String,
        default: "",
      }
    },
    computed: {
      classes() {
        return `textarea ${this.classList}`;  
      },
    },
    methods: {
      autosize: function(){
        console.log("called autosize");

        setTimeout(function(){

          this.$el.style.height = "auto";
          this.$el.style.height = `${this.$el.scrollHeight}px`;
          
        }.bind(this), 0);
      }
    }
  }
</script>

<style lang="scss">
  @import "./_textarea.scss";
</style>
