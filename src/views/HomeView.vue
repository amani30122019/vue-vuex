<template>
    <div class="row">
        <div class="d-flex justify-content-start">
            <router-link :to="{name:'add-note'}" class="addlink"><i class="fa fa-plus"></i> Add Note</router-link>
        </div>
        <div class="note-list my-5">
            <note-item-component/>
        </div>
    </div>
</template>

<script>
    // @ is an alias to /src
    import NoteItemComponent from "@/components/NoteItemComponent";

    export default {
        name: 'HomeView',
        components: {NoteItemComponent},
    }
</script>
<style>
    .addlink {
        background-color: darkcyan;
        padding: 10px;
        margin: 5px;
        border-radius: 25%;
        color: white;
        font-size: 15px;
        box-shadow: darkcyan;
        text-decoration: none;


    }

    .note-list {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-gap: 2rem;
    }

</style>