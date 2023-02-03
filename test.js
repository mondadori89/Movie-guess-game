const fs = require('fs');

const fetchTarantinoData = () => {
  const data = fs.readFileSync('./tarantino.json');
  const dataFetched = JSON.parse(data);
  return dataFetched;
};

const tarantinoData = fetchTarantinoData();

const moviesDirected = tarantinoData.crew.forEach(movie => {
    if (movie.job === 'Director') {
        console.log(`${movie.id} - ${movie.title}`);
    }
});
console.log(moviesDirected);
