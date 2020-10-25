<template>
    <div>
        <h1>Hello world</h1>
        <Loader v-if="isWorking"></Loader>
        <h1 v-if="firstTime">Welcome to my app</h1>
        <h1 v-else>Nice to see you again</h1>
    </div>
</template>

<script>
    import Loader from "../components/layout/loader";

    export default {
        name: "Home",
        data() {
            return {
                isWorking: false,
                firstTime: false
            }
        },
        components: {
            Loader
        },
        created() {
            this.isWorking = true;
            this.$http.get('/hello').then(res => {
                this.isWorking = false;
                this.firstTime = res.data;
            });
        }
    }
</script>

<style scoped>

</style>
