<template>
    <div class="d-flex  flex-column justify-content-center align-items-center">
        <div class="display-3"><p class="h3 p-3"><i class="fa fa-note-sticky me-2"></i>Add new Note</p></div>
        <Form @submit="submitNote">
            <div class="card">
                <div class="card-body">
                    <div class="mb-3">
                        <label class="form-label" for="title">Title:</label>
                        <Field :rules="validateTitle" class="form-control" name="title" type="text"/>
                    </div>
                    <ErrorMessage class="text-danger m-2" name="title"/>
                    <div class="mb-3">
                        <label class="form-label" for="content">Content:</label>
                        <Field :rules="validateContent" as="textarea" class="form-control" name="content" row="3"
                               type="text"/>
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
    import {v4 as uuid} from 'uuid'


    export default {
        name: "NewNoteView",
        components: {

            Form,
            ErrorMessage,
            Field
        },
        methods: {
            goHome() {
                this.$router.push({name: 'home'})
            },
            submitNote(values, {resetForm}) {
                const note_data = {
                    id: uuid(),
                    title: values.title,
                    content: values.content,
                }
                this.$store.dispatch('saveNote', note_data)
                resetForm()
                this.goHome()
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
    }
</script>

<style scoped>
    .card {
        width: 25rem;
        border: none;
    }
</style>