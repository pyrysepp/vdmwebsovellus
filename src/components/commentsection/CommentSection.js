import React, {useState} from 'react'
import InputField from './InputField.js'
import CommentField from './CommentField.js'
import './CommentSection.css'

let exampleComments = [
    {
        
        "value": "Ihan jeba",
        "likes": 0
    },
    {
        
        "value": "Tosi jees!",
        "likes": 0
    }
]

const CommentSection = () => {

   
    const [inputText, setInput] = useState('')

    const handleInput = (event) => {
        setInput(event.target.value)
    }

    const [comments, setComments] = useState(exampleComments)

    const addComment = (event) => {
        event.preventDefault()
        if(inputText !== '') {
            const newComment = {
                "value": inputText,
                "likes": 0
            }
            setComments(comments.concat(newComment))
            exampleComments = exampleComments.concat(newComment)
        }
    }
    
    

    return(
        <div className="commentSection">
        <InputField inputText={inputText} handleInput={handleInput} addComment={addComment}/>
        <CommentField comments={comments} />
        </div>
    )

    
}
export default CommentSection