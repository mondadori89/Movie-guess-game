<template>
    <div class="col-md-auto" id="StartButton">
        <router-link to="/game">
            <button type="button" class="btn btn-secondary btn-lg">Start</button>
        </router-link>
    </div>
</template>

<script>
    export default {
        name: 'StartPage',
        props: {
            msg: String
        }
    }
</script>

<style scoped>
.btn {
    background-color: #000000;
    color: #ffffff;
    border: 1px solid #ffffff;
    font-size: 2rem;
    padding: 1rem 3rem;
}
.btn:hover {
    background-color: #ffffff;
    color: #000000;
    border: 1px solid #000000;
}

</style>
