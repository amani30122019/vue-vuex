const state = {
    notes: [
        {
            "id": "e0917ae5-3271-4854-823d-e2ebc47b034b",
            "title": "Staffordshire architectures infomediaries2",
            "content": "input Nuevo Corporate innovate panel OptimizatOptimization Electronics Human"
        },
        {
            "id": "0889e075-3bc7-4444-a350-e3a27ce4c1ce",
            "title": "Paradigm Electronic middleware",
            "content": "Cornwall Hat auxiliary Manager copying Awesome HDD Senior Accountability Incredible sensor synthesize Jewelery scalable deliverables"
        },
        {
            "id": "b02e8dfb-49e5-4a01-868b-c88919a40392",
            "title": "Way Soft North",
            "content": "Dollar Ergonomic Chicken Implementation reintermediate RAM deliverables explicit expedite Account Steel reboot incentivize optimize Turkish"
        },
        {
            "id": "ea1b53ed-a5e0-4745-a859-c174b3db95f0",
            "title": "Londonderry Producer green",
            "content": "PNG Legacy deposit Generic Beauty mint RAM Investment Manager Wyoming transmitting Hat payment Architect markets"
        },
        {
            "id": "cf0d6f2a-7f02-49aa-9948-60c1dd4ef280",
            "title": "Orchestrator Configuration Missouri",
            "content": "composite Advanced withdrawal programming Ville salmon Forint USB Account Internal Rubber group Account Legacy Greater"
        },
    ]
}
const getters = {
    allNotes: (state) => state.notes,
    // oneNote: (state) => (noteId) => {
    //     const available = state.notes.findIndex(n => n.id === noteId)
    //     if (available !== -1) {
    //         state.notes.find(note => note.id === noteId)
    //     }
    // },

    oneNote: (state) => noteId => state.notes.find(note => note.id === noteId)

}
const mutations = {}
const actions = {}

export default {
    state, getters, mutations, actions
}