import React, { useState, useEffect } from 'react';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import './card.css';
import { Link } from 'react-router-dom';

const Card = ({ movie }) => {
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false)
        }, 1500)
    }, [])
    return (
        <>
            {
                isLoading
                    ? (
                        <div className="cards">
                            <SkeletonTheme color="#202020" highlightColor='#444'>
                                <Skeleton height={300} duration={2} />
                            </SkeletonTheme>
                        </div>
                    ) : (
                        <Link to={`/movie/${movie.id}`}>
                            <div className="cards">
                                <img src={`https://image.tmdb.org/t/p/original${movie ? movie.poster_path : ""}`} alt="" className="cards__img" />
                                <div className="cards__overlay">
                                    <div className="cards__title">
                                        {movie ? movie.original_title : ""}
                                    </div>
                                    <div className="cards__runtime">
                                        {movie ? movie.release_date : ""}
                                        <span className="cards__rating">{movie ? movie.vote_average : ""}</span>
                                    </div>
                                    <div className="cards__description">{movie ? movie.overview.slice(0, 118) + "..." : ""}</div>
                                </div>
                            </div>
                        </Link>
                    )
            }
        </>
    );
};

export default Card;