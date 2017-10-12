import axios from 'axios'

const state = {
  all: []
}

const mutations = {
  addComment (state, { text, postId }) {
    // 变更状态
    state.all.push({ text, postId })
  }
}

const actions = {
  addComment ( { commit }, { text, postId } ) {
    console.log('++++postId+++', postId)
    axios.post('http://localhost:3008/comments',
      { text, postId }).then(
        res => {
          commit('addComment', { text, postId })
        }
      )
  },
  loadComments ( { commit } ) {
    axios.get('http://localhost:3008/comments')
         .then(
           res => {
             console.log(res.data)
             state.all = res.data
           }
         )
  }
}

export default {
  state,
  mutations,
  actions
}
