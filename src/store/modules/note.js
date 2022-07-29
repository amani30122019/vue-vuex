import axios from 'axios'

const URL = "http://localhost:6060/notes"
const state = {
    notes: []
}
const getters = {
    allNotes: (state) => state.notes.reverse(),
    oneNote: (state) => noteId => state.notes.find(note => note.id === noteId)

}
const mutations = {
    savingNote: (state, note) => state.notes.unshift(note),
    settingNotes: (state, notes) => state.notes = notes,
    updatingNote: state => note => {
        const index = state.notes.findIndex(n => n.id === note.id)
        if (index !== -1) {
            state.notes.splice(index, 1, note)
        }
    },
    removingNote: (state, id) => {
        state.notes = state.notes.filter(note => note.id !== id)
    }

}
const actions = {
    async saveNote(context, payload) {
        const response = await axios.post(`${URL}`, payload)
        context.commit('savingNote', response.data)
    },
    async fetchAllNotes(context) {
        const res = await axios.get(`${URL}`)
        context.commit('settingNotes', res.data)
    },
    async updateNote(context, payload) {
        const updated = await axios.put(`${URL}/${payload.id}`, payload)
        context.commit('updatingNote', updated.data)
    },
    async removeNote(context, id) {
        await axios.delete(`${URL}/${id}`)
        context.commit('removingNote', id)
    }

}

export default {
    state, getters, mutations, actions
}