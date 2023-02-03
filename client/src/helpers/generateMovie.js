//require('dotenv').config();
//const api_key = process.env.API_TMDB;
const api_key = 'SHIEEEEEEEEEEEEET'

const url = `https://api.themoviedb.org/3/movie/16869?api_key=${api_key}&language=en-US&append_to_response=images&include_image_language=en,null`
let title = '';
let imageUrl = '';

export const fetchTarantinoMovie = async () => {
    const res = await fetch(url);
    const dataFetched = await res.json();
    title = dataFetched.title;
    let randomImageNumber = Math.floor(Math.random() * dataFetched.images.backdrops.length);
    imageUrl = `https://image.tmdb.org/t/p/w500/${dataFetched.images.backdrops[randomImageNumber].file_path}`;
    return { title, imageUrl };
}
