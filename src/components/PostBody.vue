<template>
  <div class="post-body">
    <h1>{{ title }}</h1>
    {{ content }}
    评论数：{{ commentNo }}
  </div>
</template>

<script>
  export default {
    name: 'post-body',
    computed: {
      postId: function () {
        return this.$route.params.id
      },
      commentNo: function () {
        return this.$store.state.comment.all.length
      },
      post: function () {
        const posts = this.$store.state.post.all
        const post = posts.find( t => t.id == this.postId)
        return post
      },
      content: function () {
        return this.post.content
      },
      title: function () {
        return this.post.title
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
