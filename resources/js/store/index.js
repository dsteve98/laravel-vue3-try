import {createStore} from 'vuex'

export default createStore ({
    state: {
        list: [
            { title: "menyapu", status: false },
            { title: "cuci piring", status: false },
            { title: "pel", status: false },
        ],
    },
    getters: {
        getToDO(state){
            return state.list
        }
    },
    actions: {
        addList (context, payload){
            context.commit('ADD_TODO', payload)
        },
        deleteList (context, payload){
            context.commit('DELETE_TODO', payload)
        }
    },
    mutations: {
        ADD_TODO(state, payload){
            state.list.push(payload)
        },
        DELETE_TODO(state, payload){
            state.list.splice(payload, 1)
        }
    }
})
