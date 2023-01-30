<template>
  <router-view></router-view>
</template>

<script>
export default {
  name: 'App',
  components: {
  }
}
</script>

<style>
#app {
  background-image: url('./assets/moviestrip.png');
  background-position: center;
  background-repeat: no-repeat;
}
#StartButton {
  margin-top: 5rem;
  padding: 10rem;
  display: flex;
  justify-content: center;
  align-items: center;
}

</style>
