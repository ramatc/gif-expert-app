import React from 'react'
import useFetchGifs from '../hooks/useFetchGifs';
import GifGridItem from './GifGridItem';

const GifGrid = ({ category }) => {
    
    const {data: images, loading} = useFetchGifs( category );

    return (
        <div className="content-wrapper">
            <h3 className="animate__animated animate__fadeIn gif-title"> {category} </h3>

            {loading && <p className="animate__animated animate__flash loading">Loading...</p>}

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

