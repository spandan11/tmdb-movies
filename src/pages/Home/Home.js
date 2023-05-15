import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import { Link } from 'react-router-dom';
import './home.css';
import Movielist from '../../components/MovieList/Movielist';

const Home = () => {
    const [popularMovies, setpopularMovies] = useState([]);
    useEffect(() => {
        Axios.get("https://api.themoviedb.org/3/movie/popular?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US").then((res) => {
            console.log(res.data.results);
            setpopularMovies(res.data.results);
        })
    }, [])


    return (
        <>
            <div className='poster'>
                <Carousel
                    showThumbs={false}
                    autoPlay={true}
                    transitionTime={3}
                    infiniteLoop={true}
                    showStatus={false}
                >
                    {
                        popularMovies.map((movie) => {
                            const { id, original_title, backdrop_path, vote_average, overview, release_date } = movie;
                            return (
                                <Link to={`/movie/${id}`}>
                                    <div className="posterImage" key={id}>
                                        <img src={`https://image.tmdb.org/t/p/original${backdrop_path}`} alt="" />
                                    </div>
                                    <div className="posterImage__overlay">
                                        <div className="posterImage__title">{movie ? original_title : ""}</div>
                                        <div className="posterImage__runtime">
                                            {movie ? release_date : ""}
                                            <span className="posterImage__rating">
                                                {movie ? vote_average : ""}
                                                <i className="fas fa-star"></i>
                                            </span>
                                        </div>
                                        <div className="posterImage__description">{movie ? overview : ""}</div>
                                    </div>
                                </Link>
                            );
                        })
                    }
                </Carousel>
            </div >
            <Movielist />
        </>
    );
};

export default Home;