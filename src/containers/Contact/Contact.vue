<template>
    <v-container fluid grid-list-xs style="padding: 0">
        <div class="">
            <NavigationBar/>
        </div>
        <div class="pt-5" style="height: 100vh; background: #F6F9FC">
            <ContactComponent />
        </div>
    </v-container>
</template>

<script>
    import NavigationBar from "@/components/NavigationBar/NavigationBar.vue"
    import ContactComponent from "@/components/ContactComponent/ContactComponent.vue"
    export default {
        name: "Contact",
        components: {
            NavigationBar,
            ContactComponent
        }
    }
</script>

