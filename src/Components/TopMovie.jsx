import axios from "axios";
import "../styling/TopMovie.css"
import React, { useState, useEffect } from "react";
import Slider from "react-slick";

const baseURL = `https://api.themoviedb.org/3/movie/popular?api_key=31a6b18e67bfaf12776d9a9e364d02a5`;
const IMG_PATH = 'https://image.tmdb.org/t/p/w1280'


function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, background: "transparant" }}
            onClick={onClick}
        />
    );
}

function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, background: "transparant" }}
            onClick={onClick}
        />
    );
}
function TopMovie() {
    const [movies, setMovies] = useState([]);
    React.useEffect(() => {
        axios.get(baseURL).then((response) => {
            setMovies(response.data.results);
            console.log(response.data.results);
        });
    }, []);
    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 7,
        slidesToScroll: 7,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />
    };
    return (
        <div className="cardTopMovie">
            <Slider {...settings}>
                {movies.map((item, index) => {
                    return <div key={index} className="imageSlider">
                        <img src={IMG_PATH + item.poster_path} alt="" />
                    </div>
                })}
            </Slider>
        </div>
    );
};

export default TopMovie;
