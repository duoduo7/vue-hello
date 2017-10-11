<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  created: function () {
    this.$store.dispatch({ type: 'loadComments' })
  }
}

</script>

<style >
  body {
    margin: 0;
  }
</style>
