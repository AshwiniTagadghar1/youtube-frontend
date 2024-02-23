import React from 'react';
import { Comment } from '../models';

interface Props{
    comments: Comment[];
}

const CommentList:React.FC<Props> = ({ comments}) =>{

    return(
        <div className="comment-section">
            <h3>Comments</h3>
            <ul>
                {comments.map((comment) => (
                    <li key={comment.id}>{comment.author}:{comment.text} </li>
                ))}
            </ul>
        </div>
    );
};

export default CommentList;