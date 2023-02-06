<template>
    <button 
        class="btn btn-secondary btn-lg"
        @click="checkAnswer"
        >
        <h2>{{randomTitle}}</h2>
    </button>
</template>

<script>
export default {
    name: 'TitleButton',
    props: {
        randomTitle: String,
        rightTitle: String
    },
    data() {
        return {
            backgroundColor: 'blue',
        }
    },
    methods: {
        checkAnswer() {
        if (this.randomTitle === this.rightTitle) {
            alert('correct')
        } else {
            alert('incorrect')
        }
        }
    }
}
</script>

<style scoped>
</style>
