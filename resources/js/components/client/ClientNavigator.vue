<template>
    <span>
        <v-toolbar color="black" dark>
                <v-toolbar-title>
                    <router-link to ="/home">
                        <v-img src="/assets/tesla-lo.png" height="50px" width="50px"></v-img>
                    </router-link>
                </v-toolbar-title>
                <v-spacer></v-spacer>
                <v-btn class="hidden-sm-and-down white font-weight-bold black--text" @click="() => this.$router.push({name: 'Shop'})">Shop</v-btn>
                <v-btn class="hidden-sm-and-down white font-weight-bold black--text ml-3" @click="() => this.$router.push({name: 'Cart'})">Cart</v-btn>
                <v-btn class="hidden-sm-and-down white font-weight-bold black--text ml-3" @click="() => this.$router.push({name: 'Login'})">Login</v-btn>
        </v-toolbar>
    </span>
</template>

<script>
export default {

}
</script>

<style>

</style>
