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


export default {
  state,
  mutations
}
