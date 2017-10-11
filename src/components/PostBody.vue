<template>
  <div>
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
