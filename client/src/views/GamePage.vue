<template>
    <div class="gameContainer testBorder" id="GameDiv">
        <div>
            <img v-if="imageUrl" key="movieImage" :src="imageUrl" alt="movieImage" />
        </div>
        <div class="guesses testBorder">
            <TitleButton :randomTitle='randomTitles[0]' :rightTitle='title' />
            <TitleButton :randomTitle='randomTitles[1]' :rightTitle='title' />
            <TitleButton :randomTitle='randomTitles[2]' :rightTitle='title' />
            <TitleButton :randomTitle='randomTitles[3]' :rightTitle='title' />
        </div>
        <button 
            type="button" 
            class="btn btn-secondary btn-lg"
            @click="generateMovie" 
        >Next</button>
    </div>
</template>

<script>
import TitleButton from '../components/TitleButton.vue';
import { fetchTarantinoMovie, generateRandomMovie } from '../helpers/generateMovie.js';

export default {
    name: 'GamePage',
    components: {
        TitleButton
    },
    props: {
        msg: String
    },
    data() {
        return {
            title: '',
            imageUrl: '',
            otherMovies: [],
            randomTitles: [],
        }
    },
    methods: {
        async generateMovie() {
            const { title, imageUrl } = await fetchTarantinoMovie();
            this.title = title;
            this.imageUrl = imageUrl;
            console.log(this.title)
            console.log(this.imageUrl)
            this.generateOtherOptions();
            this.randomizeTitles();
        },
        generateOtherOptions() {
            this.otherMovies = [];
            while (this.otherMovies.length < 3) {
                const otherMovie = generateRandomMovie();
                if (otherMovie.title == this.title) {
                    continue
                }
                if (this.otherMovies.includes(otherMovie)) {
                    continue;
                }
                this.otherMovies.push(otherMovie);
            }
        },
        randomizeTitles() {
            this.randomTitles = [];
            this.randomTitles = [this.title, ...this.otherMovies.map(movie => movie.title)];
            this.randomTitles.sort(() => Math.random() - 0.5);
            console.log(this.randomTitles)
        },
    },
    async mounted() {
        this.generateMovie();
    },
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

#greenButton {
    background-color: #00ff00;
    color: #000000;
    border: 1px solid #000000;
    font-size: 2rem;
    padding: 1rem 3rem;
}

#GameDiv {
  margin-top: 5rem;
  padding: 10rem;
  display: flex;
  justify-content: center;
  align-items: center;
}

.testBorder {
    border: #000000;
    border-style: solid;
    border-width: 1px;
}

.gameContainer {
    display: flex;
    flex-direction: column;
}

.guesses {
    display: flex;
    flex-direction: row;
}
.guessOption {
    flex: 1;
    margin: 1rem;
    padding: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>
