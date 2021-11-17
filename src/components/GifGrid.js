import React from 'react'
import useFetchGifs from '../hooks/useFetchGifs';
import GifGridItem from './GifGridItem';

const GifGrid = ({ category }) => {
    
    const {data: images, loading} = useFetchGifs( category );

    return (
        <div className="content-wrapper">
            <h3 className="animate__animated animate__fadeIn gif-title"> {images.length === 0 ? "" : `${category}:`} </h3>

            {loading && <p className="animate__animated animate__flash loading">Loading...</p>}
        
            {
                images.length === 0 && 
                <div className="container_not_found">
                    <h3 className="not_found">No GIFs found for your search</h3> 
                    <img src="crying-cowbow-emoji.gif" alt="No GIFs found for your search" className="img_results"></img>
                </div>
            }

            <div className="card-grid">

                {
                    images.map( img => {
                    return <GifGridItem 
                            key={ img.id }
                            { ...img }
                        />
                    })
                }

            </div>
        </div>
    )
}

export default GifGrid;

