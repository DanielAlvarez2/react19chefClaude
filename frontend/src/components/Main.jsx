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
            {ingredients.length > 0 && <section>
                <h2>Ingredients on hand:</h2>
                <ul>{list}</ul>
                <div className='get-recipe-container'>
                    <div>
                        <h3>Ready for a recipe?</h3>
                        <p>Generate a recipe from your list of ingredients.</p>
                    </div>
                    <button>Get a recipe</button>
                </div>
            </section>}
        </>
    )
}