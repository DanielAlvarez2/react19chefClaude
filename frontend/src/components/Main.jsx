import {useState} from 'react'

export default function Main(){

    const [ingredients, setIngredients] = useState([])

    const list = ingredients.map(item => <li key={item}>{item}</li>)

    function addIngredient(formData){
        const newIngredient = formData.get('ingredient')
        setIngredients(prev=>[...prev,newIngredient])
    }

    return(
        <>
            <form action={addIngredient}>
            <input  id="input" 
                    type="text"
                    name="ingredient" 
                    placeholder="e.g. oregano" 
                    aria-label="Add ingredient"/>
            <input  id="submit" 
                    type="submit" 
                    value="+ Add ingredient"/>
            </form>

            <ul>
                {list}
            </ul>
        </>
    )
}