import axios from 'axios'

const state = {
  all: []
}

const mutations = {
  loadPosts (state, posts) {
    console.log('mutations', posts)
    state.all = posts
  }
}

const actions = {
  loadPosts ( { commit } ) {
    axios.get('http://localhost:3008/posts')
         .then(
           res => {
             const posts = res.data
             commit('loadPosts', posts)
           }
         )
  }
}


export default {
  state,
  mutations,
  actions
}
