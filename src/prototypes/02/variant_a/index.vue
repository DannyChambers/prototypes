
<template>
  <div>

    <div class="canvas dominant-w aspect-16-9">
        <div class="content">

            <div id="skull">

                <div id="skull-dome">

                </div>

                <div id="face">

                    <div class="eye-socket" id="eye-socket-1"></div>

                    <div class="eye-socket" id="eye-socket-2"></div>

                    <div id="nose">
                        
                        <div class="nose-bone" id="nose-bone-1"></div>

                        <div class="nose-bone" id="nose-bone-2"></div>

                    </div>

                    <div class="mandable" id="mandable-1"></div>

                    <div class="mandable" id="mandable-2"></div>

                    <div class="teeth-upper" id="teeth-upper-1">
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>

                    <div class="teeth-upper" id="teeth-upper-2">
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>

                </div>

                <div id="jaw">

                    <div class="jaw-bone" id="jaw-bone-1"></div>

                    <div class="jaw-bone" id="jaw-bone-2"></div>

                    <div class="teeth-lower" id="teeth-lower-1">
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>

                    <div class="teeth-lower" id="teeth-lower-2">
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>

                </div>

            </div>

        </div>
    </div>

  </div>
</template>

<script>

  export default {
    name: 'CSS Skull',
    components: {
    },
    props: {
      variant: String
    },
    computed: {
      classes() {
        return ``;  
      },
    },
    methods: {
    }
  }
</script>

<style lang="scss" scoped>
  @import "./_styles.scss";
</style>
