import React, {useState} from 'react'
import InputField from './InputField.js'
import CommentField from './CommentField.js'
import './CommentSection.css'

let exampleComments = [
    {
        "username": "rouva Y",
        "value": "Ihan jeba",
        "likes": 0,
        "id": 0
    },
    {
        "username": "herra X",
        "value": "Tosi jees!",
        "likes": 0,
        "id" :   1
    }
]

const CommentSection = () => {

   
    const [inputText, setInput] = useState('')
    const [userName, setUsername] = useState('')

    const handleInput = (event) => {
        setInput(event.target.value)
    }
    const handleUsername = (event) => {
        setUsername(event.target.value)
    }

    const [comments, setComments] = useState(exampleComments)

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