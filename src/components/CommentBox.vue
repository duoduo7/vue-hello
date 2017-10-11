<template>
  <div>
    <input v-model="text" placeholder="comment">
    <button @click="handleClick">提交评论</button>
    <ul>
      <li v-for="comment in comments">
        {{ comment.text }}
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'comment-box',
    data: () => ({
      text: '',
      comments: [
        { text: 'Foo' },
        { text: 'Bar' },
      ],
    }),
    methods: {
      handleClick: function () {
        console.log('xxxx', this.text)
        this.comments.push({ text: this.text })
        this.text = ''
      }
    }
  }
</script>
