import React from "react";
import Rating from "./Rating";
import PropTypes from 'prop-types';

export default function SongCard({data}){
    const {thumb,title,artist,rating}=data;
    return(
        <div className="song-card">
            <img src={thumb} alt={title} className="st-thumb" />
            <div className="song-title">
                {title} by {artist}
            </div>
            <div>
                <Rating stars={rating} />
            </div>
        </div>
    );
}


SongCard.propTypes={
    data : PropTypes.shape({
        id: PropTypes.string.isRequired,
        thumb: PropTypes.string.isRequired,
        title:PropTypes.string.isRequired,
        rating: PropTypes.number.isRequired,

    })
}