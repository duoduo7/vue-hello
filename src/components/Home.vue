<template>
  <h1>
    <ul>
      <li v-for="post in posts">
        <router-link :to="'/post/' + post.id">
          {{ post.title }}
        </router-link>
      </li>
    </ul>
  </h1>
</template>

<script>
  export default {
    computed: {
      posts: function () {
        return this.$store.state.post.all
      }
    }
  }
</script>
