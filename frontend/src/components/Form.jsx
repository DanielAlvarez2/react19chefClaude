export default function Form() {
    return(
        <form>
            <input  id="input" 
                    type="text" 
                    placeholder="e.g. oregano" 
                    aria-label="Add ingredient"/>
            <input  id="submit" 
                    type="submit" 
                    value="+ Add ingredient"/>
        </form>
    )
}