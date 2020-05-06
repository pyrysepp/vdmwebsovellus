import React from 'react'
import './CommentSection.css'
const InputField = ({inputText, handleInput, addComment}) => {
    
    
    

    return(
        <div className="inputfield">
        <h3>Kerro mitä mieltä olet ydinvoimasta!</h3>
        
        <form onSubmit={addComment}>
            <input value={inputText} onChange={handleInput} required/>
        <div>
            <button type="submit">lähetä</button>
        </div>
        </form> 
        
        </div>
    )

    
}
export default InputField