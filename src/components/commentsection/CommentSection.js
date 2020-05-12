import React, {useState} from 'react'
import InputField from './InputField.js'
import CommentField from './CommentField.js'
import './CommentSection.css'


/*
Interaktiivinen sisältö kampanjasivulle
Kommenttiosiossa käyttäjä voi jättää kommentin sivustolle valitsemallaan käyttäjänimellä sekä 
katsoa muiden jättämiä kommentteja. Käyttäjä voi tykätä kommentista. Tykkäykset tallentuvat kommentti objektiin.
*/



let exampleComments = [
    {
        "username": "Pirjo",
        "value": "Tykkään tosi paljon!",
        "likes": 0,
        "id": 0
    },
    {
        "username": "Risto",
        "value": "Paras!",
        "likes": 0,
        "id" :   1
    }
]

const CommentSection = () => {

   
    // Tekstikenttien sisältöä käsittelevät statet sekä onChange -funktiot.

    const [inputText, setInput] = useState('')
    const [userName, setUsername] = useState('')

    const handleInput = (event) => {
        setInput(event.target.value)
    }
    const handleUsername = (event) => {
        setUsername(event.target.value)
    }

    // Kommenttilistaa käsittelevä state. Sisältää näkyvissä olevan listan kommenteista.

    const [comments, setComments] = useState(exampleComments)

    // Uuden kommentin lisäävä funktio
    // Funktio luo uuden kommentin inputtien sisällöstä sekä asettaa kommenttilistaksi uuden listan,
    // jossa on vanha lista + uusi kommentti
    
    const addComment = (event) => {
        event.preventDefault()
        if(inputText !== '') {
            const newComment = {
                "username": userName,
                "value": inputText,
                "likes": 0,
                "id": comments.length +1
            }
            setComments(comments.concat(newComment))
            exampleComments = exampleComments.concat(newComment)
            setUsername('')
            setInput('')
            
        }
    }
    
    

    return(
        <div className="commentSection">
        <InputField inputText={inputText} handleInput={handleInput} addComment={addComment}
        handleUsername={handleUsername} userName={userName}/>
        <CommentField comments={comments} />
        </div>
    )

    
}
export default CommentSection