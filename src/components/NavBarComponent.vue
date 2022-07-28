<template>
    <nav class="navbar navbar-expand-lg" style="background-color: #1376a0">
        <div class="container-fluid">
            <router-link :to="{name:'home'}" class="navbar-brand text-white">Note App</router-link>
        </div>
    </nav>
</template>

<script>
    export default {
        name: "NavBarComponent"
    }
</script>

