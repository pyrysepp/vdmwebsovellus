import React, {useState} from 'react'
import './CommentSection.css'
const Comment = ({comment}) => {
    const [likes, setLikes] = useState(comment.likes)

    const handleLike = (event) => {
        comment.likes = comment.likes + 1
        setLikes(comment.likes) 
    }        
    return(
        <li className="singlecomment">
        <div>
        <p>{comment.value}</p>
        </div>
        <div>
        <p>{likes} likes.</p> <button onClick={handleLike}>Like!</button>
        </div>     
        </li>
    )
}


const CommentField = ({comments}) => {  
    return(
        <ul className="commentList">
            {comments.map(c => 
                <Comment comment={c}/>
            )}
        </ul>
    ) 
}
export default CommentField