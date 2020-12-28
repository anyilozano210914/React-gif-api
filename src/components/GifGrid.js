import React from 'react'
import { useFetchGifts } from '../hooks/useFetchGifs';
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({ category }) => {

    const {data:images, loading} = useFetchGifts( category );
    
    return (
        <React.Fragment>
            <h3 className="animate__animated animate__fadeIn">{ category }</h3>

        { loading && <p className="animate__animated animate__flash">loading</p>  }

            <div className="card-grid">
                <ol>
                    {
                        images.map(img => (
                            <GifGridItem key={ img.id } {...img}/>
                        ))
                    }
                </ol>
            </div>
        </React.Fragment>
    )
}
