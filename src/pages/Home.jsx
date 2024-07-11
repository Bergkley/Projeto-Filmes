import { useState, useEffect } from "react";

const moviesURL = import.meta.env.VITE_API;
const apiKey = import.meta.env.VITE_API_KEY;

const Home = () => {
  const [topmovies, setTopMovies] = useState([]);

  const getTopRatedMovies = async (url) => {
    const res = await fetch(url);
    const data = await res.json();

    setTopMovies(data.results);
  };
  useEffect(() => {
    const topRatedUrl = `${moviesURL}top_rated?${apiKey}`;
    getTopRatedMovies(topRatedUrl);
  }, []);
  return (
    <div className="container">
      <h2 className="title">Melhores Filmes</h2>
      {topmovies.length === 0 && <p>Carregando...</p>}
      {topmovies.length > 0 &&
        topmovies.map((moviesURL) => <p>{moviesURL.title}</p>)}
    </div>
  );
};
export default Home;
