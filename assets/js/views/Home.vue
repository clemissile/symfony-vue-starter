<template>
    <div>
        <h1>Hello world</h1>
        <h1 v-if="firstTime">Welcome to my app</h1>
        <h1 v-else>Nice to see you again</h1>
    </div>
</template>

<script>
    export default {
        name: "Home",

        data() {
            return {
                isWorking: false,
                firstTime: false
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>
