<template>
  <div class="post-body">
    postId：{{ postId }}
  </div>
</template>

<script>
  export default {
    name: 'post-body',
    computed: {
      postId: function () {
        return this.$route.params.id
      }
    }
  }
</script>

<style scoped>
  .post-body {
    width: 80%;
    margin: 10px auto;
    background-color: #fff;
    box-shadow: 0 2px 2px rgba(0, 0, 0, 0.5);
    min-height: 200px;
  }
</style>
