<template>
    <div class="d-flex  flex-column justify-content-center align-items-center">
        <div class="display-3 text-success"><p class="h3 p-3"><i class="fa fa-pen-alt me-2"></i>Edit Note</p></div>
        <Form @submit="updateNote">
            <div class="card">
                <div class="card-body">
                    <div class="mb-3">
                        <label class="form-label" for="title">Title:</label>
                        <Field :rules="validateTitle" class="form-control" name="title" type="text"
                               v-model="note.title"/>
                    </div>
                    <ErrorMessage class="text-danger m-2" name="title"/>
                    <div class="mb-3">
                        <label class="form-label" for="content">Content:</label>
                        <Field :rules="validateContent" as="textarea" class="form-control" name="content"
                               row="4" type="text"
                               v-model="note.content"/>
                    </div>
                    <ErrorMessage class="text-danger m-2" name="content"/>
                    <div class="d-flex justify-content-center my-3">
                        <button @click="goHome" class="btn btn-danger mx-3">Close</button>
                        <button class="btn btn-success" type="submit">Save</button>
                    </div>
                </div>
            </div>
        </Form>
    </div>
</template>

<script>
    import {ErrorMessage, Field, Form} from 'vee-validate'

    export default {
        name: "EditNoteView",
        components: {Field, Form, ErrorMessage},
        data() {
            return {
                note: {
                    id: this.$route.params.id,
                    title: '',
                    content: ''
                }
            }
        },

        methods: {
            goHome() {
                this.$router.push({name: 'home'})
            },
            updateNote(values) {
                const note_data = {
                    id: this.$route.params.id,
                    title: values.title,
                    content: values.content,
                }
                console.log(note_data)
            },
            validateTitle(value) {
                if (!value) {
                    return "Title field is empty,please fill in"
                }
                return true
            },
            validateContent(value) {
                if (!value) {
                    return "Content field is empty,please fill in"
                }
                return true
            },
        },
        mounted() {
            const note_id = this.$route.params.id
            if (note_id) {

                this.note = this.$store.getters.oneNote(note_id)
            }
        }
    }
</script>

<style scoped>
    .card {
        width: 25rem;
        border: none;
    }
</style>