<template>
    <v-container grid-list-md>
        <v-layout align-center justify-center row fill-height>
            <v-layout row wrap>
                <v-flex xs6 class="centerClass">
                    <v-card-title primary-title>
                        <div class="raisedCard">
                            <h3 class="headline mb-0" style="color:rgb(36, 180, 126);; font-weight: bold">
                                Welcome to BioJS
                            </h3>
                            <div class="my-4">
                                BioJS is a library of over hundred JavaScript components enabling you to visualize and process data using current web technologies.
                            </div>
                            <v-layout row wrap>
                                <v-flex md6 xs12 v-for="navigationItem in navigationItems" :key=navigationItem.name>
                                    <v-btn flat color="#f50057" dark @click="pushRoute(navigationItem.screen)">
                                        <div style="font-weight: 500">
                                        {{ navigationItem.name }}
                                        </div>
                                    </v-btn>
                                </v-flex>
                            </v-layout>
                        </div>
                    </v-card-title>
                </v-flex>
                <v-flex xs6 class="centerClass spiralContainer">
                    <v-img class="m-a spiral" max-height=600 max-width=400 :src="require('../../assets/phone.png')" />
                </v-flex>
            </v-layout>
        </v-layout>
    </v-container>
</template>

<script>
import "@/components/spiral.css"
    export default {
        data() {
            return {
                navigationItems: [{
                        name: "Components",
                        screen: "/components"
                    },
                    {
                        name: "About",
                        screen: "/about"
                    }
                ]
            }
        },
        methods: {
            pushRoute(routeName) {
                this.$router.push(routeName)
            }
        }
    }
</script>

<style>
 
    
    .raisedCard {
        border-radius: 20px;
        box-shadow: 2px 5px 30px #ccc;
        text-align: center;
        padding: 8.35mm;
        transition-duration : .2s
    }

    .raisedCard:hover{
        box-shadow: 2px 10px 50px #ccc;

    }
    

</style>