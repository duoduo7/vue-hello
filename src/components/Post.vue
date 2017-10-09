<template>
  <div class="post">
    hello
    <post-body></post-body>
    <comment-box></comment-box>
  </div>
</template>

<script>
import CommentBox from './CommentBox'
import PostBody from './PostBody'
export default {
  name: 'post',
  components: { CommentBox, PostBody }
}

</script>

<style scoped>
  div {
    border: 2px solid red;
  }
</style>
