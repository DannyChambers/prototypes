<template>
  <span :class="classes">
    <slot></slot>
  </span>
</template>

<script>
  export default {
    name: 'Icon',
    props: {
      icon_placement: String,
      icon_graphic: String,
    },
    computed: {
      classes() {
        return `icon--${this.icon_placement} icon--${this.icon_graphic}`;  
      },
    },
    methods: {
    }
  }
</script>

<style lang="scss">
  @import "./_icon.scss";
</style>
