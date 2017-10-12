<template>
  <div class="comment-box">
    <input v-model="text" placeholder="comment">
    <button @click="handleClick">提交评论</button>
    <ul>
      <li v-for="comment in reversedComments">
        {{ comment.text }}
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'comment-box',
    data: () => ({
      text: ''
    }),

    computed: {
      postId: function () {
        return this.$route.params.id
      },
      reversedComments: function () {
        return this.comments.slice().reverse()
      },
      comments: function () {
        const allComments = this.$store.state.comment.all
        return allComments.filter(t =>
          {
            console.log(this.postId)
            return t.postId == this.postId
          }
        )
      }
    },
    methods: {
      handleClick: function () {
        this.$store.dispatch({ type: 'addComment',  text: this.text, postId: this.postId })
        this.text = ''
      }
    }
  }
</script>

<style scoped>
  .comment-box {
    width: 80%;
    margin: 20px auto;
  }
</style>
