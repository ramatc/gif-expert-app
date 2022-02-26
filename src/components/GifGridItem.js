import React from 'react'

const GifGridItem = ( {title, url} ) => {

    return (
        <div className="card animate__animated animate__fadeIn">
            <a href={ url } target="_blank" rel="noreferrer noopener" className="link-img">
                See Gif
            </a>
            <img src={ url } alt={ title } />
            <p> { title } </p> 
        </div>
    )
}

export default GifGridItem;
