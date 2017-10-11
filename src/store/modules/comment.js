import axios from 'axios'

const state = {
  all: [
    { text: 'first' },
    { text: 'second' }
  ]
}

const mutations = {
  addComment (state, { text }) {
    // 变更状态
    state.all.push({ text })
  }
}

const actions = {
  addComment ( { commit }, { text } ) {
    axios.post('http://localhost:3008/comments',
      { text }).then(
        res => {
          commit('addComment', { text })
        }
      )
  }
}


export default {
  state,
  mutations,
  actions
}
