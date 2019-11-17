<template>
  <div class="banner" :style="graphic">
    <div class="banner-inner"> 
      <Container>
        <div class="banner_content">
          <slot></slot>
        </div>
      </Container>
    </div>
  </div>
</template>

<script>

  //Atoms

  //Molecules
  import Container from   '../../01-molecules/00-container/container.vue'

  //Organisms

  //Templates

  export default {
    name: 'Banner',
    components: {
      Container
    },
    props: {
      url: {
        type: String,
        default: ''
      }
    },
    computed: {
      classes() {
        return ``;  
      },
      graphic() {
        return `background-image: url(${this.url});`;  
      },
    },
    methods: {
    }
  }
</script>

<style lang="scss">
  @import "./banner.scss";
</style>
