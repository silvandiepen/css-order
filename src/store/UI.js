const state = {
    search: null,
}

const mutations = {
    SET_SEARCH_TERM(state, value) {
        state.search = value
    },
}

const getters = {
    searchTerm: state => {
        return state.search
    },
}

const actions = {
    setSearchTerm({ commit }, value) {
        commit('SET_SEARCH_TERM', value)
    },
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations,
}
