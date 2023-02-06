//require('dotenv').config();
//const api_key = process.env.API_TMDB;
const api_key = 'SHIEEEEEEEEEEEEET'

let title = '';
let imageUrl = '';

const movies = [
    { id: 5, title: 'Four Rooms' },
    { id: 680, title: 'Pulp Fiction' },
    { id: 769, title: 'Goodfellas' },
    { id: 184, title: 'Jackie Brown' },
    { id: 393, title: 'Kill Bill: Vol. 2' },
    { id: 24, title: 'Kill Bill: Vol. 1' },
    { id: 1991, title: 'Death Proof' },
    { id: 16869, title: 'Inglourious Basterds' },
    { id: 68718, title: 'Django Unchained' },
    { id: 273248, title: 'The Hateful Eight' },
    { id: 466272, title: 'Once Upon a Time… in Hollywood' },
    { id: 187, title: 'Sin City' },
    { id: 285923, title: 'Grindhouse' },
    { id: 500, title: 'Reservoir Dogs' },
]

export const generateRandomMovie = () => {
    return movies[Math.floor(Math.random() * movies.length)];
}

export const fetchTarantinoMovie = async () => { 
    const randomMovie = generateRandomMovie()
    const randomId = randomMovie.id;
    const url = `https://api.themoviedb.org/3/movie/${randomId}?api_key=${api_key}&language=en-US&append_to_response=images&include_image_language=en,null`
    const res = await fetch(url);
    const dataFetched = await res.json();
    title = dataFetched.title;
    let randomImageNumber = Math.floor(Math.random() * dataFetched.images.backdrops.length);
    imageUrl = `https://image.tmdb.org/t/p/w500/${dataFetched.images.backdrops[randomImageNumber].file_path}`;
    return { title, imageUrl };
}
