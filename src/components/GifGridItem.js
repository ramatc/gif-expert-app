import React from 'react'

const GifGridItem = ( {id, title, url} ) => {

    return (
        <div className="card animate__animated animate__fadeIn">
            <a href={ url } target="_blank" rel="noreferrer noopener" className="link-img">
                <img src={ url } alt={ title } />
                <p> { title } </p> 
            </a>
        </div>
    )
}

export default GifGridItem;
