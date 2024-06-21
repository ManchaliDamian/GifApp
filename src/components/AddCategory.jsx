import { useState } from "react"


export const AddCategory = ({ onNewCategory}) => {
    
    const [inputValue, setInputValue] = useState('');

    
    const onInputChange = ({target}) => {
        
        setInputValue(target.value)
    }

    const onSubmit = (event) => {
        event.preventDefault();
    
        if(inputValue.trim().length <= 1) return;
        //condiciona a que sea de menos de un caracter y no adicione la letra al apretar enter
        onNewCategory(inputValue.trim()); // emite la categoria solamente
       
        setInputValue(''); //por cada enter elimina el texto en el input

    }

    return (
        <form onSubmit={ onSubmit }>
            <input  type="text"
                placeholder="Buscar gifs"
                value={ inputValue}
                onChange={ onInputChange}
            />

        </form>
    )
}
