<template>
    <div class="gameContainer testBorder" id="GameDiv">
        <div>
            <h1 class="movieImage testBorder">Imagem aqui</h1>
        </div>
        <div class="guesses testBorder">
            <div class="guessOption testBorder"><h2>opção1</h2></div>
            <div class="guessOption testBorder"><h2>opção2</h2></div>
            <div class="guessOption testBorder"><h2>opção3</h2></div>
            <div class="guessOption testBorder"><h2>opção4</h2></div>
        </div>
        <router-link to="/">
            <button type="button" class="btn btn-secondary btn-lg">Leeets paly</button>
        </router-link>
        
    </div>
</template>

<script>
    export default {
        name: 'GamePage',
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
