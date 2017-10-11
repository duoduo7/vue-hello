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
      reversedComments: function () {
        return this.comments.slice().reverse()
      },
      comments: function () {
        return this.$store.state.comment.all
      }
    },
    methods: {
      handleClick: function () {
        console.log('xxxx', this.text)
        // this.comments.push({ text: this.text })
        this.$store.commit('addComment', { text: this.text })
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
