import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";




export const useFetchGifs = (category) => {

    const [images, setImages] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const getImages = async() => {
        const newImages = await getGifs(category);
        
        setImages(newImages);
        setIsLoading(false);
    }


    useEffect( () => {
        getImages();

    }, []) // cuando es un [] significa que solamente se va a ejecutar una vez en la creacion del componente y no se actualiza
    return {
        images,
        isLoading
    }
}
