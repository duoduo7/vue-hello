<template>
  <ul>
      <li v-for="comment in comments">
        {{ comment.text }}
      </li>
    </ul>
</template>

<script>
  export default {
    name: 'comment-box',
    data: () => ({
      comments: [
        { text: 'Foo' },
        { text: 'Bar' },
      ],
    })
  }
</script>
