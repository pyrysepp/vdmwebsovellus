import React from 'react'
import './CommentSection.css'
const InputField = ({inputText, handleInput, addComment, userName, handleUsername}) => {
    
        const checkIfEnter = (event) => {
        // Enter was pressed without shift key
        if (event.keyCode === 13 && !event.shiftKey)
        {
            event.preventDefault();
            
        }
        };
    

    return(
        <div className="inputfield">
        <h3>Kerro mitä mieltä olet ydinvoimasta!</h3>
        
        <form onSubmit={addComment}>
            <textarea
            type="text"
            value={userName}
            onChange={handleUsername}
            placeholder="Nimimerkki (maks. 8 merkkiä)"
            required
            maxLength="8"
            />
            <textarea 
            value={inputText} 
            onChange={handleInput}
            onKeyDown={checkIfEnter} 
            cols="30" 
            rows="4" 
            required
            maxLength="600"
            placeholder="Kerro mielipiteesi tähän! (maks. 600 merkkiä)"/>
        <div>
            <button className="lähetä-button" type="submit">lähetä</button>
        </div>
        </form> 
        
        </div>
    )
    
    
}
export default InputField