<template>
  <nav-bar-component/>
  <div class="mt-3 container">
    <router-view/>
  </div>

</template>

<script>
  import NavBarComponent from "@/components/NavBarComponent";

  export default {
    components: {NavBarComponent}
  }
</script>
