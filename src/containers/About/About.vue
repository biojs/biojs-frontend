<template>
    <v-container fluid grid-list-xs style="padding: 0">
        <div class="">
            <NavigationBar/>
        </div>
        <div class="pt-5" style="height: 100vh; background: #F6F9FC">
            <AboutComponent />
        </div>
    </v-container>
</template>

<script>
    import NavigationBar from "@/components/NavigationBar/NavigationBar.vue"
    import AboutComponent from "@/components/AboutComponent/AboutComponent.vue"
    export default {
        name: "About",
        components: {
            NavigationBar,
            AboutComponent
        }
    }
</script>

