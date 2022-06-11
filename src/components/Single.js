import React from 'react';
import Photo from './Photo';
import Comments from './Comments';

const Single = (props) => {
    const {match,posts} = props
    const id = Number(match.params.id);
    const post = posts.find((post) => post.id === id)
    const comments = props.comments[id] || []
    const index=props.posts.findIndex((post) => post.id === id)
    if(props.loading){
        return <div className='loader'>...Loading</div>
    }else if(post){
        return (
            <div className='single-photo'>
                <Photo post={post} {...props} index={index} />
                <Comments {...props} comments={comments} id={id} />
            </div>
        );
    }else{
        return <h1>... no post found</h1>
    }
};

export default Single;