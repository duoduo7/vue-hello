<template>
  <div class="post">
    <div class="upper">
      <post-body></post-body>
    </div>
    <div class="lower">
      <comment-box></comment-box>
    </div>
  </div>
</template>

<script>
  import CommentBox from './CommentBox'
  import PostBody from './PostBody'
  export default {
    name: 'post',
    components: { CommentBox, PostBody },
    data: function () {
      return {
        postId: '456'
      }
    }
  }

</script>

<style scoped>
  .upper {
    min-height: 300px;
    padding: 30px;
    background-color: #00bcd4;
  }
</style>
