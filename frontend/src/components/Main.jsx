export default function Main(){
    const ingredients = ["Chicken","Oregano","Tomatoes"]
    const list = ingredients.map(item => <li key={item}>{item}</li>)
    function handleSubmit(event){
        event.preventDefault()
        const formData = new FormData(event.currentTarget)
        const newIngredient = formData.get('ingredient')
        ingredients.push(newIngredient)
        alert(ingredients)
    }

    return(
        <>
            <form onSubmit={handleSubmit}>
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