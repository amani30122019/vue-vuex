<template>
    <div :key="note.id" class="card note-item shadow-sm rounded" v-for="note in notes">
        <div class="card-body">
            <h5 class="card-title text-primary">{{note.title}} </h5>
            <p class="card-text">{{note.content}}</p>
            <div class="d-flex justify-content-xl-end">
                <button @click="goToEdit(note.id)" class="btn btn-success mx-3"><i class="fa fa-pen-alt"></i>
                </button>
                <button @click="remove(note.id)" class="btn btn-danger mr-2"><i class="fa fa-trash-alt"></i>
                </button>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "NoteListComponent",
        methods: {
            goToEdit(id) {
                this.$router.push({name: 'edit-note', params: {id: id}})
            },
            remove(id) {
                this.$store.dispatch('removeNote', id)
            },
            goHome() {
                this.$router.push({name: 'home'})
            }
        },
        computed: {
            notes() {
                return this.$store.getters.allNotes
            },
        },
        created() {
            this.$store.dispatch('fetchAllNotes')
        },

    }
</script>

<style scoped>
    .note-item {
        background-color: #c6efb8;

    }
</style>