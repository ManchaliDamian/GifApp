
import { GifGridItem } from "./GifGridItem";

import { useFetchGifs } from "../hooks/useFetchGifs";



export const GifGrid = ({category}) => {
    
    const {images, isLoading} = useFetchGifs( category);
    return (
    <>
        <h3>{category}</h3>
        {
            isLoading && ( <h2> Cargando...</h2>)
        }
        <div className="card-grid">
            {   //desestructuracion de cada images i.id y i.title
                images.map(( image ) => (
                     <GifGridItem 
                        key={image.id}
                        { ...image } // esparce todas las props que tenga image, porque si tenemos muchas props no se puede anotar una a una
                     />
            ))
            }
            
        </div>
    </> 
  )
}
