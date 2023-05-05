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
        getToDo(state){
            return state.list
        }
    },
    actions: {
        addList(context, payload){
            context.commit('ADD_TODO',payload)
        }
    },
    mutations: {
        ADD_TODO(state, payload){
            state.list.push(payload)
        }
    }
})
