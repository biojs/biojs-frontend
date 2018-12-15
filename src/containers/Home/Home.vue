<template>
    <v-container fluid>
        <div class="mb-5">
            <NavigationBar/>
        </div>
        <div class="mt-5 pt-5">
            <HomeComponent />
        </div>
    </v-container>
</template>

<script>
    import NavigationBar from "@/components/NavigationBar/NavigationBar"
    import HomeComponent from "@/components/HomeComponent/HomeComponent"
    
    export default {
        name: "Home",
        components: {
            NavigationBar,
            HomeComponent
        }
    }
</script>

<style scoped>
    #navbar {
        margin: 10
    }
</style>

