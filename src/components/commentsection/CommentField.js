import React, {useState} from 'react'
import './CommentSection.css'

// Yksittäinen kommentti

const Comment = ({comment}) => {


    const [likes, setLikes] = useState(comment.likes)

    const [clicked, setClicked] = useState(false)

    const handleLike = () => {
        if(!clicked) {
            setClicked(true)
            comment.likes = comment.likes + 1
            setLikes(comment.likes)
           
        }
       
        
    }        
    return(
        <li className="singlecomment">
        <h3>{comment.username}</h3>
        <div className="comment-text">
        <p>{comment.value}</p>
        </div>
        <div className="commentlikes">
        <p>{likes} tykkäystä.</p> <button className="likebutton" onClick={handleLike}>Tykkää!</button>
        </div>     
        </li>
    )
}

// Mappaa propseina saadun kommenttilistan ja palauttaa monta yksittäistä kommenttia

const CommentField = ({comments}) => {  
    return(
        <ul className="commentList">
            {comments.map(c => 
                <Comment key={c.id} comment={c}/>
            )}
        </ul>
    ) 
}
export default CommentField