<template>
  <div class="primary-navigation">
      <Container>
          <ul class="primary-navigation_list">
            <li v-for="navItem in primaryNavigation" class="primary-navigation_list-item">
              <a href="#" class="primary-navigation_link">{{ navItem.text }}</a>
            </li>
          </ul>
      </Container>
  </div>
</template>

<script>

  //Atoms

  //Molecules
  import Container from   '../../01-molecules/00-container/container.vue'

  //Organisms

  //Templates

  export default {
    name: 'PrimaryNavigation',
    components: {
      Container
    },
    props: {
    },
    computed: {
      classes(){
        return ``;  
      },
      primaryNavigation(){
        return this.$store.getters.buildPrimaryNav;
      }
    },
    methods: {
    }
  }
</script>

<style lang="scss">
  @import "./_primary_navigation.scss";
</style>