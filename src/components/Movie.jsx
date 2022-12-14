import React from "react";

const Movie = (props) => {
    const {
        Title: title,
        Year: year,
        Poster: poster,
        Type: type
    } = props
    return(
        <div className="card">
            <div className="card-image waves-effect waves-block waves-light">
                <img className="activator" src={poster} alt={title}/>
            </div>
            <div className="card-content">
                <span className="card-title activator grey-text text-darken-4">{title}</span>
            </div>
            <div className="card-reveal">
                <span className="card-title grey-text text-darken-4">{title}<i
                    className="material-icons right">close</i></span>
                <p>Here is some more information about this product that is only revealed once clicked on.</p>
            </div>
        </div>
    )
}

export default Movie