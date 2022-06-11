import React from 'react';

const Comments = (props) => {
    const handleSubmit = (e) =>{
        e.preventDefault();
        const comment = e.target.elements.comment.value;
        props.startAddingComments(comment,props.id);
        e.target.elements.comment.value='';
    }
    // console.log(props.comments);
    return (
        <div className="comments">
            {
                props.comments.map((comment,index) => {
                    return(
                        <p key={index}>{comment}</p>
                    )
                })
            }
            <form className="comment-form" onSubmit={handleSubmit}>
                <input type="text" placeholder="comment" name='comment'></input>
                <input type="submit" hidden></input>
            </form>
        </div>
    );
};

export default Comments;